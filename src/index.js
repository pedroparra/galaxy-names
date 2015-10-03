import uniqueRandomArray from 'unique-random-array';
import data from './galaxy-names.json';

let getRandomItem = uniqueRandomArray(data);

module.exports = {
	all: data,
	random: random,
	addItem: addItem
};

function addItem(name) {
	data.push(name);
}

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
