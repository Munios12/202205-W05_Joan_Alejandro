import { falseUnshift } from './falseUnshift';

describe('Given the function falseUnshift()', () => {
    describe('When receive an array', () => {
        test('Should return same array + item in index = [0] ', () => {
            const arrayTest = [2, 3, 4, 5];
            const item = 1;
            const expectedResult = [1, 2, 3, 4, 5];
            const result = falseUnshift(arrayTest, item);
            expect(result).toEqual(expectedResult);
        });
    });
});
