import { movielist } from "../data/movies.js"


let homepageHTML = '';

movielist.forEach((movie) =>{
  
  homepageHTML += `
  <div class="movie-card">
        <img src="${movie.image}" class="movie-poster">
        <h3 class="movie-name">${movie.name}</h3>
        <a href="details.html" class="details-button">See Details</a>
      </div>
  
  `
})


let moviesContent = document.querySelector('.js-movies-content');
moviesContent.innerHTML = homepageHTML;

