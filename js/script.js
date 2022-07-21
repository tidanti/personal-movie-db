'use strict';

let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt('Number of watched films?', '0');
    } while (!numberOfFilms || isNaN(numberOfFilms));
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastWatchedFilm = prompt('Last watched film?', '').trim();
        const userScoreOfLastWatchedFilm = prompt('Your score?', '8.1').trim();

        if (!lastWatchedFilm) {
            alert('You have to enter film!');
            i--;
            continue;
        } else if (lastWatchedFilm.length > 50) {
            alert('Entered information must be have the length less than 50 symbols!');
            i--;
            continue;
        }

        if (!userScoreOfLastWatchedFilm) {
            alert('You have to enter the score for film!');
            i--;
            continue;
        }

        personalMovieDB.movies[lastWatchedFilm] = userScoreOfLastWatchedFilm;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('You watched not many films...');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('You are typical film viewer');
    } else if (personalMovieDB.count > 30) {
        alert('WOW! You watched so many films!');
    } else {
        alert('Oops! Something has gone wrong...'); // to be continued...
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat) {
        return;
    }

    console.log(personalMovieDB);
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const favouriteGenre = prompt(`Your favourite genre? Number ${i}`, '');
        if (!favouriteGenre) {
            i--;
            continue;
        }

        personalMovieDB.genres[i - 1] = favouriteGenre;
    }
}

writeYourGenres();
showMyDB();
