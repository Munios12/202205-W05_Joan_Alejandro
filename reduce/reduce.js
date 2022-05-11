export function reduce(callback, array, initialValue) {
    const typeErrorNew = new TypeError();
    if (array === undefined) {
        typeErrorNew.messageUX = 'Cannot reduce an undefined array';
        throw typeErrorNew;
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
        typeErrorNew.messageUX =
            'Cannot reduce an empty array without an initial value';
        throw typeErrorNew;
    } else if (numberOfValues === 0 && initialValue) {
        return initialValue;
    } else if (numberOfValues === 1) {
        return array[array.indexOf(singleValue)];
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
    }
}

const callback = (a, b) => a + b;
const testArray = [];
console.log(testArray);
console.log(typeof testArray);
// const initialV = null;
console.log('Results:');
const testResult = reduce(callback, testArray);
console.log(typeof testResult);
console.log(testResult);
