import React from 'react';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <section id="about">
                <h2 className="title">Who am I</h2><br />
                {/* <p className="lit">My name is Philippe BOUTTEREUX, I am 22 and I am a web and desktop developer</p><br />
                <p className="lit">I won't talk about hard skills here, everything's in my resume</p><br />
                <p className="lit">I speak French and English and I am currently learning Korean</p><br /> */}
                <div id="passions" className="row">
                    <div className="col-lg-4">
                        <div className="inner-box">
                            <h3>Computing</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="inner-box">
                            <h3>Project management</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="inner-box">
                            <h3>Music</h3>
                        </div>
                    </div>
                </div>
                {/* <p id="caption">Suseongmot Lake in Daegu</p> */}
            </section>
        );
    }

}

export default About;