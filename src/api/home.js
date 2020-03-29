import axios from 'axios'

export function getHomeTal(){
    return axios.post("/homepage/hometotal")
}

export function  getHomeDetailItem(){
    return axios.post("/homepage/detailItem")
}