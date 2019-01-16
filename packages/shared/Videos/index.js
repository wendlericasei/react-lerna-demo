import axios from 'axios'

const URL_API = 'https://www.googleapis.com/youtube/v3'
const API_KEY = 'AIzaSyCsPZSC9OQCJZcslJBC4wduEyDnQioU6s4'

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