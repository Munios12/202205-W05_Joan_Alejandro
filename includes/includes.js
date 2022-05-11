export function includes(array, value, fromIndex = 0) {
    const myTypeError = new TypeError();
    if (!Array.isArray(array)) {
        myTypeError.message = 'Cannot search in an undefined array';
        throw myTypeError;
    }

    if (isNaN(fromIndex)) {
        myTypeError.message = 'Not a valid index value';
        throw myTypeError;
    } else if (typeof fromIndex !== 'number') {
        fromIndex = Number(fromIndex);
    }
    // arr.length + fromIndex for negative values
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex;
    }

    for (let i = fromIndex !== 0 ? fromIndex : 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

console.log('Test:');
const testArray = ['apple', 1, null, undefined, 5, true];
const searchElement = 1;
console.log(includes(testArray, searchElement, -5));
