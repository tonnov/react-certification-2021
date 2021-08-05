
import React from 'react';
import styled from 'styled-components';

const VideoRelContainer = styled.div`
  background-color: white;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
  margin-bottom: 3px;
`;

const RelThumbnail = styled.img`
  height: 100%;
  padding: 2px;
`;

const RelText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RelTitle = styled.span`
  flex: 80%;
  /* background-color: red; */
  font-size: 1em;
  margin: 0;
  padding: 2px;
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  white-space: normal !important;
	word-break: normal;

  overflow: hidden;
  text-overflow: ellipsis;
  
`;

const RelAuthor = styled.span`
  flex: 20%;
  padding: 2px;
  font-size: 0.8em;
  color: #8c8c8c;
  
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal !important;
	word-break: normal;
  overflow: hidden;
  text-overflow: clip;
`;

const VideoRelated = ({video}) => {

    if(!video.snippet) return null;

    const { thumbnails, title, channelTitle } = video.snippet;
    // console.log(video.snippet.title);
    
    return (

    <VideoRelContainer>
        <RelThumbnail src={thumbnails.default.url} />
        <RelText>
            <RelTitle>{title}</RelTitle>
            <RelAuthor>{channelTitle}</RelAuthor>
        </RelText>
    </VideoRelContainer>

    )
    
}

export default VideoRelated;