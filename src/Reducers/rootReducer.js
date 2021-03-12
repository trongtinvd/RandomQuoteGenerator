import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
    quote: quoteReducer,
    theme: themeReducer
});

export default rootReducer;