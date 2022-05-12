export function falseIndexOf(array, searchElement, fromIndex = 0) {
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

    if (!Number.isInteger(fromIndex)) {
        myTypeError.message = 'Not a valid index value';
        throw myTypeError;
    }

    let result;
    if (fromIndex >= array.length) {
        result = -1;
        return result;
    }
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex;
    }

    for (let i = fromIndex !== 0 ? fromIndex : 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            result = i;
            break;
        } else {
            result = -1;
        }
    }
    return result;
}
