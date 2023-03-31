import {generateRandomDataItem} from "./generatedData.js";
import {renderPictures} from "./render-pictures.js";
import {showBigPicture} from "./big-picture.js";

const generatedData = Array.from({length: 25}, generateRandomDataItem);

renderPictures(generatedData);
showBigPicture(generatedData[0]);
