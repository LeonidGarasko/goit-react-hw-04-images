const KEY = '28400879-5f1a3988aabd52ac255ecba31';

const getImage = (query, page) =>
  fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => responce.json());

export default getImage;
