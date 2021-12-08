import { Component } from 'react';
import YouTube from 'react-youtube';
import CommentSection from './CommentSection';

class Video extends Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
            // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };

        return (
            <>
                <YouTube videoId={this.props.currentID} opts={opts} onReady={this._onReady} />
                <CommentSection />
            </>
        )
    }
}

export default Video;