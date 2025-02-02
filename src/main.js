import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.search-form');

const galleryEl = document.querySelector('.gallery');

const loader = document.querySelector('.loader');

const loadMoreBtnEl = document.querySelector('.load-more-btn');

let page = 1;
let searchedQuery = '';

loader.style.display = 'none';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedQuery = event.currentTarget.elements.search_input.value.trim();

    if (searchedQuery === '') {
      iziToast.warning({
        title: 'Caution',
        message: 'You forgot to full fill searching area',
      });
      return;
    }

    loader.style.display = 'inline-block';

    page = 1;

    loadMoreBtnEl.classList.add('is-hidden');

    const { data } = await fetchByQuery(searchedQuery, page);

    loader.style.display = 'none';

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

    if (data.totalHits > 10) {
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
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
  } catch (error) {
    loader.style.display = 'none';
    if (err.message === '404') {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    console.log(error);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const { data } = await fetchByQuery(searchedQuery, page);

    const galleryTemplate = data.hits
      .map(el => createGalleryCardTemplate(el))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

    if ((page = data.totalHits)) {
      loadMoreBtnEl.classList.add('is-hidden');
      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (error) {
    console.log(error);
  }
};
