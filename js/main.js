import {generateRandomDataItem} from "./generatedData.js";
import {renderPictures} from "./render-pictures.js";

const generatedData = Array.from({length: 25}, generateRandomDataItem);

renderPictures(generatedData);
