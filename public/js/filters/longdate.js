'use strict';

var dayNames = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
var monthNames = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

module.exports = function () {
  return function (input) {
    var date = new Date(input);

    // Invalid date
    if(isNaN(+date)) {
      return '';
    }

    return dayNames[date.getDay()] + ' ' + date.getDate() + ' ' + monthNames[date.getMonth()];
  };
};
