import { join } from './join.js';

describe('Given the function join ', () => {
    describe('When receive ["apple", 2.3], null', () => {
        test('Then should be "apple2.3"', () => {
            // Arrange
            const testArray = ['apple', 2.3];
            const separator = null;
            const initial = 'apple2.3';
            // Act
            const result = join(testArray, separator);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive ["apple", 2.3], ""', () => {
        test('Then should be "apple2.3"', () => {
            // Arrange
            const testArray = ['apple', 2.3];
            const separator = null;
            const initial = 'apple2.3';
            // Act
            const result = join(testArray, separator);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive ["apple", 2.3], undefined', () => {
        test('Then should be "apple2.3"', () => {
            // Arrange
            const testArray = ['apple', 2.3];
            const separator = null;
            const initial = 'apple2.3';
            // Act
            const result = join(testArray, separator);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive [], ""', () => {
        test('Then should be ""', () => {
            // Arrange
            const testArray = [];
            const separator = '';
            const initial = '';
            // Act
            const result = join(testArray, separator);
            // Assert
            expect(result).toBe(initial);
        });
    });
    describe('When receive ["apple", 2.3], ", "', () => {
        test('Then should be "apple, 2.3"', () => {
            // Arrange
            const testArray = ['apple', 2.3];
            const separator = ', ';
            const initial = 'apple, 2.3';
            // Act
            const result = join(testArray, separator);
            // Assert
            expect(result).toBe(initial);
        });
    });

    // EXEPTIONS
    describe('When receive undefined, ""', () => {
        test('Then should throw an exception', () => {
            // Arrange
            const testArray = undefined;
            const separator = '';
            // Act & Assert
            expect(() => join(testArray, separator)).toThrow(Error);
        });
    });
});
