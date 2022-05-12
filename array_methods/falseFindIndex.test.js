import { falseFindIndex } from './falseFindIndex.js';

describe('Given the function falseFindIndex', () => {
    describe('When receive callbackFn evaluates element > 13, [5, 12, 8, 130, 44]', () => {
        test('Then should be 3', () => {
            // Arrange
            const param = [(element) => element > 13, [5, 12, 8, 130, 44]];
            const expectedResult = 3;
            // Act
            const result = falseFindIndex(...param);
            // Assert
            expect(result).toBe(expectedResult);
        });
    });
    describe('When receive callbackFn evaluates element > 200, [5, 12, 8, 130, 44]', () => {
        test('Then should be -1', () => {
            // Arrange
            const param = [(element) => element > 200, [5, 12, 8, 130, 44]];
            const expectedResult = -1;
            // Act
            const result = falseFindIndex(...param);
            // Assert
            expect(result).toBe(expectedResult);
        });
    });
    describe('When do not receive a function', () => {
        test('Then should throw an error', () => {
            // Arrange
            const param = [undefined, [5, 12, 8, 130, 44]];
            // Act & Assert
            expect(() => falseFindIndex(...param)).toThrow(
                TypeError('callbackFn must be a function')
            );
        });
    });
    describe('When receive undefined array', () => {
        test('Then should throw an error', () => {
            // Arrange
            const param = [(element) => element > 200, undefined];
            // Act & Assert
            expect(() => falseFindIndex(...param)).toThrow(
                TypeError('Cannot search in an undefined array')
            );
        });
    });
});
