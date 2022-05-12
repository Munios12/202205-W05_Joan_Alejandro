export function falseReduce(func, array, initialValue) {
    const myTypeError = new TypeError();
    if (typeof func !== 'function') {
        myTypeError.message = 'func must be a function';
        throw myTypeError;
    }
    if (!Array.isArray(array)) {
        myTypeError.message = 'Cannot reduce an undefined array';
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
        myTypeError.message =
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
            previousValue = func(previousValue, actualValue);
            actualValue = array[i + 1];
        }
        return func(previousValue, actualValue);
    } else {
        let previousValue = initialValue;
        let actualValue = array[0];
        for (let i = 0; i < array.length - 1; i++) {
            previousValue = func(previousValue, actualValue);
            actualValue = array[i + 1];
        }
        return func(previousValue, actualValue);
    }
}
