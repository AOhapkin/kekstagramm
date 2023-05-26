import { generateRandomDataItem } from './generatedData.js';
import { renderPictures, showFilteredPictures, showFiltersSection } from './render-pictures.js';
import './upload-picture.js';

const generatedData = Array.from({ length: 25 }, generateRandomDataItem);

renderPictures(generatedData);
showFiltersSection();
showFilteredPictures(generatedData);
