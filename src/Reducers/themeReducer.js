import { NEW_COLOR } from './../Actions/type';

const colors = [
    '#73a857',
    '#16a085',
    '#342224',
    '#472e32',
    '#2c3e50'
];

let n = 0;

const initialState = {
    color: '#000000'
};

const themeReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_COLOR:
            return {
                ...state,
                color: colors[n++ % colors.length]
            };
        default:
            return state;
    }
}

export default themeReducer;