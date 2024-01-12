const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=28e07edb830f62410b830383a942056d&page=1`;

const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;

// left a single quote at the end of the string to make it easier to add the search term
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=28e07edb830f62410b830383a942056d&query="`;

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
}

getMovies(API_URL);