import axios from 'axios'

const URL_API = 'https://www.googleapis.com/youtube/v3'
const API_KEY = 'AIzaSyCgOxBBXkqvac1aocaWSQJnBaslmxSYg8A'

export const getVideos = () => {
  return axios.get (`${URL_API}/search`, {
    params: {
      part: 'snippet',
      type: 'video',
      key: API_KEY,
      maxResults: 15
    }
  }).then(res => {  
    return res.data.items
  })
}

export const sharedText = 'TEXT FROM SHARED'