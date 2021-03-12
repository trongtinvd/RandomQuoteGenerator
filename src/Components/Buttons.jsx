import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import TweenLite from 'gsap';
import styles from './../styles/buttons.module.css';

class Buttons extends React.Component{

    constructor(props){
        super(props);
        this.twitter = null;
        this.tumblr = null;
        this.next = null;
    }

    componentDidUpdate(prevProps){
        TweenLite.fromTo(
            [this.twitter, this.tumblr, this.next],
            2,
            {backgroundColor: prevProps.color},
            {backgroundColor: this.props.color}
        );
    }

    render(){
        return (
            <div className={styles.buttonWrapper}>
                <div>
                    <a 
                        id='tweet-quote' 
                        href='twitter.com/intent/tweet'
                        target='_blank'
                    >
                        <button className={styles.shareButton} ref={thisButton => this.twitter = thisButton}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </button>
                    </a>
                    <a 
                        id='tumblr-quote' 
                        href='/'
                    >
                        <button className={styles.shareButton} ref={thisButton => this.tumblr = thisButton}>
                            <FontAwesomeIcon icon={faTumblr} />
                        </button>
                    </a>
                </div>
                <button 
                    id='new-quote' 
                    onClick={this.props.onClick} 
                    className={styles.nextButton}
                    ref={thisButton => this.next = thisButton}
                >New quote</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.theme.color
    };
}

export default connect(mapStateToProps)(Buttons);