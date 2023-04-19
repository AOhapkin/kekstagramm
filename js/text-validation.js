import {hasDuplicates} from './utils.js';

const MAX_TAGS_NUMBER = 5; // максимальное количество тегов
const MAX_TAG_LENGTH = 20; // максимальная длина одного тега
const hashtagPattern = /^#[a-zA-Zа-яА-Я0-9]+$/;
const uploadForm = document.querySelector('.img-upload__form');
const tagsInput = uploadForm.querySelector('.text__hashtags');


function validateTag(tag) {
  if (tag.length === 0) {
    return null;
  } else if (tag[0] !== '#') {
    return 'Хеш-теги должны начинаться с #';
  } else if (tag.length === 1) {
    return 'Хеш-тег не может состоять только из одной решётки';
  } else if (!tag.match(hashtagPattern)) {
    return 'Хеш-теги должны начинаться с # и состоять только из букв и чисел';
  } else if (tag.length > MAX_TAG_LENGTH) {
    return `Максимальная длина хештега: ${MAX_TAG_LENGTH}символов`;
  }
}

function validateTags(tags) {
  if (hasDuplicates(tags)) {
    return 'Удалите повторяющиеся теги';
  }
  if (tags.length > MAX_TAGS_NUMBER) {
    return `Максимальное число тегов: ${MAX_TAGS_NUMBER}`;
  }
  for (let i = 0; i < tags.length; i++) {
    const errorText = validateTag(tags[i]);
    if (errorText) {
      return errorText;
    }
  }
  return null;
}

function checkSpaces(inputString) {
  for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === ' ' || inputString === '#') {
      if (inputString[i - 1] !== ' ') {
        return 'Хэш-теги разделяются только пробелами';
      }
    }
  }
}

function onHashtagsInput() {
  const inputString = tagsInput.value;
  let errorText = '';
  if (inputString.length === 0) {
    return;
  }
  if (!checkSpaces(inputString)) {
    errorText = 'Хэш-теги разделяются только пробелами';
  } else {
    const tagsArray = inputString.trim().split(' ').filter((item) => item.length > 0).map((tag) => tag.toLowerCase());
    errorText = validateTags(tagsArray);
  }
  if (errorText) {
    tagsInput.setCustomValidity(errorText);
  } else {
    tagsInput.setCustomValidity('');
  }
  tagsInput.reportValidity();
}

export {onHashtagsInput};
