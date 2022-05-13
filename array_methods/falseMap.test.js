import { falseMap } from './falseMap.js';

describe('Given the function falseMap', () => {
    describe('When receive (e)=>e*2, [1, 2, 3]', () => {
        test('Then should be [2, 4, 6]', () => {
            // Arrange
            const callbackFn = (e) => e * 2;
            const testArray = [1, 2, 3];
            const initial = [2, 4, 6];
            // Act
            const result = falseMap(callbackFn, testArray);
            // Assert
            expect(result).toStrictEqual(initial);
        });
    });
    describe('When receive (e)=>typeof(e), [undefined, null, 3]', () => {
        test('Then should be ["undefined", "object", "number"]', () => {
            // Arrange
            const callbackFn = (e) => typeof e;
            const testArray = [undefined, null, 3];
            const initial = ['undefined', 'object', 'number'];
            // Act
            const result = falseMap(callbackFn, testArray);
            // Assert
            expect(result).toStrictEqual(initial);
        });
    });
    describe('When receive (e, i) => e*i, [1, 2, 3]', () => {
        test('Then should be [0, 2, 6]', () => {
            // Arrange
            const callbackFn = (e, i) => e * i;
            const testArray = [1, 2, 3];
            const initial = [0, 2, 6];
            // Act
            const result = falseMap(callbackFn, testArray);
            // Assert
            expect(result).toStrictEqual(initial);
        });
    });
    describe('When receive (e, i, [1, 2, 3]) => e*i*[1, 2, 3], [1, 2, 3]', () => {
        test('Then should be [0, 2, 6]', () => {
            // Arrange
            const testArray = [1, 2, 3];
            const callbackFn = (e, i, testArray) => e * i * testArray.length;
            const initial = [0, 6, 18];
            // Act
            const result = falseMap(callbackFn, testArray);
            // Assert
            expect(result).toStrictEqual(initial);
        });
    });
    describe('When receive null, [1, 2, 3]', () => {
        test('Then should throw an error', () => {
            // Arrange
            const callbackFn = null;
            const testArray = [1, 2, 3];
            // Act & Assert
            expect(() => falseMap(callbackFn, testArray)).toThrow(
                TypeError('Not a valid function')
            );
        });
    });
    describe('When receive (e)=>typeof(e), []', () => {
        test('Then should throw an error', () => {
            // Arrange
            const callbackFn = (e) => typeof e;
            const testArray = null;
            // Act & Assert
            expect(() => falseMap(callbackFn, testArray)).toThrow(
                TypeError('Not a valid array')
            );
        });
    });
});
