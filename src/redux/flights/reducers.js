const initialState = {
    allFlights: null,
}

const flights = (state = initialState, action) => {
    switch ( action.type ) {
        case "flights/SET_FLIGHTS":
            return {...state, allFlights: action.payload}
        default:
            return state
    }
}

export default flights