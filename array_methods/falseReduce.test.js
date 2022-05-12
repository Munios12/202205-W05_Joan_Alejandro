import { falseReduce } from './falseReduce.js';

describe('Given the function falseReduce', () => {
    describe('When receive (a,b)=>a+b, [0, 1, 2, 3]', () => {
        test('Then should be 6', () => {
            // Arrange
            const func = (a, b) => a + b;
            const testArray = [0, 1, 2, 3];
            const initial = 6;
            // Act
            const result = falseReduce(func, testArray);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive (a,b)=>a.concat(b), [[0,1],[2,3],[4,5]]', () => {
        test('Then should be [0,1,2,3,4,5]', () => {
            // Arrange
            const func = (a, b) => a.concat(b);
            const testArray = [
                [0, 1],
                [2, 3],
                [4, 5],
            ];
            const initial = [0, 1, 2, 3, 4, 5];
            // Act
            const result = falseReduce(func, testArray);
            // Assert
            expect(result).toStrictEqual(initial);
        });
    });
    describe('When receive (a,b)=>a+b, [5]', () => {
        test('Then should be 5', () => {
            // Arrange
            const func = (a, b) => a.concat(b);
            const testArray = [5];
            const initial = 5;
            // Act
            const result = falseReduce(func, testArray);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive (a,b)=>a+b, [], 5', () => {
        test('Then should be 5', () => {
            // Arrange
            const func = (a, b) => a.concat(b);
            const testArray = [];
            const initialV = 5;
            const initial = 5;
            // Act
            const result = falseReduce(func, testArray, initialV);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive (a,b)=>a+b, [], 5', () => {
        test('Then should be 5', () => {
            // Arrange
            const func = (a, b) => a + b;
            const testArray = [0, 1, 2, 3, 4];
            const initialV = 5;
            const initial = 15;
            // Act
            const result = falseReduce(func, testArray, initialV);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive an undefined array an initial value', () => {
        test('Then should throw an error', () => {
            // Arrange
            const func = (a, b) => a.concat(b);
            const testArray = undefined;
            const initialValue = 4;
            // Act & Assert
            expect(() => falseReduce(func, testArray, initialValue)).toThrow(
                TypeError('Cannot reduce an undefined array')
            );
        });
    });
    describe('When receive empty array and undefined initial value', () => {
        test('Then should throw an error', () => {
            // Arrange
            const func = (a, b) => a.concat(b);
            const testArray = [];
            // Act & Assert
            expect(() => falseReduce(func, testArray)).toThrow(
                TypeError(
                    'Cannot reduce an empty array without an initial value'
                )
            );
        });
    });
    describe('When do not receive a func function', () => {
        test('Then should throw an error', () => {
            // Arrange
            const func = null;
            const testArray = [0, 1, 2];
            // Act & Assert
            expect(() => falseReduce(func, testArray)).toThrow(
                TypeError('func must be a function')
            );
        });
    });
});
