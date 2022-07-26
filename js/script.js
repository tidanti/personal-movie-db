'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    writeUserNumberOfWatchedFilms: function() {
        let numberOfFilms = 0;
        do {
            numberOfFilms = +prompt('Number of watched films?', '0');
        } while (!numberOfFilms || isNaN(numberOfFilms));

        this.count = numberOfFilms;
    },
    rememberUserFilms: function() {
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

            this.movies[lastWatchedFilm] = userScoreOfLastWatchedFilm;
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert('You watched not many films...');
        } else if (this.count >= 10 && this.count <= 30) {
            alert('You are typical film viewer');
        } else if (this.count > 30) {
            alert('WOW! You watched so many films!');
        } else {
            alert('Oops! Something has gone wrong...'); // to be continued...
        }
    },
    showMyDB: function() {
        if (this.privat) {
            return;
        }

        console.log(this);
    },
    toggleVisibleMovieDB: function() {
        this.privat = !this.privat;
    },
    writeUserGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const favouriteGenre = prompt(`Your favourite genre? Number ${i}`, '').trim();
            if (!favouriteGenre) {
                i--;
                continue;
            }

            this.genres[i - 1] = favouriteGenre;
        }

        this.genres.forEach((item, i) => {
            console.log(`Favourite genre #${i + 1} is ${item}`);
        });
    }
};

personalMovieDB.writeUserNumberOfWatchedFilms();
personalMovieDB.rememberUserFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeUserGenres();
//personalMovieDB.toggleVisibleMovieDB();
personalMovieDB.showMyDB();
