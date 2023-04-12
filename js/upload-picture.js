const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const editor = uploadForm.querySelector('.img-upload__overlay');

function showImageEditor() {
  editor.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function onUploadInputChange() {
  showImageEditor();
}

uploadInput.addEventListener('change', onUploadInputChange);
