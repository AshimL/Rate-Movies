import { movielist } from "../data/movies.js"


let homepageHTML = '';

movielist.forEach((movie) =>{
  
  homepageHTML += `
  <div class="movie-card">
        <img src="${movie.image}" class="movie-poster">
        <h3 class="movie-name">${movie.name}</h3>
       <button class="details-button" data-product-id="${movie.id}">See Details</button>
      </div>
  
  `
})


let moviesContent = document.querySelector('.js-movies-content');
moviesContent.innerHTML = homepageHTML;



const detailButtons = document.querySelectorAll('.details-button');
detailButtons.forEach(button => {
  button.addEventListener('click', () => {
    const movieId = button.dataset.productId;

    localStorage.setItem('selectedMovieId', movieId)
    window.location.assign('details.html');
  });
});



