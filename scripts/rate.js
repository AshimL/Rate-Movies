import { getMatchingMovie, movielist } from "../data/movies.js";
import { addToRate, rating } from "../data/rating.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";


let ratingId = localStorage.getItem('ratingId');

// if (!rating.some(rated => rated.movieId === ratingId)) {
//   addToRate(ratingId);
// }

let exists = false;

for (let i = 0; i < rating.length; i++) {
  if (ratingId === rating[i].movieId) {
    exists = true;
    break;
  }
}

if (!exists) {
  addToRate(ratingId)
}

// Save it to github





let ratingsHTML = '';

rating.forEach((rating) => {
  const ratingId = rating.movieId;
  const matchingMovie = getMatchingMovie(ratingId);

  if (matchingMovie) {

    const today = dayjs();
    const dateString = today.format('dddd, MMMM D');


    ratingsHTML += `
          <div class="rated-item">
            <div class="poster">
                <img src="${matchingMovie.image}" alt="Interstellar Poster">
            </div>
            <div class="details">
                <p class="rated-on">Rated on ${dateString}</p>
                <h2 class="movie-title">${matchingMovie.name}</h2>
                <p class="year-runtime">(${matchingMovie.releaseDate}) • ${matchingMovie.length}</p>
                <div class="rating-section">
                    <span>Rating: 0 <i class="fa-solid fa-star"></i></span>
                    <span class="rate-button">Rate</span>
                    <span class="delete-button">Delete</span>
                </div>
                <p class="overview-title">Overview</p>
                <p class="overview">
                   ${matchingMovie.overview}
                </p>
                <div class="movie-crew">
                  <div class="credit">
                    <span class="label">Director:</span>  ${matchingMovie.director}
                  </div>
                  <div class="credit">
                    <span class="label">Writer:</span>  ${matchingMovie.writer}
                  </div>
                  <div class="credit">
                    <span class="label">Actor:</span> Matthew  ${matchingMovie.actor}
                  </div>
                </div>
            </div>
        </div>
      
      `;

  }


});

document.querySelector('.js-ratings-content')
  .innerHTML = ratingsHTML;



