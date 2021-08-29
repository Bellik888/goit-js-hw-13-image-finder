import refs from './js/refs.js';
import getImages from './js/apiService.js';
import CardTemplate from './templates/CardTemplate.hbs';

refs.searchBtn.addEventListener('click', showImages);


// let inputValue = refs.input.value

function showImages(e) {
    e.preventDefault();
    
    let inputValue = refs.input.value;
    if (inputValue !== '') {
        getImages(inputValue)
            .then(response => cardUpdate(response.data.hits))
            .catch(error => console.log(error));
    }

}

function cardUpdate(response) {
    const markup = CardTemplate(response);

    refs.gallery.insertAdjacentHTML('beforeend', markup);
}
