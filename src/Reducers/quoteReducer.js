import {NEXT_QUOTE, PUSH_QUOTE} from './../Actions/type';

/*
    quote API 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
*/

const initialState = {
    text: '', 
    author: ''
}

let quotes = [];

const quoteReducer = (state = initialState, action) => {
    switch(action.type){
        case NEXT_QUOTE:
            let quote = quotes.shift();
            if(quote !== undefined){
                return {
                    text: quote.text,
                    author: quote.author
                };
            }
            return state;
        case PUSH_QUOTE:
            if(action.quotes !== undefined){
                quotes = [...quotes, ...action.quotes];
            };
            return state;
        default:
            return state;
    };
}

export default quoteReducer;