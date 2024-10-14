import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export let rating;

loadFromStorage();

function loadFromStorage() {
  rating = JSON.parse(localStorage.getItem('rated')) || [];

}



export function addToRate(movieId) {
   if (!rating.some(rated => rated.movieId === movieId)) {
    const today = dayjs();
    rating.push({
      movieId,
      rating: 0,
      ratedOn: today.format('MMM DD, YYYY')
    });
    saveToStorage();
  }
}


export function saveToStorage() {
  localStorage.setItem('rated', JSON.stringify(rating))
}


export function updateRating(movieId, newRating) {
  let matchingMovie;

  rating.forEach((ratinglist) => {
    if (movieId === ratinglist.movieId) {
      matchingMovie = ratinglist;
    }
  });

  if (matchingMovie) {
    matchingMovie.rating = newRating;
    matchingMovie.ratedOn = dayjs().format('MMM DD, YYYY');
    saveToStorage();
  }
};


export function removeFromRating(movieId) {
  const newRating = [];

  rating.forEach((ratinglist) => {
    if (ratinglist.movieId !== movieId) {
      newRating.push(ratinglist)
    }
  });

  rating = newRating;

  saveToStorage();
}


export function listOfMovies(){
  return rating.length;
}


