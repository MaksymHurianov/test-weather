import {weatherAPI} from "../api/weather-api";
import {setErrorAC, setStatusAC} from "./appReducer";

const ADD_CITY = "ADD-CITY"
export const DELETE_CITY = "DELETE-CITY"
const UPDATE_CITY = "UPDATE-CITY"
export const GET_CITIES_LIST = "GET-CITIES-LIST"

const initialState = {
    city: [],
}

const cityWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                city: [...state.city, {
                    id: action.cityWeather.id,
                    dt: action.cityWeather.dt,
                    name: action.cityWeather.name,
                    main: action.cityWeather.main,
                    weather: action.cityWeather.weather,
                }]
            }
        case DELETE_CITY:
            return {
                ...state,
                city: state.city.filter((i) => i.id !== action.id)
            }
        case UPDATE_CITY:
            return {
                ...state,
                city: state.city.map((i) => {
                    if (i.id === action.id) {
                        return      {
                            id: action.cityWeather.id,
                            dt: action.cityWeather.dt,
                            name: action.cityWeather.name,
                            main: action.cityWeather.main,
                            weather: action.cityWeather.weather,
                        }
                    } else return i
                })
            }
        case GET_CITIES_LIST:
            return {
                ...state,
                city: [...action.data]
            }
        default:
            return state
    }
}


export const cityWeatherReducerTC = (title) => {
    return (dispatch, getState) => {
        const {cityWeatherList} = getState()
        dispatch(setStatusAC('loading'))
        weatherAPI.getCityWeather(title)
            .then(data => {
                let isCity
                if(cityWeatherList.city.length){
                     isCity = cityWeatherList.city.find((city) => city.id === data.data.id);
                }
                !isCity
                    ? dispatch({type: ADD_CITY, cityWeather: data.data})
                    : dispatch(setErrorAC("city is exist in the list"))
            })
            .catch(error =>  dispatch(setErrorAC(error.response.data.message)))
            .finally(() => dispatch(setStatusAC('succeeded')))
    }
}
export const updateWeatherTC = (id) => {
    return (dispatch, getState) => {
        const {cityWeatherList} = getState()
        const city = cityWeatherList.city.find((i) =>{
            return i.id === id
        } )
        weatherAPI.updateCityWeather(city)
            .then(data => {
                    dispatch({type: UPDATE_CITY, cityWeather: data.data, id})
                }
            )
    }
}

export default cityWeatherReducer


