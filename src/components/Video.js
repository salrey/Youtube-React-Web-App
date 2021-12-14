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
            height: '500',
            width: '900',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };

        return (
            <div className='Video-layout'>
                <div className='Video'>
                    <YouTube 
                    className="Video"
                    videoId={this.props.currentID}
                    opts={opts}
                    onReady={this._onReady} />
                </div>
                
                {/* <hr></hr> */}
                <CommentSection className="Comments" videoId={this.props.currentID} />
            </div>
        )
    }
}

export default Video;