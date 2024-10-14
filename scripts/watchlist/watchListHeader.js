import { listOfMovies } from "../../data/watchL.js";




export function renderHeader(){

  let header ='';


  header += `
        <div class="watchlater-header">
        <h1>Your Watch Later List</h1>
        <p>This page compiles a list of movies you have saved to watch later.</p>
        <div class="sort-dropdown">
        <div class="lists js-lists">${listOfMovies()} items</div>
          <label for="sort-options">Sort by:</label>
          <select id="sort-options">
            <option value="Listorder">List order</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="ratings">Ratings</option>
          </select>
        </div>
      </div>
      
  `

  document.querySelector('.js-watchlater-header')
  .innerHTML = header;

}

renderHeader();




