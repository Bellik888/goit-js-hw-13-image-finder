import refs from './js/refs.js';
import NewsApiService from './js/apiService.js';
import CardTemplate from './templates/CardTemplate.hbs';

refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.searchBtn.addEventListener('click',onSearch)
refs.clearBtn.addEventListener('click', clearGallery);

const newsApiService = new NewsApiService;



function onSearch(e) {
    e.preventDefault();
    resetGallery();
    newsApiService.query = refs.input.value;
    newsApiService.resetPage();
    getInputQuery();
    scrollIntoView();
    
}
function onLoadMore() {
    getInputQuery();
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
    const gallery = document.getElementById('gallery');

    gallery.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}
function resetGallery() {
     refs.gallery.innerHTML = "";
}
function clearGallery() {
    refs.gallery.innerHTML = "";
    refs.input.value = '';
}
