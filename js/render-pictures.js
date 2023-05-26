/* global _:readonly */
import { showBigPicture } from './big-picture.js';
import { setFilterDefault, setFilterRandom, setFilterDiscussed } from './filter-pictures.js';
import { findElementById } from './utils.js';

const FILTER_BUTTON_CLASS = 'img-filters__button';
const FILTERS_BUTTON_ACTIVE_CLASS = 'img-filters__button--active';
const FILTERS = {
  'filter-default': setFilterDefault,
  'filter-random': setFilterRandom,
  'filter-discussed': setFilterDiscussed,
};
const picturesContainer = document.querySelector('.pictures');
const filtersSection = document.querySelector('.img-filters');
const filtersButtons = filtersSection.querySelectorAll('.img-filters__button');
const RENDER_TIME_OUT = 500;

function renderPictures(data) {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesFragment = document.createDocumentFragment();

  for (let i = 0; i < data.length; i++) {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = data[i].url;
    picture.querySelector('.picture__img').alt = data[i].alt;
    picture.querySelector('.picture__comments').textContent = data[i].comments.length;
    picture.querySelector('.picture__likes').textContent = data[i].likes;
    picture.dataset.id = data[i].id;
    picturesFragment.append(picture);
  }
  picturesContainer.append(picturesFragment);
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      const id = evt.target.closest('.picture').dataset.id;
      showBigPicture(findElementById(id, data));
    }
  });
}

function deletePictures() {
  let pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((pic) => {
    picturesContainer.removeChild(pic);
  });
}

function onFiltersSectionClick(evt, pictures) {
  const clickTarget = evt.target;

  if (clickTarget.classList.contains(FILTER_BUTTON_CLASS) && !clickTarget.classList.contains(FILTERS_BUTTON_ACTIVE_CLASS)) {
    filtersButtons.forEach((button) => button.classList.remove(FILTERS_BUTTON_ACTIVE_CLASS));
    clickTarget.classList.add(FILTERS_BUTTON_ACTIVE_CLASS);
    deletePictures();
    renderPictures(FILTERS[clickTarget.id](pictures))
  }
}

function showFiltersSection() {
  filtersSection.classList.remove('img-filters--inactive');
}

function showFilteredPictures(pictures) {
  filtersSection.addEventListener('click', _.debounce((evt) => onFiltersSectionClick(evt, pictures), RENDER_TIME_OUT));
}

export { renderPictures, showFiltersSection, showFilteredPictures };
