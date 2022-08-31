import axios from 'axios';

const KEY = '28400879-5f1a3988aabd52ac255ecba31';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImg = async value => {
  const responce = await axios.get(value);
  return responce;
};
