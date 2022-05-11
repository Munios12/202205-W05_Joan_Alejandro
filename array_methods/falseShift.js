import { falsePush } from './falsePush';

export const falseShift = (arr) => {
    let myArr = [];

    for (let i = 1; i < arr.length; i++) {
        myArr = falsePush(myArr, arr[i]);
    }

    return myArr;
};
