export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = `172c72b78f475e54c01895081cfafdea`;
const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;

export const tmdbAPI = {
  getMovieList: (type, page = 1) => `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetail: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
    getMovieSearch : ()
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
};
