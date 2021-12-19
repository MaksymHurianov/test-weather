export const HOURLY_DETAILS = "HOURLY-DETAILS"

const initState = {
    hourly: [{temp:null, dt:null}]
}


const hourlyDetailsReducer = (state = initState, action) => {

    switch (action.type) {
        case HOURLY_DETAILS:
            return {
                ...state,
                hourly: action.hourlyWeatherDetails.hourly
            }
        default:
            return state
    }
}

export default hourlyDetailsReducer
