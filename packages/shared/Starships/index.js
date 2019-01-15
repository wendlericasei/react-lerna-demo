import axios from 'axios'

const URL_API = 'https://swapi.co/api'

export const getStarships = () => {
  return axios.get (`${URL_API}/starships`).then(res => {  
    return res.data.results
  })
}