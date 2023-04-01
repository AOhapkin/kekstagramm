function getRandomPositiveInt(a, b) {
    const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

    const randomResult = Math.random() * (max - min + 1) + min;

    return Math.floor(randomResult);
}

function checkStringLength(string, maxLength) {
    return string.length <= maxLength;
}

function isEscEvent(event) {
    return event.key === 'Escape' || event.keyCode === 27;
}

export {getRandomPositiveInt, checkStringLength, isEscEvent}
