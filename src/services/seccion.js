import axios from "axios";


const baseUrl = 'https://swapi.dev/api/';

axios.defaults.baseURL = baseUrl;

export const getPeople = () => {
  return axios({
    method: "get",
    url: "/people"
  });
};

export const getStarships = () => {
  return axios({
    method: "get",
    url: "/starships"
  });
};

export const getPlanets = () => {
  return axios({
    method: "get",
    url: "/planets"
  });
};

