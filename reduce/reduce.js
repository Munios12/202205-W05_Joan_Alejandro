export function reduce(callback, array, initialValue = 0) {
    // if (array === []) {
    //     TypeError
    // }

    if (array.length === 1) {
        return array[0];
    }
    if (array === [] && initialValue) {
        return initialValue;
    }

    if (!initialValue) {
        let previousValue = array[0];
        let actualValue = array[1];
        for (let i = 1; i < array.length - 1; i++) {
            previousValue = callback(previousValue, actualValue);
            actualValue = array[i + 1];
        }
        return callback(previousValue, actualValue);
    }
}
