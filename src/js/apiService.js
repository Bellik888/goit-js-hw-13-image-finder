import axios from "axios";

function getImages() {
    axios.get('https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=dog&page=1&per_page=12&key=23143199');
}

export default getImages;