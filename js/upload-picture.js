import { isEscEvent } from './utils.js';
import { onHashtagsInput } from './hashtag-validation.js';
import { onDescriptionInput } from './text-validation.js';
import { setScaleControls, resetScaleControls, setSlider, removeSlider } from './editor-controls.js';
import { sendData } from './api.js';
import { showUploadSuccessMessage, showUploadErrorMessage } from './upload-messages.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const editor = uploadForm.querySelector('.img-upload__overlay');
const editorCloseButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');
const imagePreview = uploadForm.querySelector('.img-upload__preview img');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

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
  resetTextValidation();
}

function resetTextValidation() {
  hashtagsInput.setCustomValidity('');
  descriptionInput.setCustomValidity('');
}

function onEditorCloseButtonClick() {
  hideImageEditor();
}

function onUploadInputChange() {
  showImageEditor();
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    imagePreview.src = URL.createObjectURL(file);
  }
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

function onDataSendSuccess() {
  console.log('data send ok');
  showUploadSuccessMessage();
}

function onDataSendFail() {
  console.log('data dend bad');
  showUploadErrorMessage();
}

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(
    onDataSendSuccess,
    onDataSendFail,
    new FormData(evt.target)
  );
  hideImageEditor();
});
