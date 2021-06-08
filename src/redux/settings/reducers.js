const initialState = {
    stops: {
        oneStop: true,
        noStop: true
    },
    aircompanies: {
        "LO": true,
        "BT": true,
        "AF": true,
        "KL": true,
        "SN": true,
        "TK": true,
        "SU": true,
        "AZ": true,
        "AY": true,
        "PC": true
    },
    price: {
        from: "0",
        to: "100000"
    }
}

const settings = (state = initialState, action) => {
    switch ( action.type ) {
        case "settings/SET_STOP__SETTINGS":
            return {...state, 
                stops: {...state.stops, ...action.payload}
                }
        case "settings/SET_COMPANY__SETTINGS":
            return {...state, 
                aircompanies: {...state.aircompanies, ...action.payload}
                }
        case "settings/SET_PRICE__SETTINGS":
            return {...state, 
                price: {...state.price, ...action.payload}
                }
        default:
            return state
    }
}

export default settings