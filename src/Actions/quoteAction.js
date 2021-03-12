import { NEXT_QUOTE, PUSH_QUOTE } from "./type"

const nextQuoteAction = () => {
    return {
        type: NEXT_QUOTE
    };
};

const pushQuoteAction = (quotes) => {
    return {
        type: PUSH_QUOTE,
        quotes: quotes
    }
}

export { nextQuoteAction, pushQuoteAction };