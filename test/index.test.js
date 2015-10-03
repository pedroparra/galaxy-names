import {expect} from 'chai';
import galaxyNames from '../src/index';

describe('galaxy-names', () => {
	describe('all', () => {
		it('should be an array of strings', () => {
			expect(galaxyNames.all).to.satisfy(isArrayOfStrings);
			function isArrayOfStrings(array) {
				return array.every(function (item) {
					return typeof item === 'string';
				});
			}
		});
		it('should content `Andromeda`', () => {
			expect(galaxyNames.all).to.include('Andromeda');
		});
	});

	describe('random', () => {
		it('should return a random item from the galaxyNames.all', () => {
			var randomItem = galaxyNames.random();
			expect(galaxyNames.all).to.include(randomItem);
		});

		it('should return a random items if passed a number', () => {
			var randomItem = galaxyNames.random(3);
			expect(randomItem).to.have.length(3);
			randomItem.forEach(function (item) {
				expect(galaxyNames.all).to.include(item);
			});
		});
	});

});
