
export let watchlater = JSON.parse(localStorage.getItem('watchlater')) || [];




function saveToStorage(){
  localStorage.setItem('watchlater', JSON.stringify(watchlater))
}
export function addToWatchLater(movieId){
  if (!watchlater.some(watchlater => watchlater.movieId === movieId)) {
    watchlater.push({
      movieId,
    })
  }

  saveToStorage();

}


export  function removeFromWatchLater(movieId){

  let newWatchLater = [];

  watchlater.forEach((watchlaterList) =>{
    if(watchlaterList.movieId !== movieId)
      newWatchLater.push(watchlaterList)
  });

  watchlater = newWatchLater;

  saveToStorage();
}


export function listOfMovies(){
  return watchlater.length;
}






