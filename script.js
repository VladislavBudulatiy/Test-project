
const number0fFilms = +prompt (`Сколько фильмов вы уже посмотрели`, ``);

const personalMovieDB = {
    count:number0fFilms,
    movise:{},
    actors: {},
    generes: [],
    privat: false
};

const a = prompt(`Один из последних просмотреных фильмов?`, ``),
      b = prompt(`На сколько оцените его?`, ``),
      c = prompt(`Один из последних просмотреных фильмов?`, ``)
      d = prompt(`На сколько оцените его?`, ``);

personalMovieDB.movise[a] = b;
personalMovieDB.movise[c] = b;

console.log(personalMovieDB);