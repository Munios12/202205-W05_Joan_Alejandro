import { falsePush } from './falsePush';

export const falsePop = (arr) => {
    let myArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        myArr = falsePush(myArr, arr[i]);
    }

    return myArr;
};
