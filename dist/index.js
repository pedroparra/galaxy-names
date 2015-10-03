'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _galaxyNamesJson = require('./galaxy-names.json');

var _galaxyNamesJson2 = _interopRequireDefault(_galaxyNamesJson);

var getRandomItem = (0, _uniqueRandomArray2['default'])(_galaxyNamesJson2['default']);

module.exports = {
	all: _galaxyNamesJson2['default'],
	random: random
};

function random(number) {
	if (number === undefined) {
		return getRandomItem();
	} else {
		var randomItems = [];
		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}
