// 1
const numberOfFilms = +prompt('Number of watched films?', '0');

// 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3
for (let i = 0; i < 2; i++) {
    const lastWatchedFilm = prompt('Last watched film?', '');
    const userScoreOfLastWatchedFilm = prompt('Your score?', '8.1');

    personalMovieDB.movies[lastWatchedFilm] = userScoreOfLastWatchedFilm;
}
