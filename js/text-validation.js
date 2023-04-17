import {hasDuplicates} from "./utils.js";

const uploadForm = document.querySelector('.img-upload__form');
const tagsInput = uploadForm.querySelector('.text__hashtags');

// const hashtagPattern = /^#[a-zA-Z0-9]{1,19}$/;

function validateTags(tags) {
  if (hasDuplicates(tags)) {
    return 'удалите повторяющиеся теги';
  }
}

function onHashtagsInput() {
  const tagsArray = tagsInput.value.trim().split(' ').map((tag) => tag.toLowerCase());
  const errorText = validateTags(tagsArray);
  if (errorText) {
    tagsInput.setCustomValidity(errorText);
  } else {
    tagsInput.setCustomValidity('');
  }
  tagsInput.reportValidity();
}

export {onHashtagsInput};
