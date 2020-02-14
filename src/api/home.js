import axios from 'axios'

export function getHomeTal(){
    return axios.post("/homepage/hometotal")
}