const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const editor = document.querySelector('.img-upload__overlay');
const scaleButtonUp = editor.querySelector('.scale__control--bigger');
const scaleButtonDown = editor.querySelector('.scale__control--smaller');
const scaleInput = editor.querySelector('.scale__control--value');
const uploadForm = document.querySelector('.img-upload__form');
const imagePreview = uploadForm.querySelector('.img-upload__preview img');

let currentScale = SCALE_DEFAULT;

function onScaleButtonUpClick() {
	if (currentScale < SCALE_MAX) {
		currentScale += SCALE_STEP;
		scaleInput.value = currentScale + '%';
		imagePreview.style.transform = `scale(${currentScale / SCALE_MAX})`;
	}
}

function onScaleButtonDownClick() {
	if (currentScale > SCALE_MIN) {
		currentScale -= SCALE_STEP;
		scaleInput.value = currentScale + '%';
		imagePreview.style.transform = `scale(${currentScale / SCALE_MAX})`;
	}
}

function setScaleControls() {
	scaleInput.value = SCALE_DEFAULT + '%';
	scaleButtonUp.addEventListener('click', onScaleButtonUpClick);
	scaleButtonDown.addEventListener('click', onScaleButtonDownClick);
}

export { setScaleControls }