import React from 'react';
import styled from 'styled-components';

const VideoRelContainer = styled.div`
  background-color: white;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
  margin: 1px;
  padding: 1px;

  @media screen and (max-width: 930px) {
    justify-content: center;
    height: 130px;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    height: 100px;
  }
`;

const RelThumbnail = styled.img`
  height: 100px;
  padding: 1px;

  @media screen and (max-width: 930px) {
    height: 130px;
  }
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

const RelText = styled.div`
  flex: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin: 0;
  padding-left: 2px;
  
  @media screen and (max-width: 930px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const RelTitle = styled.span`
  flex: 3;
  max-height: 75%;
  padding: 2px;
  font-size: 1em;
  display:inline-block;

  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  /* word-wrap: break-word; */
  
  /* white-space: normal !important;
	word-break: normal; */
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  
`;

const RelAuthor = styled.span`
  flex: 1;
  max-width: 80%;
  padding: 2px;
  color: #8c8c8c;

  white-space: normal !important;
  word-break: break-all;

  display:inline-block;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const VideoRelated = ({video}) => {

    if(!video.snippet) return null;

    const { thumbnails, title, channelTitle } = video.snippet;
    // console.log(video.snippet.title);
    
    return (

    <VideoRelContainer>
        <RelThumbnail src={thumbnails.medium.url} />
        <RelText>
            <RelTitle>{title}</RelTitle>
            <RelAuthor>{channelTitle}</RelAuthor>
        </RelText>
    </VideoRelContainer>

    )
    
}

export default VideoRelated;