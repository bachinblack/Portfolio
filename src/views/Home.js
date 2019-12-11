import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import Contact from './Contact';


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
                <img src="./backgrounds/home.jpg" className="background" alt="logo" />
                <div className="intro-body">
                {/* ABT Contacts in or out of .intro? */}
                <Contact />
                    <div className="intro">
                        <h2>Hi everyone!</h2>
                        <h2>My name is Philippe Bouttereux</h2>
                        <h2>And this is my portfolio!</h2>
                        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/12_5J-5AcHJqjtWy2IxvFkQDpyKbUGBlK/view?usp=sharing">
                            <h2>You can download my resume here</h2>
                        </a>
                        <h2>Or you can click the button below to start the tour</h2>
                    </div>
                    <a className="navigator" href="#about"><FontAwesomeIcon icon={faArrowDown} size="4x" /></a>
                </div>
            </>
        );
    }

}

export default Home;