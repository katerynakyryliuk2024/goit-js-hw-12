export const fetchByQuery = searchedQuery => {
    return fetch(
        `https://pixabay.com/api/?key=48282241-c94e9d668c7a92092d53abf55&q=${searchedQuery}&per_page=9&image_type=photo&orientation=horizontal&safesearch=true`)
      
        .then(response => {

            if (!response.ok) {
                throw new Error(response.status);
            }
      
            return response.json();
        });
      
};