const SET_STATUS = "SET-STATUS"
const SET_ERROR = "SET-ERROR"

const initialState = {
    status: 'idle',
    error: null
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setErrorAC = (error) => ({type: SET_ERROR, error})
export const setStatusAC = (status) => ({type: SET_STATUS, status})
