import React from 'react';

import Contact from './Contact';


export default function Footer() {
    return (
        <footer className="row f-row">
            <div className="col-lg-6">
                <div>
                    <h2>Thank you for reaching the footer !</h2>
                    <p>
                        I designed this website myself (no template) though I used some npm packages.<br/>
                        I also took the pictures myself (thus the poor quality..)<br/>
                        It was made with ReactJs. The sources are available <a href="https://github.com/bachinblack/Portfolio">here</a>.<br/>
                        It is then built with webpack and sent <a href="https://github.com/bachinblack/bachinblack.github.io">here</a>.
                    </p>
                </div>
            </div>
            <div className="col-lg-6">
                <Contact />
            </div>
        </footer>
    );
}