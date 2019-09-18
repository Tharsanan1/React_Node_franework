import {GET_BOOKS, SIGN_UP_SUCCEED, SIGN_IN_ALERT} from "../constants/action_types";

const initialState = {
    books: [],
    signUpStatus: false,
    signInStatus: false
};
function rootReducer(state = initialState, action) {
    if (action.type === GET_BOOKS) {
        return Object.assign({}, state, {
            books: action.payload
        });
    }
    if(action.type === SIGN_UP_SUCCEED){
        return Object.assign({}, state,{
            signUpStatus: action.payload
        })
    }
    if(action.type === SIGN_IN_ALERT){
        return Object.assign({}, state,{
            signInStatus: action.payload
        })
    }
    return state;
}

export default rootReducer;