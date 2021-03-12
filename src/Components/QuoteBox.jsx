import React from 'react';
import { connect } from 'react-redux';
import { nextQuoteAction, pushQuoteAction } from '../Actions/quoteAction';
import { newColorAction } from '../Actions/themeAction';
import Text from './Text';
import Buttons from './Buttons';
import styles from './../styles/quoteBox.module.css';

class QuoteBox extends React.Component{

    constructor(props){
        super(props);
        this.fetchQuote(10, this.nextQuote);
    }
    
    fetchQuote = (n, callback = () => {}) => {
        fetch(`https://goquotes-api.herokuapp.com/api/v1/random?count=${n}`)
        .then(res => res.json())
        .then(data => this.props.pushQuote(data.quotes))
        .then(() => callback());
    }    
    
    nextQuote = () => {

        this.props.nextQuote();
        this.props.newColor();        

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

const mapStateToProps = () => {
    return { };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        pushQuote: (quotes) => dispatch(pushQuoteAction(quotes)),
        nextQuote: () => dispatch(nextQuoteAction()),
        newColor: () => dispatch(newColorAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);