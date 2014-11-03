'use strict';

module.exports = function () {
  return function (input, length) {
    length = length || 20;

    if(!input) {
      return '';
    }

    return input.split(' ').slice(0, length).join(' ');
  };
};
