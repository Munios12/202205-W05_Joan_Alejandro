export const falseLength = (arr) => {
    if (typeof arr === 'string' || typeof arr === 'number') {
        const error = new RangeError('This is not an array');
        error.message = 'No has introducido una array';
        throw error;
    } else if (arr.length === undefined) {
        const error = new RangeError('You have introduce an object');
        error.message = 'Has introducido un objeto';
        throw error;
    } else {
        return arr.length;
    }
};

export const falsePush = (arr, item) => {
    let myArray = [...arr];
    myArray[myArray.length] = item;
    return myArray;
};

export const falsePop = (arr) => {
    let myArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        myArr = falsePush(myArr, arr[i]);
    }

    return myArr;
};

export const falseShift = (arr) => {
    let myArr = [];

    for (let i = 1; i < arr.length; i++) {
        myArr = falsePush(myArr, arr[i]);
    }

    return myArr;
};

export const falseUnshift = (arr, item) => {
    let myArr = [item, ...arr];

    return myArr;
};
