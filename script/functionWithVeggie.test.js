import { falseLength, falsePush } from './functionWithVeggies';

describe('Given the function falseLength()', () => {
    describe('When receive an array', () => {
        test('Should return array length ', () => {
            const arrayTest = [2, 3];
            const expectedResult = 2;
            const result = falseLength(arrayTest);
            expect(result).toBe(expectedResult);
        });
    });
});

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
});
