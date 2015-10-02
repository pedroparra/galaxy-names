var uniqueRandomArray = require('unique-random-array');
var data = require('./galaxy-names.json');

module.exports = {
	all: data,
	random: uniqueRandomArray(data)
};
