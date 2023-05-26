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

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

function findElementById(id, array) {
  return array.find((element) => element.id === +id);
}

export { getRandomPositiveInt, isEscEvent, hasDuplicates, checkStringLength, findElementById };
