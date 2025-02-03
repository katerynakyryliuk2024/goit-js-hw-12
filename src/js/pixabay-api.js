import axios from 'axios';
export const fetchByQuery = (searchedQuery, currentPage) => {
  const axiosOptions = {
    params: {
      key: '48282241-c94e9d668c7a92092d53abf55',
      q: searchedQuery,
      page: currentPage,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };

  return axios.get(`https://pixabay.com/api/`, axiosOptions);
};
