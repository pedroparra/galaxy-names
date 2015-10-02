var uniqueRandomArray = require('unique-random-array');
var data = require('./galaxy-names.json');
var getRandomItem = uniqueRandomArray(data);

module.exports = {
	all: data,
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
