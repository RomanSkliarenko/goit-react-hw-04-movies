import axios from "axios";
const key = "f87fb9311e8c4be1eab05e1500732ab3";

const fetchTrandingFilms = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
    .then(({ data }) => data.results);
};

const fetchFilmsByName = (name) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${name}&page=1&include_adult=false`
    )
    .then(({ data }) => data.results);
};

const fetchFilmById = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    )
    .then((response) => response.data);
};

const fetchFilmCast = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
    )
    .then((response) => response.data.cast);
};

const fetchFilmReview = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
    )
    .then((response) => response.data.results);
};
const fetchService = {
  fetchTrandingFilms,
  fetchFilmsByName,
  fetchFilmById,
  fetchFilmCast,
  fetchFilmReview,
};
export default fetchService;
