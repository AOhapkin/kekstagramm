const uploadForm = document.querySelector('.img-upload__form');
const tags = uploadForm.querySelector('.text__hashtags');

// const hashtagPattern = /^#[a-zA-Z0-9]{1,19}$/;

function onHashtagsInput() {
  const tagsArray = tags.value.trim().split(' ').map(tag => tag.toLowerCase());
  console.log(tagsArray);
}

export {onHashtagsInput}
