import * as actionTypes from './../../../actions/actionTypes'

const initialState = {
    isRegister: false,

}

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
    case actionTypes.REGISTERUSER: 
        return {
            ...state,
            isRegister: true
        }

    default: 
        return initialState;
    }
}

export default homeReducer