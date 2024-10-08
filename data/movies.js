

export function getMatchingMovie(clickedMovieId){

  let matchingMovie;
  
  movielist.forEach((movie) =>{
  if(movie.id === clickedMovieId){
    matchingMovie = movie;
  }
  })

  return matchingMovie;

}
  


class movie {
  id;
  name;
  image;
  releaseDate;
  genres;
  length;
  overview;
  director;
  writer;
  actor;
  trailerLink;

  constructor(movieDetails){
    this.id = movieDetails.id;
    this.name = movieDetails.name;
    this.image = movieDetails.image;
    this.releaseDate = movieDetails.releaseDate;
    this.genres = movieDetails.genres;
    this.length = movieDetails.length;
    this.overview = movieDetails.overview;
    this.director = movieDetails.director;
    this.writer = movieDetails.writer;
    this.actor = movieDetails.actor;
    this.trailerLink = movieDetails.trailerLink;
  }

}










export const movielist = [
  {
    id:"3b8e7c1d-2a5b-4d89-87fa-b9c843e71a49",
    name: "A Quiet Place",
    image: "images/movies/Aquietplace.jpg",
    releaseDate: "2018",
    genres: "Horror, Drama, Science Fiction",
    length: "1h 31m",
    overview: "A family is forced to live in silence while hiding from creatures that hunt by sound.",
    director: "John Krasinski",
    writer: " Scott Beck",
    actor: "Emily Blunt",
    trailerLink: "https://www.youtube.com/watch?v=WR7cc5t7tv8",
  },

  {
    id:"c19a8e0f-58de-472a-9a61-e1f78e2c456a",
    name: "Dune",
    image: "images/movies/Dune.jpg",
    releaseDate: "2021",
    genres: "Science Fiction, Adventure",
    length: "2h 35m",
    overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    director: "Denis Villeneuve",
    writer: "Frank Herbert",
    actor: "Timothée Chalamet",
    trailerLink: "https://www.youtube.com/watch?v=n9xhJrPXop4",
  },
  {
    id:"f703a4bd-3f62-4e3c-9302-8f1c13ab8d7f",
    name: "Interstellar",
    image: "images/movies/Interstellar.jpg",
    releaseDate: "2014",
    genres: "Adventure, Drama, Science Fiction",
    length: "2h 49m",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    director: "Christopher Nolan",
    writer: "Jonathan Nolan",
    actor: "Matthew McConaughey",
    trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    id:"95a4b8e2-17a6-4b2f-9345-c7b62ea71f5e",
    name: "John Wick:4",
    image: "images/movies/Johnwick.jpg",
    releaseDate: "2023",
    genres: "Action, Thriller, Crime",
    length: "2h 50m",
    overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    director: "Chad Stahelski",
    writer: "Shay Hatten",
    actor: "Keanu Reeves",
    trailerLink: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
  },
  {
    id:"68f49e7b-9d3f-4b83-ae29-4e61a3c2675f",
    name: "Oppenheimer",
    image: "images/movies/Oppenheimer.jpg",
    releaseDate: "2023",
    genres: "Drama, History",
    length: "3h 1m",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    director: "Christopher Nolan",
    writer: "Christopher Nolan",
    actor: "Cillian Murphy",
    trailerLink: "https://www.youtube.com/watch?v=uYPbbksJxIgs",
  },
  {
    id:"b73e3d15-842f-48f4-b2bc-3a9d6e457e0d",
    name: "The Dark Knight",
    image: "images/movies/Thedarkknight.jpg",
    releaseDate: "2008",
    genres: "Drama, Action, Crime, Thriller",
    length: "2h 32m",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    director: "Christopher Nolan",
    writer: "David S. Goyer",
    actor: "Christian Bale",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    id:"d4e8a12c-5f71-44eb-92ad-14891f4c5ba2",
    name: "The Godfather",
    image: "images/movies/Thegodfather.jpg",
    releaseDate: "1972",
    genres: "Drama, Crime",
    length: "2h 55m",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    director: "Francis Ford Coppola",
    writer: "Francis Ford Coppola",
    actor: "Marlon Brando",
    trailerLink: "https://www.youtube.com/watch?v=UaVTIH8mujA",
  },
  {
    id:"2f9c73a1-b2e3-4a9a-91b4-d7e37d2b4a90",
    name: "ToyStory",
    image: "images/movies/ToyStory.jpg",
    releaseDate: "1995",
    genres: "Animation, Adventure, Family, Comedy",
    length: "1h 21m",
    overview: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    director: "John Lasseter",
    writer: "Pete Docter",
    actor: "Tom Hanks",
    trailerLink: "https://www.youtube.com/watch?v=v-PjgYDrg70",
  },
  {
    id:"47ae6d9f-8c15-4b69-8b6b-e6a2b931c19f",
    name: "Se7en",
    image:"images/movies/Seven.jpg",
    releaseDate: "1995",
    genres: "Crime, Mystery, Thriller",
    length: "2h 7m",
    overview: "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the seven deadly sins in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
    director: "David Fincher",
    writer: "Andrew Kevin Walker",
    actor: "Morgan Freeman",
    trailerLink: "https://www.youtube.com/watch?v=znmZoVkCjpI",
  },
  {
    id:"e3d2a648-75b3-41fa-b43e-f3a5c6b8b2e9",
    name: "Parasite",
    image: "images/movies/Parasite.jpg",
    releaseDate: "2019",
    genres: "Comedy, Thriller, Drama",
    length: "2h 13m",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    director: "Bong Joon-ho",
    writer: "Han Jin-won",
    actor: "Song Kang-ho",
    trailerLink: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
  }
].map((movieDetails) => {
  return new movie(movieDetails)
})


