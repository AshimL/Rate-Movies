
export let rating = JSON.parse(localStorage.getItem('rated')) || [];




export function addToRate(movieId){
  rating.push({
    movieId: movieId,
    rating: 0
  })

  saveToStorage();
}


function saveToStorage(){
  localStorage.setItem('rated', JSON.stringify(rating))
}


//compare

/*

export let rating = JSON.parse(localStorage.getItem('rated')) || [];

export function addToRate(movieId) {
    const existingRatingIndex = rating.findIndex(r => r.movieId === movieId);
    
    if (existingRatingIndex > -1) {
        // Update existing rating
        rating[existingRatingIndex].rating = 0; // Set the default rating (you can change this as needed)
    } else {
        // Add new rating
        rating.push({
            movieId: movieId,
            rating: 0 // Set the default rating (you can change this as needed)
        });
    }

    saveToStorage(); // Make sure to save the updated ratings to localStorage
}

function saveToStorage() {
    localStorage.setItem('rated', JSON.stringify(rating));
}

*/