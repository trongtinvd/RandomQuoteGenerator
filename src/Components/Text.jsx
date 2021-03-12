import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import TweenLite from 'gsap';
import styles from './../styles/text.module.css';

class Text extends React.Component{

    constructor(props){
        super(props);
        this.text = null;
        this.author = null;
    }

    componentDidUpdate(prevProps){
        TweenLite.fromTo(
            [this.text, this.author],
            1,
            {color: prevProps.color},
            {color: 'white'}
        );
        TweenLite.fromTo(
            [this.text, this.author],
            1,
            {color: 'white'},
            {color: this.props.color}
        );
    }

    render(){
        return (
            <div className={styles.quoteWrapper}>
                <p id='text' 
                    className={styles.text}
                    ref={(text) => this.text = text}
                ><FontAwesomeIcon icon={faQuoteLeft} /> {this.props.quote}</p>
                <p 
                    id='author' 
                    className={styles.author}
                    ref={(author) => this.author = author}
                >{'- ' + this.props.author}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        quote: state.quote.text,
        author: state.quote.author,
        color: state.theme.color
    };
}

export default connect(mapStateToProps)(Text);