import {checkStringLength} from './utils.js';

const uploadForm = document.querySelector('.img-upload__form');
const descriptionInput = uploadForm.querySelector('.text__description');
const MAX_DESCRIPTION_LENGTH = 140;

function onDescriptionInput() {
  const text = descriptionInput.value;
  let errorText = '';
  if (!checkStringLength(text, MAX_DESCRIPTION_LENGTH)) {
    errorText = `Максимум ${MAX_DESCRIPTION_LENGTH} символов. Сделайте короче на ${text.length - MAX_DESCRIPTION_LENGTH}.`;
  }
  descriptionInput.setCustomValidity(errorText);
  descriptionInput.reportValidity();
}

export {onDescriptionInput};
