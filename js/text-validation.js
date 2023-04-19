import {hasDuplicates} from './utils.js';

const MAX_TAGS_NUMBER = 5; // максимальное количество тегов
const MAX_TAG_LENGTH = 20; // максимальная длина одного тега
const hashtagPattern = /^#[a-zA-Zа-яА-Я0-9]{1,19}$/;
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

function onHashtagsInput() {
  if (tagsInput.value.length === 0) {
    return;
  }
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
