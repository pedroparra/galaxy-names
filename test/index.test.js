var expect = require('chai').expect;
var galaxyNames = require('../src/index');

describe('galaxy-names', function () {
	describe('all', function () {
		it('should be an array of strings', function () {
			expect(galaxyNames.all).to.satisfy(isArrayOfStrings);
			function isArrayOfStrings(array) {
				return array.every(function (item) {
					return typeof item === 'string';
				});
			}
		});
		it('should content `Andromeda`', function () {
			expect(galaxyNames.all).to.include('Andromeda');
		});
	});

	describe('random', function () {
		it('should return a random item from the galaxyNames.all', function () {
			var randomItem = galaxyNames.random();
			expect(galaxyNames.all).to.include(randomItem);
		});

		it('should return a random items if passed a number', function () {
			var randomItem = galaxyNames.random(3);
			expect(randomItem).to.have.length(3);
			randomItem.forEach(function (item) {
				expect(galaxyNames.all).to.include(item);
			});
		});
	});
});
