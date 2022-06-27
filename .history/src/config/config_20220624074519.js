export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = `172c72b78f475e54c01895081cfafdea`;
const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;

export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetail: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieCredit : () => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
};

`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`