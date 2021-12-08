import { Component } from 'react';
import YouTube from 'react-youtube';
import './Video.css'
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
            <div>
                <YouTube className="Video"
                    videoId={this.props.currentID}
                    opts={opts}
                    onReady={this._onReady} />
                <hr></hr>
                <CommentSection />
            </div>
        )
    }
}

export default Video;