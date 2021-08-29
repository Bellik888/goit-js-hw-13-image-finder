import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/'
const KEY = '23143199-b6bad35488b5353448d934ebd'

function getImages(value) {
    let page = 1;
    return axios.get(`${BASE_URL}?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`);    
}

export default getImages ;