import {
    falseLength,
    falsePop,
    falsePush,
    falseShift,
    falseUnshift,
} from './functionWithVeggies';

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

    describe('When receive an array but no item', () => {
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
