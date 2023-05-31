import { isEscEvent } from "./utils.js";

const main = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success')
	.content
	.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error')
	.content
	.querySelector('.error');

function showUploadSuccessMessage() {
	const successMessage = successMessageTemplate.cloneNode(true);
	main.appendChild(successMessage);
	const successButton = successMessage.querySelector('.success__button');

	function onDocumentKeydown(evt) {
		if (isEscEvent(evt)) {
			main.removeChild(successMessage);
			document.removeEventListener('keydown', onDocumentKeydown);
			successButton.removeEventListener('click', onSuccessButtomClick);
		}
	}

	function onSuccessButtomClick() {
		main.removeChild(successMessage);
		successButton.removeEventListener('click', onSuccessButtomClick);
		document.removeEventListener('keydown', onDocumentKeydown);
	}

	function onDocumentClick(evt) {
		if (evt.target.className !== 'success') {
			main.removeChild(successMessage);
			document.removeEventListener('keydown', onDocumentKeydown);
			main.removeEventListener('click', onDocumentClick);
			successButton.removeEventListener('click', onSuccessButtomClick);
		}
	}

	successButton.addEventListener('click', onSuccessButtomClick);
	document.addEventListener('keydown', onDocumentClick);
	main.addEventListener('click', onDocumentClick);
}

function showUploadErrorMessage() {
	const errorMessage = errorMessageTemplate.cloneNode(true);
	main.appendChild(errorMessage);
	const errorButton = errorMessage.querySelector('.error__button');

	function onDocumentKeydown(evt) {
		if (isEscEvent(evt)) {
			main.removeChild(successMessage);
			document.removeEventListener('keydown', onDocumentKeydown);
			successButton.removeEventListener('click', onSuccessButtomClick);
		}
	}

	function onErrorButtomClick() {
		main.removeChild(successMessage);
		successButton.removeEventListener('click', onSuccessButtomClick);
		document.removeEventListener('keydown', onDocumentKeydown);
	}

	function onDocumentClick(evt) {
		if (evt.target.className !== 'error') {
			main.removeChild(errorMessage);
			document.removeEventListener('keydown', onDocumentKeydown);
			main.removeEventListener('click', onDocumentClick);
			errorButton.removeEventListener('click', onErrorButtomClick);
		}
	}

	errorButton.addEventListener('click', onErrorButtomClick);
	document.addEventListener('keydown', onDocumentKeydown);
	main.addEventListener('click', onDocumentClick);
}

export { showUploadSuccessMessage, showUploadErrorMessage }