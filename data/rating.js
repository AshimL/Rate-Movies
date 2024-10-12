
export let rating;

loadFromStorage();

function loadFromStorage(){
  rating = JSON.parse(localStorage.getItem('rated')) || [];

}




export function addToRate(movieId) {

  rating.push({
    movieId: movieId,
    rating: 0
  })

  saveToStorage();
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
    saveToStorage(); 
  }
};


export function removeFromRating(movieId){
 const newRating = [];

  rating.forEach((ratinglist) =>{
    if(ratinglist.movieId !== movieId){
      newRating.push(ratinglist)
    }
  });

  rating = newRating;
  
  saveToStorage();
}

