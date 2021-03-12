import { NEW_QUOTE } from "./type"

const newQuoteAction = (text, author) => {
    return {
        type: NEW_QUOTE,
        text: text,
        author: author
    };
};

export {newQuoteAction};