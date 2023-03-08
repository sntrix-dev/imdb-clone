import axios from "axios";

const endPoints = {
  requestToken: "/authentication/token/new",
  login: "/authentication/token/validate_with_login",
  getMovies: "/trending/movie/day",
  searchMovie: "/search/movie",
  getMovieDetails: "/movie",
  getMovieDetails: "/movie",
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const requestToken = async () => {
  try {
    const response = await instance.get(endPoints.requestToken);
    return response;
  } catch (err) {
    throw err;
  }
};

export const login = async (credentialsWithToken) => {
  try {
    const response = await instance.post(endPoints.login, {
      ...credentialsWithToken,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const getMovies = async (page = 1) => {
  try {
    const response = await instance.get(endPoints.getMovies, {
      params: {
        page,
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const searchMovie = async (query, page = 1) => {
  try {
    const response = await instance.get(endPoints.searchMovie, {
      params: {
        query,
        page,
        language: "en-US",
        include_adult: false,
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await instance.get(endPoints.getMovieDetails + "/" + id);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getVideoDetails = async (id) => {
  try {
    const response = await instance.get(
      endPoints.getMovieDetails + "/" + id + "/videos"
    );
    return response;
  } catch (err) {
    throw err;
  }
};
