import axios from 'axios';
export const fetchByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    key: '48282241-c94e9d668c7a92092d53abf55',
    q: searchedQuery,
    per_page: '9',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return axios.get(`https://pixabay.com/api/?${searchParams}`);
};
