import {isEscEvent} from './utils.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const editor = uploadForm.querySelector('.img-upload__overlay');
const editorCloseButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');

function showImageEditor() {
  editor.classList.remove('hidden');
  document.body.classList.add('modal-open');
  editorCloseButton.addEventListener('click', onEditorCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function hideImageEditor() {
  editor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  editorCloseButton.removeEventListener('click', onEditorCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadInput.value = '';
  hashtagsInput.value = '';
  descriptionInput.value = '';
  uploadForm.reset();
}

function onEditorCloseButtonClick() {
  hideImageEditor();
}

function onUploadInputChange() {
  showImageEditor();
}

function onDocumentKeydown(evt) {
  if (
    isEscEvent(evt)
    && document.activeElement !== hashtagsInput
    && document.activeElement !== descriptionInput
  ) {
    hideImageEditor();
  }
}

uploadInput.addEventListener('change', onUploadInputChange);
