const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=28e07edb830f62410b830383a942056d&page=1`;

const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;

// left a single quote at the end of the string to make it easier to add the search term
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=28e07edb830f62410b830383a942056d&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    showMovies(data.results);
}

getMovies(API_URL);

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        // destructure the movie object
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + movie.poster_path}" alt="Empty seats in a movie theatre with dim lighting">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${movie.overview}</p>
            </div>
        `;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    // prevent the form from submitting to the page
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});