import React from 'react';

import Spotify from './Spotify';


class About extends React.Component {
    constructor() {
        super();
        this.state = {
            recentSongs: [],
            mostRecentSong: undefined,
            isPlaying: false,
        };
    }

    render() {
        const { mostRecentSong } = this.state;
        return (
            <section id="about">
                {/* Overview */}
                <div className="sub-section top-section">
                    <div>
                        I'm 22 and I come from the North-West of France.<br/>
                        Spent a year in South Korea, and I'm still learning Korean.<br/>
                        This is where I got addicted to coffee.<br/>
                        Since then, I also dream of travelling the world for work!
                    </div>
                </div>
                {/* Skills */}
                <div className="sub-section middle-section">
                    <div>
                        Thanks to my 5 years as a student, intern and freelancer<br/>
                        I have experience in development, project management and pitching.<br/>
                        It's all in my resume so I wont talk about it anymore here
                    </div>
                </div>
                {/* Music */}
                <div className="sub-section bottom-section">
                    <div>
                        Very interested in music, though I'm an amateur.<br/>
                        I play guitar and have been playing some drums and piano.<br/>
                        I listen toRock, pop, classic and sometime metal from every country.<br/>
                        <Spotify />
                    </div>
                </div>
                <div className="sub-section decoration"></div>
            </section>
        );
    }

}

export default About;
