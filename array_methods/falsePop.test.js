import { falsePop } from './falsePop';

describe('Given the function falsePop()', () => {
    describe('When receive an array', () => {
        test('Should return same array - last item ', () => {
            const arrayTest = [1, 2, 3, 4, 5];
            const expectedResult = [1, 2, 3, 4];
            const result = falsePop(arrayTest);
            expect(result).toEqual(expectedResult);
        });
    });
});
