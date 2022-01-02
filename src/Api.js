import axios from 'axios'
let url;

export const getShortenedURL = (inputValue) => {
    // url = inputValue ? `https://api.shrtco.de/v2/shorten?url=${inputValue}` : ``;
    url = inputValue ? `https://obashort.herokuapp.com/short` : ``;
    // return axios.get(url).then(response => response)
    return axios.post(url, { url: inputValue }).then(response => response)
}