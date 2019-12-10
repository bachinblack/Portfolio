import React from 'react';

import Contact from './Contact';


export default function Footer() {
    return (
        <footer className="row f-row">
            <div className="col-lg-6">
                <div>
                    <h2>Thank you for reaching the footer !</h2>
                    <p>
                        I put a lot of work into this portfolio and I hope you enjoy the result.<br/>
                        It was made with ReactJs. The sources are available <strong><a href="https://github.com/bachinblack/Portfolio">there</a></strong>.<br/>
                        It is then built and sent <strong><a href="https://github.com/bachinblack/bachinblack.github.io">there</a></strong>.
                    </p>
                </div>
            </div>
            <div className="col-lg-6">
                <Contact />
            </div>
        </footer>
    );
}