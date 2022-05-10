export function join(array, separator) {
    const joinElements = (array, separator) => {
        let joinString = '';
        for (let i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                separator = '';
            }
            joinString += array[i] + separator;
        }
        return joinString;
    };

    if (separator === '' || separator === null || separator === undefined) {
        return joinElements(array, '');
    }
    return joinElements(array, separator);
}
