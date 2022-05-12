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
