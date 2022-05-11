export const falseLength = (arr) => arr.length;

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
