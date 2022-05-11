export function reduce(callback, array, initialValue) {
    const myTypeError = new TypeError();
    if (typeof callback !== 'function') {
        myTypeError.messageUX = 'callback must be a function';
        throw myTypeError;
    }
    if (!Array.isArray(array)) {
        myTypeError.messageUX = 'Cannot reduce an undefined array';
        throw myTypeError;
    }
    let numberOfValues = 0;
    let singleValue;
    for (const value of array) {
        if (value) {
            numberOfValues++;
            singleValue = value;
        }
    }
    if (numberOfValues === 0 && !initialValue) {
        myTypeError.messageUX =
            'Cannot reduce an empty array without an initial value';
        throw myTypeError;
    } else if (numberOfValues === 0 && initialValue) {
        return initialValue;
    } else if (numberOfValues === 1 && !initialValue) {
        return singleValue;
    }

    if (!initialValue) {
        let previousValue = array[0];
        let actualValue = array[1];
        for (let i = 1; i < array.length - 1; i++) {
            previousValue = callback(previousValue, actualValue);
            actualValue = array[i + 1];
        }
        return callback(previousValue, actualValue);
    } else {
        let previousValue = initialValue;
        let actualValue = array[0];
        for (let i = 0; i < array.length - 1; i++) {
            previousValue = callback(previousValue, actualValue);
            actualValue = array[i + 1];
        }
        return callback(previousValue, actualValue);
    }
}

const callback = (a, b) => a + b;
const testArray = [0, 1, 2, 3];
console.log(testArray);
// console.log(typeof testArray);
// const initialV = null;
console.log('Results:');
const testResult = reduce(callback, testArray);
console.log(typeof testResult);
console.log(testResult);

// console.log(typeof testArray);
const initialV = 10;
console.log('Results:');
const testResult2 = reduce(callback, testArray, initialV);
console.log(typeof testResult2);
console.log(testResult2);

const testArray2 = [0];
console.log(testArray2);
// console.log(typeof testArray);
// const initialV = null;
console.log('Results:');
const testResult3 = reduce(callback, testArray2);
console.log(typeof testResult3);
console.log(testResult3);
