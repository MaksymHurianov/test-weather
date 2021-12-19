import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import cityWeatherReducer from "./cityWeatherReducer";
import cityDetailsReducer from "./cityWeatherDetailsReducer";
import hourlyDetailsReducer from "./hourlyDetailsReducer";
import {appReducer} from "./appReducer";


const rootReducer = combineReducers({
    cityWeatherList: cityWeatherReducer,
    cityDetails: cityDetailsReducer,
    hourlyDetails: hourlyDetailsReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
