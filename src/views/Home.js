import './Home.css'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons'


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <img src="./bg.jpg" className="background" alt="logo" />
                <div className="intro-body">
                    <div className="intro">
                        <h2>Hi everyone!</h2>
                        <h2>My name is Philippe Bouttereux</h2>
                        <h2>and this is my portfolio</h2>
                    </div>
                    <a className="navigator" href="#projects"><FontAwesomeIcon icon={faArrowDown} size="4x" /></a>
                </div>
            </>
        );
    }

}

export default Home;