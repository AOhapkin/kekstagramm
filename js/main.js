import { getData } from './api.js';
import { generateRandomDataItem } from './generatedData.js';
import { renderPictures, showFilteredPictures, showFiltersSection } from './render-pictures.js';
import './upload-picture.js';
import { showError } from './utils.js';

const generatedData = Array.from({ length: 25 }, generateRandomDataItem);

function onDataSuccess(pictures) {
	renderPictures(pictures);
	showFiltersSection();
	showFilteredPictures(pictures);
}

function onDataFail() {
	showError();
	renderPictures(generatedData);
	showFiltersSection();
	showFilteredPictures(generatedData);
}

getData(onDataSuccess, onDataFail)