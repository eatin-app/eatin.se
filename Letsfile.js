'use strict';

var exec = require('child_process').exec;
var s3 = require('s3');
var auth = require('./config/lets.auth');
var logger = require('lets').logger;


module.exports = function (lets) {
  var production = lets.Stage({
    localPath: 'builds/production',
    bucket: 'eatin.se'
  });

  production.config(auth.production);

  production.on('deploy:update', function (options, done) {
    logger.info('letsfile', 'Building production files');
    exec('gulp build-production', function (err, stdout, stderr) {
      if(err) {
        logger.error('letsfile', 'Error building production files');
        logger.error(err);
        logger.error(stderr);
      }
      else {
        logger.info('letsfile', 'Production files successfully built');
      }

      done(err);
    });
  });

  production.on('deploy:publish', function (options, done) {
    var client = s3.createClient({
      s3Options: {
        accessKeyId: options.accessKeyId,
        secretAccessKey: options.secretAccessKey,
        region: 'eu-west-1'
      }
    });

    logger.info('lets-s3', 'Sync to S3 starting');

    var uploader = client.uploadDir({
      localDir: options.localPath,
      deleteRemoved: true,
      s3Params: {
        Bucket: options.bucket
      }
    });

    uploader.on('error', function(err) {
      logger.error('lets-s3', err);
    });

    uploader.on('progress', function() {
      logger.debug('lets-s3', 'Progress', uploader.progressAmount, uploader.progressTotal);
    });

    uploader.on('end', function() {
      logger.info('lets-s3', 'S3 sync complete');
      done();
    });
  });

  lets.addStage('production', production);
};
