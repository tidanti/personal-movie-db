'use strict';

const numberOfFilms = +prompt('Number of watched films?', '0');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('You watched not many films...');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('You are typical film viewer');
} else if (personalMovieDB.count > 30) {
    alert('WOW! You watched so many films!');
} else {
    alert('Oops! Something has gone wrong...'); // to be continued...
}

for (let i = 0; i < 2; i++) {
    const lastWatchedFilm = prompt('Last watched film?', '');
    const userScoreOfLastWatchedFilm = prompt('Your score?', '8.1');

    if (!lastWatchedFilm) {
        alert('You have to enter film!');
        i--;
    } else if (lastWatchedFilm.length > 50) {
        alert('Entered information must be have the length less than 50 symbols!');
        i--;
    }

    if (!userScoreOfLastWatchedFilm) {
        alert('You have to enter the score for film!');
        i--;
    }

    personalMovieDB.movies[lastWatchedFilm] = userScoreOfLastWatchedFilm;
}
