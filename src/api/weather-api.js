import axios from 'axios'

const API_KEY = "122a2fa1f27a8aa65f79180c2a64b5f2"
const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})

export const weatherAPI = {
    getCityWeather(title){
        return instance.get(`/weather?q=${title}&units=metric&APPID=${API_KEY}`)
    },
    updateCityWeather(city){
        return instance.get(`/weather?q=${city.name}&units=metric&APPID=${API_KEY}`)
    },
    getDetailsCityWeather(cityId){
        return instance.get(`/weather?id=${cityId}&appid=${API_KEY}`)
    },
    getHourlyDetailsCityWeather(city){
        return instance.get(`/onecall?lat=${city.data.coord.lat}&lon=${city.data.coord.lon}&exclude=minutely,daily&APPID=${API_KEY}`)
    },
}
