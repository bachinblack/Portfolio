import React from 'react';

class Spotify extends React.Component {
    constructor() {
        super();
        this.state = {
            recentSongs: [],
            mostRecentSong: undefined,
            isPlaying: false,
            lightClass: "green-light"
        };
    }

    componentDidMount() {
        // Getting the last 3 songs I listened to
        fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bach-in-black&api_key=7a4620ccd117bccc45714159e2155db0&format=json&limit=3')
        .then((r) => r.json())
        .then((songs) => {
            console.log(songs);
            const first = songs.recenttracks.track[0];
            // Getting data on the first song
            fetch('https://us-central1-sound-oasis-248508.cloudfunctions.net/getSpotifyUrl?q=' + first.name + " " + first.artist['#text'])
            .then((r) => r.json())
            .then((now) => {
                console.log(now);
                now.nowPlaying = !!(first['@attr'] && first['@attr'].nowplaying);
                this.setState({
                    recentSongs: songs,
                    mostRecentSong: now,
                    lightClass: now.nowPlaying ? " on-air" : ""
                });
            });
        });
    }

    render() {
        const { mostRecentSong } = this.state;

        if (mostRecentSong) {
          return (
            <div className="spotify">
              {mostRecentSong.nowPlaying ?
              <div className="on-air">Hey I'm listening to this song right now!</div>
            :
              <>Here is the last song I listened to</>}
              {/* <div id="on-air" className={"green-light" + this.state.lightClass}></div> */}
              <iframe id="play-button" src={"https://open.spotify.com/embed/track/" + mostRecentSong.id + "?si=-VJyxQ1yQ6eTvcTRPB8XAA"} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          )
        }
        return (
          <div>
          </div>
        );
    }

}

export default Spotify;
