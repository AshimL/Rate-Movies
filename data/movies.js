


class movie {
  id;
  name;
  image;

  constructor(movieDetails){
    this.id = movieDetails.id;
    this.name = movieDetails.name;
    this.image = movieDetails.image;
  }

}










export const movielist = [
  {
    id:"3b8e7c1d-2a5b-4d89-87fa-b9c843e71a49",
    name: "A Quiet Place",
    image: "images/movies/Aquietplace.jpg",
  },

  {
    id:"c19a8e0f-58de-472a-9a61-e1f78e2c456a",
    name: "Dune",
    image: "images/movies/Dune.jpg",
  },
  {
    id:"f703a4bd-3f62-4e3c-9302-8f1c13ab8d7f",
    name: "Interstellar",
    image: "images/movies/Interstellar.jpg",
  },
  {
    id:"95a4b8e2-17a6-4b2f-9345-c7b62ea71f5e",
    name: "John Wick",
    image: "images/movies/Johnwick.jpg",
  },
  {
    id:"68f49e7b-9d3f-4b83-ae29-4e61a3c2675f",
    name: "Oppenheimer",
    image: "images/movies/Oppenheimer.jpg",
  },
  {
    id:"b73e3d15-842f-48f4-b2bc-3a9d6e457e0d",
    name: "The Dark Knight",
    image: "images/movies/Thedarkknight.jpg",
  },
  {
    id:"d4e8a12c-5f71-44eb-92ad-14891f4c5ba2",
    name: "The Godfather",
    image: "images/movies/Thegodfather.jpg",
  },
  {
    id:"2f9c73a1-b2e3-4a9a-91b4-d7e37d2b4a90",
    name: "ToyStory",
    image: "images/movies/ToyStory.jpg",
  },
  {
    id:"47ae6d9f-8c15-4b69-8b6b-e6a2b931c19f",
    name: "Se7en",
    image:"images/movies/Seven.jpg",
  },
  {
    id:"e3d2a648-75b3-41fa-b43e-f3a5c6b8b2e9",
    name: "Parasite",
    image: "images/movies/Parasite.jpg",
  }
].map((movieDetails) => {
  return new movie(movieDetails)
})

console.log(movie.id);

