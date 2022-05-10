export const falseLength = (arr) => arr.length;

export const falsePush = (arr, item) => {
    let myArray = [...arr];
    myArray[myArray.length] = item;
    return myArray;
};
