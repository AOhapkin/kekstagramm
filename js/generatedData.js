import {getRandomPositiveInt} from './utils.js';

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Человек-шмель',
  'AAArrrooon',
  'Bittah Beggar',
  'Корги Даллас',
  'Grey stoonneeee'
];

function generateRandomCommentsItem() {
  return {
    id: getRandomPositiveInt(1, 25),
    avatar: `img/avatar-${getRandomPositiveInt(1, 6)}.svg`,
    message: COMMENTS[getRandomPositiveInt(0, COMMENTS.length)],
    name: NAMES[getRandomPositiveInt(0, NAMES.length)]
  };
}

function generateRandomDataItem() {
  return {
    id: getRandomPositiveInt(1, 25),
    url: `photos/${getRandomPositiveInt(1, 25)}.jpg`,
    description: 'Случайное описание фотографии',
    likes: getRandomPositiveInt(15, 200),
    comments: Array.from({length: getRandomPositiveInt(0, 5)}, generateRandomCommentsItem),
  };
}

export {generateRandomDataItem};
