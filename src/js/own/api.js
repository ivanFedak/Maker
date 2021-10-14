import getData from '../services/response'
const api = ()=>{


    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`;

    getData(API_URL)
        .then(res=>{console.log(res)}) 

}
export default api;