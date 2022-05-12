export function falseFindIndex(callbackFn, array) {
    const myTypeError = new TypeError();
    if (typeof callbackFn !== 'function') {
        myTypeError.message = 'callbackFn must be a function';
        throw myTypeError;
    }

    if (!Array.isArray(array)) {
        myTypeError.message = 'Cannot search in an undefined array';
        throw myTypeError;
    }

    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i]) === true) {
            return i;
        }
    }
    return -1;
}
