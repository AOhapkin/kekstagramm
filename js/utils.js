const MESSAGE_TIME = 4000;
const ERROR_MESSAGE = 'Ошибка подключения к серверу. Приложение переходит в демо-режим.';

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

function showError() {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = ERROR_MESSAGE;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, MESSAGE_TIME);
}

export { getRandomPositiveInt, isEscEvent, hasDuplicates, checkStringLength, findElementById, showError };
