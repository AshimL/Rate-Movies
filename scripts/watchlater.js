import { getMatchingMovie } from "../data/movies.js";
import { removeFromWatchLater, watchlater } from "../data/watchL.js";


function renderWatchLaterPage(){
let watchlaterHTML = '';



watchlater.forEach((watchlaterList) =>{

  const watchlaterId = watchlaterList.movieId;
  const matchingMovie = getMatchingMovie(watchlaterId);

  if(matchingMovie){
    watchlaterHTML += `

    <div class="watchlater-item">
        <div class="poster">
          <img src=${matchingMovie.image} alt="Interstellar Poster">
        </div>
        <div class="details">
          <h2 class="movie-title">${matchingMovie.name}</h2>
          <p class="year-runtime">${matchingMovie.releaseDate} • ${matchingMovie.length}</p>
          <div class="rating-section">
            <span>IMDB: ${matchingMovie.imdb}  <i class="fa-solid fa-star"></i></span>
            <span class="delete-button js-delete-button" data-movie-id = ${matchingMovie.id}>Delete</span>
          </div>
          <p class="overview-title">Overview</p>
          <p class="overview">
            ${matchingMovie.overview}
          </p>
          <div class="movie-crew">
            <div class="credit">
              <span class="label">Director:</span> ${matchingMovie.director}
            </div>
            <div class="credit">
              <span class="label">Writer:</span> ${matchingMovie.writer}
            </div>
            <div class="credit">
              <span class="label">Actor:</span>  ${matchingMovie.actor}
            </div>
          </div>
        </div>
      </div> 
    `;
  }
});


  document.querySelector('.js-watchlater-content')
  .innerHTML = watchlaterHTML;

    EventListeners();
}


function EventListeners(){
  
  document.querySelectorAll('.js-delete-button')
  .forEach((link) =>{
    link.addEventListener('click', () =>{
     const {movieId} = link.dataset;
      removeFromWatchLater(movieId);
      renderWatchLaterPage();
    })
  })
}


renderWatchLaterPage();