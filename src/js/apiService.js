import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/'
const KEY = '23143199-b6bad35488b5353448d934ebd'


export default class NewsApiService {
    constructor(){
        this.page = 1;
        this.searchQuery = '';
    }
    
    getImages(){
         return axios.get(`${BASE_URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`)
            .then(response => {
                this.pageIncrement();
                return response;
            })
        
            
    }
    pageIncrement() {
            this.page += 1;
    };
    resetPage() {
        this.page = 1;
    }
    
    get query() {
    return this.searchQuery;
    };

    set query(newQuery) {
    this.searchQuery = newQuery;
    };
}