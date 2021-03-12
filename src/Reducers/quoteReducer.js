import {NEW_QUOTE} from './../Actions/type';

/*
    quote API 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
*/
const initialState = {
    text: '', 
    author: ''
}

const quoteReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_QUOTE:
            return {
                text: action.text,
                author: action.author
            };
        default:
            return state;
    };
}

export default quoteReducer;