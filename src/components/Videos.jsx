import React from 'react'
import YoutubeIframe from './YoutubeIframe';

const Videos = () => {

    const videoId = "974utY3S5Wo";

    const opts = {
        height: '700',
        width: '1600',
        playerVars: {
          autoplay: 1,
        },
    };
    
    return (
        <div className='video-container'>
            <h1>Latest Video</h1>
            <div className='video-player-container'>
            <YoutubeIframe className='youtube-video' videoId={videoId} />
            </div>
        </div>
    )
}

export default Videos
