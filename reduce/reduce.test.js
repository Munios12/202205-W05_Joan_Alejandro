import { reduce } from './reduce.js';

describe('Given the function reduce', () => {
    describe('When receive (a,b)=>a+b, [0, 1, 2, 3]', () => {
        test('Then should be 6', () => {
            // Arrange
            const callback = (a, b) => a + b;
            const testArray = [0, 1, 2, 3];
            const initial = 6;
            // Act
            const result = reduce(callback, testArray);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive (a,b)=>a.concat(b), [[0,1],[2,3],[4,5]]', () => {
        test('Then should be [0,1,2,3,4,5]', () => {
            // Arrange
            const callback = (a, b) => a.concat(b);
            const testArray = [
                [0, 1],
                [2, 3],
                [4, 5],
            ];
            const initial = [0, 1, 2, 3, 4, 5];
            // Act
            const result = reduce(callback, testArray);
            // Assert
            expect(result).toStrictEqual(initial);
        });
    });
    describe('When receive (a,b)=>a+b, [5]', () => {
        test('Then should be 5', () => {
            // Arrange
            const callback = (a, b) => a.concat(b);
            const testArray = [5];
            const initial = 5;
            // Act
            const result = reduce(callback, testArray);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive (a,b)=>a+b, [], 4', () => {
        test('Then should be 4', () => {
            // Arrange
            const callback = (a, b) => a.concat(b);
            const testArray = undefined;
            const initialValue = 4;
            // Act & Assert
            expect(() => reduce(callback, testArray, initialValue)).toThrow(
                TypeError
            );
        });
    });
});
