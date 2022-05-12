import { falseShift } from './falseShift';

describe('Given the function falseShift()', () => {
    describe('When receive an array', () => {
        test('Should return same array - first item ', () => {
            const arrayTest = [1, 2, 3, 4, 5];
            const expectedResult = [2, 3, 4, 5];
            const result = falseShift(arrayTest);
            expect(result).toEqual(expectedResult);
        });
    });
});
