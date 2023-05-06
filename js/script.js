'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели' , '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
	alert ('Просмотренно двольно мало фильмов');
} else if (personalMovieDB.count < 30) {
	alert ('Вы классический зритель')
} else if (personalMovieDB.count >= 30) {
	alert ('Вы киноман');
} else {
	alert ('Произошла ошибка')
}

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов', ''),
		  b = prompt('На сколько его оцените?', '');

	if (a != null && b != null && a!= '' && b != '' && a.length < 50 ) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
}

console.log(personalMovieDB);