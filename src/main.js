import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.search-form');

const galleryEl = document.querySelector('.gallery');

const loader = document.querySelector('.loader');
console.dir(loader);

loader.style.display = 'none';

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.search_input.value.trim();
  if (searchedQuery === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'You forgot to full fill searching area',
    });
    return;
  }

  loader.style.display = 'inline-block';

  fetchByQuery(searchedQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        galleryEl.innerHTML = '';
        searchFormEl.reset();
        return;
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');
      galleryEl.innerHTML = galleryTemplate;

      const gallerySLB = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captions: true,
        captionDelay: 250,
      });

      gallerySLB.refresh();
    })
    .catch(err => {
      if (err.message === '404') {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      console.log(err);
    })
    .finally(() => {
      loader.style.display = 'none';
    });

  console.dir(searchedQuery);
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
