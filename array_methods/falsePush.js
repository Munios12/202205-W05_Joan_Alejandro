export const falsePush = (arr, item) => {
    if (arr && item) {
        let myArray = [...arr];
        myArray[myArray.length] = item;

        return myArray;
    } else if (!arr || !item) {
        const error = new RangeError('Item or Array needed');
        error.message = 'No has introducido un item o un array';
        throw error;
    }
};
