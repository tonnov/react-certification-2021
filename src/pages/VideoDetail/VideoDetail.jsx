import React from 'react';
import { useLocation } from 'react-router-dom';

const VideoDetail = () => {

    const query = new URLSearchParams(useLocation().search);
    const videoId = (query && query.get('id')) || '';

    const videoSrc = `http://www.youtube.com/embed/${videoId}?autoplay=0`;

    return (
        <div>
            <iframe title={videoId} id="ytplayer" type="text/html" width="640" height="360"
                    src={videoSrc} frameBorder="0" />
        </div>

    )

}


export default VideoDetail;