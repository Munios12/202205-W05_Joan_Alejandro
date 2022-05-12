import { falsePush } from './falsePush';

describe('Given the function falsePush()', () => {
    describe('When receive an array and item', () => {
        test('Should return same array + item ', () => {
            const arrayTest = [1, 2, 3, 4, 5];
            const item = 6;
            const expectedResult = [1, 2, 3, 4, 5, 6];
            const result = falsePush(arrayTest, item);
            expect(result).toEqual(expectedResult);
        });
    });

    describe('When receive an empty array', () => {
        test('Should return same array + item ', () => {
            const arrayTest = [];
            const item = 6;
            const expectedResult = [6];
            const result = falsePush(arrayTest, item);
            expect(result).toEqual(expectedResult);
        });
    });

    describe('When receive an array butf no item', () => {
        test('Should throw an exception ', () => {
            const arrayTest = [1, 2, 3, 4];
            expect(() => falsePush(arrayTest)).toThrow(RangeError);
        });
    });

    describe('When we receive nothing', () => {
        test('Should throw an exception ', () => {
            expect(() => falsePush()).toThrow(RangeError);
        });
    });
});
