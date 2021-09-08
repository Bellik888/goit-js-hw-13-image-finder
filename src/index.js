import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css"

import refs from './js/refs.js';
import NewsApiService from './js/apiService.js';
import CardTemplate from './templates/CardTemplate.hbs';

refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.searchBtn.addEventListener('click',onSearch)
refs.clearBtn.addEventListener('click', clearGallery);
refs.gallery.addEventListener('click', onOpenModal);

const newsApiService = new NewsApiService;



function onSearch(e) {
    e.preventDefault();
    resetGallery();
    newsApiService.query = refs.input.value;
    newsApiService.resetPage();
    getInputQuery();
    setTimeout(() => visibleBtn(), 1000);
}
function onLoadMore() {
    getInputQuery();
    scrollIntoView()
}
function getInputQuery() {
    newsApiService.getImages()
            .then(response => {
                cardUpdate(response.data.hits);
            })
            .catch(error => console.log(error))
}



function cardUpdate(response) {
    const markup = CardTemplate(response);

    refs.gallery.insertAdjacentHTML('beforeend', markup);
}


function scrollIntoView() {
    setTimeout(() => {
        refs.body.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }, 500);
}

function resetGallery() {
     refs.gallery.innerHTML = "";
}
function clearGallery() {
    refs.gallery.innerHTML = "";
    refs.input.value = '';
}
function visibleBtn() {
    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.clearBtn.classList.remove('is-hidden');
}

function onOpenModal(e) {
    const image = e.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${image}">`);
    instance.show()
}





