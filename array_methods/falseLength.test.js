import { falseLength } from './falseLength';

describe('Given the function falseLength()', () => {
    describe('When receive an array', () => {
        test('Should return array length ', () => {
            const arrayTest = [2, 3];
            const expectedResult = 2;
            const result = falseLength(arrayTest);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When receive an empty array', () => {
        test('Should return 0', () => {
            const arrayTest = [];
            const expectedResult = 0;
            const result = falseLength(arrayTest);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When receive a string', () => {
        test('Should return an excepcion', () => {
            const input = 'Alex';
            expect(() => falseLength(input)).toThrow(RangeError);
        });
    });

    describe('When receive a number', () => {
        test('Should return an excepcion', () => {
            const input = 12;
            expect(() => falseLength(input)).toThrow(RangeError);
        });
    });

    describe('When receive a emptyObject', () => {
        test('Should return an excepcion', () => {
            const input = {};
            expect(() => falseLength(input)).toThrow(RangeError);
        });
    });
});
