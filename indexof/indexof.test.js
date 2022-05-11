import { indexOf } from './indexof.js';

describe('Given the function indexOf', () => {
    describe('When receive [7, 5, 9, 1], 9', () => {
        test('Then should be 2', () => {
            // Arrange
            const param = [[7, 5, 9, 1], 9];
            const expectedResult = 2;
            // Act
            const result = indexOf(...param);
            // Assert
            expect(result).toBe(expectedResult);
        });
    });
    describe('When receive [7, 5, 9, 9], 9, 3', () => {
        test('Then should be 3', () => {
            // Arrange
            const param = [[7, 5, 9, 9], 9, 3];
            const expectedResult = 3;
            // Act
            const result = indexOf(...param);
            // Assert
            expect(result).toBe(expectedResult);
        });
    });
    describe('When receive index greater than array length', () => {
        test('Then should be -1', () => {
            // Arrange
            const param = [[7, 5, 9, 1], 9, 4];
            const expectedResult = -1;
            // Act
            const result = indexOf(...param);
            // Assert
            expect(result).toBe(expectedResult);
        });
    });
    describe('When receive [7, 5, 9, 9], 9, "3"', () => {
        test('Then should be 3', () => {
            // Arrange
            const param = [[7, 5, 9, 9], 9, '3'];
            const expectedResult = 3;
            // Act
            const result = indexOf(...param);
            // Assert
            expect(result).toBe(expectedResult);
        });
    });
    describe('When receive fromIndex="string", not a number', () => {
        test('Then should throw an error', () => {
            // Arrange
            const param = [[7, 5, 9, 9], 9, 'string'];
            // Act & Assert
            expect(() => indexOf(...param)).toThrow(
                TypeError('Not a valid index value')
            );
        });
    });
    describe('When do not receive an array', () => {
        test('Then should throw an error', () => {
            // Arrange
            const param = [null, 9, 4];
            // Act & Assert
            expect(() => indexOf(...param)).toThrow(
                TypeError('Cannot search in an undefined array')
            );
        });
    });
    describe('When fromIndex = 2.3, not a valid integer number', () => {
        test('Then should throw an error', () => {
            // Arrange
            const param = [[0, 1, 2, 3], 3, 2.3];
            // Act & Assert
            expect(() => indexOf(...param)).toThrow(
                TypeError('Not a valid index value')
            );
        });
    });
});
