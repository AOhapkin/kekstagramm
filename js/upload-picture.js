import { isEscEvent } from './utils.js';
import { onHashtagsInput } from './hashtag-validation.js';
import { onDescriptionInput } from './text-validation.js';
import { setScaleControls, resetScaleControls, setSlider, removeSlider } from './editor-controls.js';

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
  hashtagsInput.addEventListener('input', onHashtagsInput);
  descriptionInput.addEventListener('input', onDescriptionInput);
  setScaleControls();
  setSlider();
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
  hashtagsInput.removeEventListener('input', onHashtagsInput);
  descriptionInput.removeEventListener('input', onDescriptionInput);
  resetScaleControls();
  removeSlider();
  // resetValid
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