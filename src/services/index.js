// import * as _api from './api'
const API_ROOT = 'https://meme-api.herokuapp.com/'
const callApi = (endpoint) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(res => res.json().then(json=>({json, res})))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json;
      console.log("--------------- data", json)
    });
}

// api services
export const fetchPosts = count => callApi(`memes/${count}`)
