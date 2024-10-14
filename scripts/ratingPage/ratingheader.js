import { listOfMovies } from "../../data/rating.js";

export function renderRatingHeader(){
  let header = '';


  header += `
     <h1>Your Ratings</h1>
      <p>This page compiles a list of titles you have rated, providing a convenient overview of all your ratings.</p>
  `

  document.querySelector('.js-ratings-header')
  .innerHTML = header;

}

renderRatingHeader();