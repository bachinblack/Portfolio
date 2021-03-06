import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import Palace from '../images/backgrounds/palace.jpg';
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
                <div className="blur"><FontAwesomeIcon icon={faFire} size="2x" /></div>
                <img src={Palace} id="home" className="background blurry" alt="logo" />
                <section id="homepage">
                    <div className="intro-body">
                    {/* ABT Contacts in or out of .intro? */}
                    <Contact />
                        <div className="intro">
                            <h2>Hi everyone!</h2>
                            <h2>My name is Philippe Bouttereux</h2>
                            <h2>And this is my portfolio!</h2>
                            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1EpElPKv1fXRkYlIVt6zDXubiGDLPwpFO?usp=sharing">
                                <h2>You can download my resume here</h2>
                            </a>
                            <h2>Or click below to start the tour</h2>
                        </div>
                        {/* <p id="caption">Gyeongbokgung palace in Seoul</p> */}
                        <a className="navigator" href="#about"><FontAwesomeIcon icon={faArrowDown} size="4x" /></a>
                    </div>
                </section>
            </>
        );
    }

}

export default Home;