import axios from 'axios'

function postHeaders() {
  return {
    'content-type': 'application/json',
    // Authorization: `Bearer ${getStoredAuthToken()}`,
  };
}

export const useFetch = (payload, url, method) => {
  const request =  axios({
    headers: postHeaders(),
    timeout: 1000,
    method: method,
    url: url,
    data: payload,
  })
  return [request];
}