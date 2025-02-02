export const createGalleryCardTemplate = imgİnfo => {
  return `
    <div class = 'gallery-size'>
    <li class='gallery-card'>
    <a class='gallery-link' href='${imgİnfo.largeImageURL}'>
    <img class='galley-img' src='${imgİnfo.webformatURL}' alt='${imgİnfo.tags}' width='360'  '/>
    </a>
    <div class='description'>
    <p>Likes: ${imgİnfo.likes}</p>
    <p>Views: ${imgİnfo.views}</p> 
    <p>Comments: ${imgİnfo.comments}</p>
    <p> Downloads: ${imgİnfo.downloads}</p>
    </div>
    </li>
    </div>
    `;
};
