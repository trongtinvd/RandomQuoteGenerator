import React from 'react';
import { connect } from 'react-redux';
import QuoteBox from './Components/QuoteBox';
import styles from './styles/app.module.css';
import TweenLite from 'gsap';


class App extends React.Component{

    constructor(props){
        super(props);
        this.app = null;
    }

    componentDidUpdate(prevProps){
        TweenLite.fromTo(
            this.app,
            2,
            {backgroundColor: prevProps.color},
            {backgroundColor: this.props.color}
        );
    }

    render(){
        return (
            <div 
                className={styles.app}
                ref={app => this.app = app}
            >
                <QuoteBox />
                <footer>
                    <a href={'/'} className={styles.link}>by NguyenTrongTin</a>
                </footer>
            </div>        
        );
    };
}

const mapStateToProps = (state) => {
    return {
        color: state.theme.color
    };
};

export default connect(mapStateToProps)(App);