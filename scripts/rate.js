import { getMatchingMovie, movielist } from "../data/movies.js";
import { addToRate, rating, removeFromRating, saveToStorage } from "../data/rating.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { updateRating } from "../data/rating.js";


function renderRatingPage() {

  let ratingsHTML = '';

  rating.forEach((ratinglist) => {
    const ratingId = ratinglist.movieId;
    const matchingMovie = getMatchingMovie(ratingId);

    if (matchingMovie) {
      
      ratingsHTML += `
          <div class="rated-item js-rated-item-${matchingMovie.id}">
            <div class="poster">
                <img src="${matchingMovie.image}" alt="${matchingMovie.name} Poster">
            </div>
            <div class="details">
                <p class="rated-on">Rated on ${ratinglist.ratedOn}</p>
                <h2 class="movie-title">${matchingMovie.name}</h2>
                <p class="year-runtime">(${matchingMovie.releaseDate}) • ${matchingMovie.length}</p>
                <div class="rating-section">
                    <span>
                        Rating: <span class="rating-label" data-movie-id="${matchingMovie.id}">${ratinglist.rating}</span>
                        <span><i class="fa-solid fa-star"></i></span>
                    </span>
                    <input class='input js-input-${matchingMovie.id}' value="">
                    <span class="save-link js-save-link" data-movie-id="${matchingMovie.id}">Save</span>
                    <span class="rate-button js-rate-button" data-movie-id="${matchingMovie.id}">Rate</span>
                    <span class="delete-button js-delete-button" data-movie-id="${matchingMovie.id}">Delete</span>
                </div>
                <p class="overview-title">Overview</p>
                <p class="overview">${matchingMovie.overview}</p>
                <div class="movie-crew">
                  <div class="credit">
                    <span class="label">Director:</span> ${matchingMovie.director}
                  </div>
                  <div class="credit">
                    <span class="label">Writer:</span> ${matchingMovie.writer}
                  </div>
                  <div class="credit">
                    <span class="label">Actor:</span> ${matchingMovie.actor}
                  </div>
                </div>
            </div>
        </div>
      `;
    }
  });

  document.querySelector('.js-ratings-content').innerHTML = ratingsHTML;

  addEventListeners();
}


renderRatingPage();


function addEventListeners() {

  document.querySelectorAll('.js-rate-button').forEach((link) => {
    link.addEventListener('click', () => {
      const { movieId } = link.dataset;
      const container = document.querySelector(`.js-rated-item-${movieId}`);
      container.classList.add('is-editing');

    
    });
  });

  document.querySelectorAll('.js-save-link').forEach((link) => {
    link.addEventListener('click', () => {
      const { movieId } = link.dataset;
      let input = document.querySelector(`.js-input-${movieId}`);
      let newInput = Number(input.value);


      if (newInput < 0 || newInput >= 10) {
        alert('Rating must be at least 0 and less than 10');
        return;
      }

      const container = document.querySelector(`.js-rated-item-${movieId}`);
      container.classList.remove('is-editing');

      const ratingLabel = document.querySelector(`.rating-label[data-movie-id="${movieId}"]`);
      ratingLabel.innerHTML = newInput;


      updateRating(movieId, newInput);
    });
  });


 document.querySelectorAll('.js-delete-button').forEach((link)=>{
   link.addEventListener('click',  () =>{
    const {movieId} = link.dataset;

   removeFromRating(movieId)
   renderRatingPage();
   
   })
  })


}















