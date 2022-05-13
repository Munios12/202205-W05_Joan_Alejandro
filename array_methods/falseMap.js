// import { falsePush } from './falsePush.js';
export function falseMap(callbackFn, array) {
    const myTypeError = new TypeError();
    if (typeof callbackFn !== 'function') {
        myTypeError.message = 'Not a valid function';
        throw myTypeError;
    }

    if (!Array.isArray(array)) {
        myTypeError.message = 'Not a valid array';
        throw myTypeError;
    }

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackFn(array[i], i, array));
    }
    return newArray;
}

// const fn = (e) => e * 2;
// const testArray = [];
// const result = falseMap(fn, testArray);
// console.log(result);
// console.log(typeof result);
