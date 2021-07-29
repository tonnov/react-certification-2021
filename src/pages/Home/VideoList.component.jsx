import React from 'react';
import styled from 'styled-components';
import VideoItem from './VideoItem.component';

const VideoListContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 5px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    & a {
        text-decoration: none;
    }
`;

const VideoList = ({videos = {}}) => {

    const {items = []} = videos;

    if (items.length <= 0 ) return null;

    return (
        <VideoListContainer>
            {items.map( (item) => (
                <VideoItem item={item} key={item.etag} />
            ))}
        </VideoListContainer>
    );

};

 export default VideoList;

 