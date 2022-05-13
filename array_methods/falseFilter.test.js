import { falseFilter } from './falseFilter.js';

describe('Given the function falseFilter', () => {
    describe('When receive (e)=>e>2, [1, 2, 3, 4]', () => {
        test('Then should be [3, 4]', () => {
            // Arrange
            const callbackFn = (e) => e > 2;
            const testArray = [1, 2, 3, 4];
            const initial = [3, 4];
            // Act
            const result = falseFilter(callbackFn, testArray);
            // Assert
            expect(result).toStrictEqual(initial);
        });
    });
    describe('When receive (e)=>e>5, [1, 2, 3, 4]', () => {
        test('Then should be []', () => {
            // Arrange
            const callbackFn = (e) => e > 5;
            const testArray = [1, 2, 3, 4];
            const initial = [];
            // Act
            const result = falseFilter(callbackFn, testArray);
            // Assert
            expect(result).toStrictEqual(initial);
        });
    });
    describe('When receive not a valid function and [1, 2, 3, 4]', () => {
        test('Then should throw an error', () => {
            // Arrange
            const callbackFn = null;
            const testArray = [1, 2, 3, 4];
            // Act & Assert
            expect(() => falseFilter(callbackFn, testArray)).toThrow(
                TypeError('Not a valid function')
            );
        });
    });
    describe('When receive (e)=>e>2, and not a valid array []', () => {
        test('Then should throw an error', () => {
            // Arrange
            const callbackFn = (e) => e > 2;
            const testArray = null;
            // Act & Assert
            expect(() => falseFilter(callbackFn, testArray)).toThrow(
                TypeError('Not a valid array')
            );
        });
    });
});
