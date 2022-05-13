import { falseMap } from './falseMap.js';

describe('Given the function falseMap', () => {
    describe('When receive (e)=>e*2, [1, 2, 3]', () => {
        test('Then should be 6', () => {
            // Arrange
            const callbackFn = (e) => e * 2;
            const testArray = [1, 2, 3];
            const initial = [1, 4, 5];
            // Act
            const result = falseMap(callbackFn, testArray);
            // Assert
            expect(result).toBe(initial);
        });
    });

    describe('When receive an undefined array an initial value', () => {
        test('Then should throw an error', () => {
            // Arrange
            const callbackFn = (a, b) => a.concat(b);
            const testArray = undefined;
            const initialValue = 4;
            // Act & Assert
            expect(() => falseMap(callbackFn, testArray, initialValue)).toThrow(
                TypeError('Cannot reduce an undefined array')
            );
        });
    });
});
