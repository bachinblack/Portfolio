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
                    <p>
                        I'm 22 and I come from the North-West of France.<br/>
                        Spent a year in South Korea, and I' a'm still learning Korean now.<br/>
                        This is where I got addicted to coffee.<br/>
                        Since then, I also dream travelling the world for work.
                    </p>
                </div>
                {/* Skills */}
                <div className="sub-section middle-section">
                    <p>
                        Thanks to my 5 years as a student, intern and freelancer<br/>
                        I have experience in development, project management and pitching.<br/>
                    </p>
                </div>
                {/* Music */}
                <div className="sub-section bottom-section">
                    <p>
                        Very interested in music, though I'm an amateur.<br/>
                        <div className="unimportant">I play guitar and have been playing some drums and piano.<br/></div>
                        Rock, pop, classic and sometime metal from every country.<br/>
                        Like political music<br/>
                        such as <a href="https://www.youtube.com/watch?v=dGWQqRyO8gA">Serj Tankian</a> or <a href="https://www.youtube.com/watch?v=1WFc7u8qWuo">Les Cowboy Fringuants.</a>
                        <Spotify/>
                    </p>
                </div>
                <div className="sub-section decoration"></div>
            </section>
        );
    }

}

export default About;
