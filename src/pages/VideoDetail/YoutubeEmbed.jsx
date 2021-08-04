import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoContainer = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
`;
  
const VideoFrame = styled.iframe`
    left: 0;
    top: 0;
    height: 70%;
    width: 70%;
    position: absolute;
    margin: 0;
    border: 0;
`;

const YoutubeEmbed = ({embedId}) => {
    
    return (
        <VideoContainer>
            <VideoFrame
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameborser="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </VideoContainer>
    )
}

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
}

export default YoutubeEmbed;