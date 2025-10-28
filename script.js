const movies = {
  "Action": ["John Wick", "Avengers: Endgame", "Mad Max: Fury Road", "The Dark Knight", "Inception"],
  "Romance": ["The Notebook", "La La Land", "Titanic", "Pride and Prejudice", "Me Before You"],
  "Comedy": ["The Hangover", "Superbad", "Step Brothers", "Jumanji", "Yes Man"],
  "Horror": ["The Conjuring", "It", "Annabelle", "A Quiet Place", "Insidious"],
  "Sci-Fi": ["Interstellar", "Inception", "The Matrix", "Avatar", "Blade Runner 2049"]
};

function recommendMovies() {
  const genre = document.getElementById("genre").value;
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  const selectedMovies = movies[genre];

  selectedMovies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie-card");
    div.innerHTML = `<h3>${movie}</h3>`;
    movieList.appendChild(div);
  });
}