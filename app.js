const secrets = require('./secrets.json');
const apiKey = secrets.API_KEY;

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;

