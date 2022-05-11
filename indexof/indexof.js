export function indexOf(array, searchElement, fromIndex = 0) {
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

    for (let i = fromIndex ? fromIndex : 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            result = i;
            break;
        } else {
            result = -1;
        }
    }
    return result;
}

// console.log('Test_insitu:');
// const testArray = [0, 1, 2, 3];
// const elem = 2;
// const inde = 3;
// console.log(indexOf(testArray, elem));
// console.log(indexOf(testArray, elem, inde));
