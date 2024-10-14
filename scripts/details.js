import { movielist } from "../data/movies.js";
import { getMatchingMovie } from "../data/movies.js";
import { addToRate, rating } from "../data/rating.js";
import { addToWatchLater } from "../data/watchL.js";



let clickedMovieId = localStorage.getItem('selectedMovieId')

const matchingMovie = getMatchingMovie(clickedMovieId);


let movieDetailsHTML = `
    <div class="movie-details-container">
      <div class="movie-poster">
        <img src="${matchingMovie.image}" alt="Movie Poster">
      </div>
      <div class="movie-info">
        <h1 class="movie-name">${matchingMovie.name} (${matchingMovie.releaseDate})</h1>
        <p class="genre">${matchingMovie.genres} &#8226; ${matchingMovie.length}</p>
        
        <div class="overview">
          <h3>Overview</h3>
          <p>${matchingMovie.overview}</p>
        </div>
        
        <div class="movie-credits">
          <div class="credit">
            <span class="label">Director:</span> ${matchingMovie.director}
          </div>
          <div class="credit">
            <span class="label">Writer:</span>  ${matchingMovie.writer}
          </div>
          <div class="credit">
            <span class="label">Actor:</span>  ${matchingMovie.actor}
          </div>
        </div>
        
        <a href="${matchingMovie.trailerLink}" target="_blank" class="trailer-link">Watch Trailer</a>
        
        <div class="buttons">
          <button class="rate-button js-rate-button"  data-movie-id="${matchingMovie.id}">Rate it</button>
          <button class="watch-later-button js-watch-later-button" data-movie-id="${matchingMovie.id}"> Add to Watch List</button>
        </div>
      </div>
    </div>
`

document.querySelector('.js-detail-container')
.innerHTML = movieDetailsHTML


let rateButton = document.querySelector('.js-rate-button');

rateButton.addEventListener('click', () =>{
const {movieId} = rateButton.dataset;
  addToRate(movieId);
  window.location.assign('ratings.html')
})


let watchlaterButton = document.querySelector('.js-watch-later-button')

watchlaterButton.addEventListener('click', () =>{
  const {movieId} = watchlaterButton.dataset;
  addToWatchLater(movieId)

  window.location.assign('watchlater.html')
})



  



 

