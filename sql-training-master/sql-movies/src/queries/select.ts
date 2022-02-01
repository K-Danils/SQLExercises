import { ACTORS, DIRECTORS, GENRES, KEYWORDS, MOVIES, MOVIE_RATINGS, PRODUCTION_COMPANIES } from "../table-names";

export const selectActorByName = (fullName: string): string => {
  return `SELECT * FROM ${ACTORS} WHERE full_name='${fullName}'`;
};

export const selectKeyword = (keyword: string): string => {
  return `SELECT * FROM ${KEYWORDS} WHERE keyword='${keyword}'`;
};

export const selectDirector = (director: string): string => {
  return `SELECT * FROM ${DIRECTORS} WHERE full_name='${director}'`;
};

export const selectGenre = (genre: string): string => {
  return `SELECT * FROM ${GENRES} WHERE genre='${genre}'`;
};

export const selectProductionCompany = (company: string): string => {
  return `SELECT * FROM ${PRODUCTION_COMPANIES} WHERE company_name='${company}'`;
};

export const selectMovieById = (id: number): string => {
  return `SELECT * FROM ${MOVIES} WHERE id= ${id}`;
};

export const selectGenreById = (id: number): string => {
  return `SELECT * FROM ${GENRES} WHERE id= ${id}`;
};

export const selectDirectorById = (id: number): string => {
  return `SELECT * FROM ${DIRECTORS} WHERE id= ${id}`;
};

export const selectActorById = (id: number): string => {
  return `SELECT * FROM ${ACTORS} WHERE id= ${id}`;
};

export const selectKeywordById = (id: number): string => {
  return `SELECT * FROM ${KEYWORDS} WHERE id= ${id}`;
};

export const selectProductionCompanyById = (id: number): string => {
  return `SELECT * FROM ${PRODUCTION_COMPANIES} WHERE id= ${id}`;
};

export const selectMovie = (imdbId: string): string => {
  return `SELECT * FROM ${MOVIES} WHERE imdb_id='${imdbId}'`;
};

export const selectMovieId = (imdbId: string): string => {
  return `SELECT * FROM ${MOVIES} WHERE imdb_id='${imdbId}'`;
};

export const selectRatingsByUserID = (userId: number): string => {
  return `SELECT * FROM ${MOVIE_RATINGS} WHERE user_id=${userId}`;
};

export const selectGenresByMovieId = (movieId: number): string => {
  return `SELECT g.genre FROM movie_genres mg JOIN genres g ON g.id = mg.genre_id WHERE mg.movie_id = ${movieId}`;
};

export const selectActorsByMovieId = (movieId: number): string => {
  return `SELECT a.full_name FROM movie_actors ma JOIN actors a ON a.id = ma.actor_id WHERE ma.movie_id = ${movieId}`;
};

export const selectDirectorsByMovieId = (movieId: number): string => {
  return `SELECT d.full_name FROM movie_directors md JOIN directors d ON d.id = md.director_id WHERE md.movie_id = ${movieId}`;
};

export const selectKeywordsByMovieId = (movieId: number): string => {
  return `SELECT k.keyword FROM movie_keywords mk JOIN keywords k ON k.id = mk.keyword_id WHERE mk.movie_id = ${movieId}`;
};

export const selectProductionCompaniesByMovieId = (movieId: number): string => {
  return `SELECT pc.company_name FROM movie_production_companies mpc JOIN production_companies pc ON pc.id = mpc.company_id WHERE mpc.movie_id = ${movieId}`;
};

/**
 * select count as c, because an object is returned and expected property name is c
 */
export const selectCount = (table: string): string => {
  return `SELECT count(*) as c FROM ${table}`;
};
