import { EffectsData } from "./effects-data.js";

const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const PREVIEW_DEFAULT_CLASS = 'img-upload__preview';

const editor = document.querySelector('.img-upload__overlay');
const scaleButtonUp = editor.querySelector('.scale__control--bigger');
const scaleButtonDown = editor.querySelector('.scale__control--smaller');
const scaleInput = editor.querySelector('.scale__control--value');
const uploadForm = document.querySelector('.img-upload__form');
const imagePreview = uploadForm.querySelector('.img-upload__preview img');
const effectsList = uploadForm.querySelector('.effects__list');
const sliderBlock = uploadForm.querySelector('.img-upload__effect-level');
const effectLevelInput = uploadForm.querySelector('.effect-level__value');
const slider = uploadForm.querySelector('.effect-level__slider');

let currentScale = SCALE_DEFAULT;
let currentEffect = '';

// SCALE CONTROLS

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

function resetScaleControls() {
	currentScale = SCALE_DEFAULT;
	scaleInput.value = currentScale + '%';
	imagePreview.style.transform = `scale(${currentScale / SCALE_MAX})`;
	scaleButtonUp.removeEventListener('click', onScaleButtonUpClick);
	scaleButtonDown.removeEventListener('click', onScaleButtonDownClick);
}

// SLIDER

/* global noUiSlider:readonly */

function removeSlider() {
	slider.noUiSlider.destroy();
	imagePreview.style.filter = '';
	imagePreview.className = PREVIEW_DEFAULT_CLASS;
	effectLevelInput.value = '';
}

function getSliderValue(filter, units) {
	slider.noUiSlider.on('update', (values, handle) => {
		effectLevelInput.value = values[handle];
		if (units) {
			imagePreview.style.filter = `${filter}(${effectLevelInput.value}${units})`;
		} else {
			imagePreview.style.filter = `${filter}(${effectLevelInput.value})`;
		}
	});
}

function setEffect(evt) {
	currentEffect = EffectsData[evt.target.value];

	if (!currentEffect) {
		effectLevelInput.value = '';
		sliderBlock.classList.add('hidden');
	} else {
		sliderBlock.classList.remove('hidden');
		imagePreview.classList.add(currentEffect.class);

		slider.noUiSlider.updateOptions({
			range: {
				min: currentEffect.min,
				max: currentEffect.max,
			},
			start: currentEffect.start,
			step: currentEffect.step,
		});
		getSliderValue(currentEffect.filter, currentEffect.units);
	}
}

function clearEffect() {
	imagePreview.className = PREVIEW_DEFAULT_CLASS;
	imagePreview.style.filter = '';
}

function onEffectsListChange(evt) {
	clearEffect();
	setEffect(evt);
}

function setSlider() {
	noUiSlider.create(slider, {
		range: {
			min: 0,
			max: 100,
		},
		start: 100,
		step: 1,
		connect: 'lower',
		format: {
			to: function (value) {
				if (Number.isInteger(value)) {
					return value.toFixed(0);
				}
				return value.toFixed(1);
			},
			from: function (value) {
				return parseFloat(value);
			},
		},
	});

	sliderBlock.classList.add('hidden');
	effectsList.addEventListener('change', onEffectsListChange);
}

export { setScaleControls, resetScaleControls, setSlider, removeSlider }