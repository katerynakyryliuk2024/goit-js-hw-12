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
console.dir(loadMoreBtnEl);

let page = 1;

loader.style.display = 'none';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const searchedQuery =
      event.currentTarget.elements.search_input.value.trim();
    if (searchedQuery === '') {
      iziToast.warning({
        title: 'Caution',
        message: 'You forgot to full fill searching area',
      });
      return;
    }

    loader.style.display = 'inline-block';

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

  //   .then(data => {
  //     if (data.hits.length === 0) {
  //       iziToast.error({
  //         title: 'Error',
  //         message:
  //           'Sorry, there are no images matching your search query. Please try again!',
  //       });

  //       galleryEl.innerHTML = '';
  //       searchFormEl.reset();
  //       return;
  //     }

  //     const galleryTemplate = data.hits
  //       .map(el => createGalleryCardTemplate(el))
  //       .join('');
  //     galleryEl.innerHTML = galleryTemplate;

  //     const gallerySLB = new SimpleLightbox('.gallery a', {
  //       captionsData: 'alt',
  //       captions: true,
  //       captionDelay: 250,
  //     });

  //     gallerySLB.refresh();
  //   })
  //   .catch(err => {
  //     if (err.message === '404') {
  //       iziToast.error({
  //         title: 'Error',
  //         message:
  //           'Sorry, there are no images matching your search query. Please try again!',
  //       });
  //     }
  //     console.log(err);
  //   })
  //   .finally(() => {
  //     loader.style.display = 'none';
  //   });

  // console.dir(searchedQuery);
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
