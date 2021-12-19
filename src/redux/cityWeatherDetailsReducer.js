import {weatherAPI} from "../api/weather-api";
import {setErrorAC, setStatusAC} from "./appReducer";
import {HOURLY_DETAILS} from "./hourlyDetailsReducer";

const CITY_DETAILS = "CITY-DETAILS"

const initialState = {
    name:'',
    main: {},
    wind: {},
    sys: {},
    weather: [{icon:null,description:null}],
    isLoaded: false
}

const cityDetailsReducer = (state = {main:{}}, action) => {

    switch (action.type) {
        case CITY_DETAILS:
            return {
                ...state,
                name: action.cityWeatherDetails.name,
                main: {...action.cityWeatherDetails.main},
                wind: action.cityWeatherDetails.wind,
                sys: action.cityWeatherDetails.sys,
                weather: action.cityWeatherDetails.weather,
                isLoaded: true
            }
        default:
            return state
    }
}


export const getCityDetailsTC = (cityId) => {
    return async (dispatch) => {
        dispatch(setStatusAC('loading'))
        try {
            const city = await weatherAPI.getDetailsCityWeather(cityId)
            dispatch({type: CITY_DETAILS, cityWeatherDetails: city.data})
            const hourly = await weatherAPI.getHourlyDetailsCityWeather(city)
            dispatch({type: HOURLY_DETAILS, hourlyWeatherDetails: hourly.data})
        } catch (error){
            dispatch(setErrorAC('something went wrong'))
        }finally {
            dispatch(setStatusAC('succeeded'))
        }

    }
}

export default cityDetailsReducer
