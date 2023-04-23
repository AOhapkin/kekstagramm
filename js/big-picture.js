import { isEscEvent } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const image = bigPicture.querySelector('img');
const imageCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCounterBlock = bigPicture.querySelector('.social__comment-count');
const commentsTotalCount = bigPicture.querySelector('.comments-count');
const commentsAddButton = bigPicture.querySelector('.social__comments-loader');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

let comments = [];
const MIN_COMMENTS_NUMBER = 5;
const maxCommentsOnDisplay = MIN_COMMENTS_NUMBER;

function clearComments() {
  commentsList.innerHTML = '';
}

function setCommentCounter() {
  commentsCounterBlock.innerHTML = `${commentsList.children.length} из <span class="comments-count">${comments.length}</span> комментариев`;
}

function createComment(commentData) {
  const comment = commentTemplate.cloneNode(true);
  const commentImage = comment.querySelector('.social__picture');
  const text = comment.querySelector('.social__text');

  commentImage.src = commentData.avatar;
  commentImage.alt = commentData.name;
  text.textContent = commentData.message;

  return comment;
}

function onCommentsAddButtonClick() {
  maxCommentsOnDisplay += MIN_COMMENTS_NUMBER;
  clearComments();
  createComments();
  setCommentCounter();
}

function createComments() {
  clearComments();
  const fragment = document.createDocumentFragment();
  comments.slice(0, maxCommentsOnDisplay).forEach((comment) => {
    fragment.append(createComment(comment));
  });
  commentsList.append(fragment);
  if (comments.length < MIN_COMMENTS_NUMBER) {
    commentsAddButton.classList.add('hidden');
  } else {
    commentsAddButton.classList.remove('hidden');
    commentsAddButton.addEventListener('click', onCommentsAddButtonClick);
  }
  if (commentsList.children.length === comments.length) {
    commentsAddButton.classList.add('hidden');
  }
}

function renderBigPicture(data) {
  image.src = data.url;
  image.alt = data.description;
  imageCaption.textContent = data.description;
  likesCount.textContent = data.likes;
  commentsTotalCount.textContent = `${data.comments.length}`;
  comments = data.comments;
  // clearComments();
  if (comments.length > 0) {
    createComments();
  }
  setCommentCounter();
}

function onCloseButtonClick() {
  closeBigPicture();
}

function onDocumentKeydown(event) {
  if (isEscEvent(event)) {
    closeBigPicture();
  }
}

function showBigPicture(pictureData) {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  maxCommentsOnDisplay = MIN_COMMENTS_NUMBER;

  renderBigPicture(pictureData);
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', onCloseButtonClick);
}

export { showBigPicture };
