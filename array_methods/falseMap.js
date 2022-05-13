export function falseMap(callbackFn, array) {
    const myTypeError = new TypeError();
    if (typeof callbackFn !== 'function') {
        myTypeError.message = 'callbackFn must be a function';
        throw myTypeError;
    }

    if (!Array.isArray(array)) {
        myTypeError.message = 'Not a valid array';
        throw myTypeError;
    }

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[newArray.length] = callbackFn(array[i], i, array);
    }
    return newArray;
}
