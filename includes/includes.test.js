import { includes } from './includes.js';

describe('Given the function includes', () => {
    describe('When receive ["apple", null, undefined, 5, true], 5', () => {
        test('Then should be true', () => {
            // Arrange
            const param = [['apple', null, undefined, 5, true], 5];
            const expectedResult = true;
            // Act
            const result = includes(...param);
            // Assert
            expect(result).toBe(expectedResult);
        });
    });
    // describe('When receive fromIndex="string", not a number', () => {
    //     test('Then should throw an error', () => {
    //         // Arrange
    //         const param = [[7, 5, 9, 9], 9, 'string'];
    //         // Act & Assert
    //         expect(() => includes(...param)).toThrow(
    //             TypeError('Not a valid index value')
    //         );
    //     });
    // });
});
