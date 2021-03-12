import React from 'react';
import { connect } from 'react-redux';
import { newQuoteAction } from '../Actions/quoteAction';
import { newColorAction } from '../Actions/themeAction';
import Text from './Text';
import Buttons from './Buttons';
import styles from './../styles/quoteBox.module.css';

class QuoteBox extends React.Component{

    constructor(props){
        super(props);
        this.quotePrefetch = [];
        this.fetchQuote(10, this.nextQuote);
    }

    fetchQuote = (n, callback = () => {}) => {
        fetch(`https://goquotes-api.herokuapp.com/api/v1/random?count=${n}`)
        .then(res => res.json())
        .then(data => {
            this.quotePrefetch = [...this.quotePrefetch, ...data.quotes];
        })
        .then(() => callback());
    }    
    
    nextQuote = () => {
        const quote = this.quotePrefetch.shift();

        if(quote !== undefined){
            this.props.newQuote(quote.text, quote.author);
            this.props.newColor();
        }
        

        if(this.quotePrefetch.length <= 5){
            this.fetchQuote(10);
        }
    }

    render(){

        return (
            <div 
                id='quote-box' 
                className={styles.quoteBox}
            >
                <Text />
                <Buttons onClick={this.nextQuote} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        newQuote: async (text, author) => dispatch(newQuoteAction(text, author)),
        newColor: () => dispatch(newColorAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);