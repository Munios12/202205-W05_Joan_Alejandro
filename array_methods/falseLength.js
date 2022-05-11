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
