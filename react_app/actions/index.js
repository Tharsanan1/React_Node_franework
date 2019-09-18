import { GET_BOOKS, SIGN_UP_SUCCEED, SIGN_IN_ALERT } from "../constants/action_types";
const axios = require('axios');

export function getBooks(payload) {
    return { type: GET_BOOKS, payload };
}

export function getData() {
    return function(dispatch) {
        axios.get('/book').then(function (res) {
            dispatch(getBooks(res.data));
        })
    };
}

export function setSignUp(payload){
    return { type: SIGN_UP_SUCCEED, payload };
}

export function submitSignUp(data){
    return function(dispatch) {
        axios.post('/customer/sign_up', data)
            .then(function (response) {
                if(response.data === true){
                    dispatch(setSignUp(true));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

export function setSignIn(data){
    return { type: SIGN_IN_ALERT, payload: data };
}

export function submitSignIn(data){
    return function(dispatch) {
        axios.post('/customer/sign_in', data)
            .then(function (response) {
                if(response.data === false){
                    dispatch(setSignIn(true));
                }
                else{

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}