import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkVideoRel = styled(Link)`
  text-decoration: none;
`;
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
`;

const RelThumbnail = styled.img`
  height: 90px;
  padding: 1px;

  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;

const RelText = styled.div`
  flex: auto;
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin: 0;
  padding-left: 2px;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

const RelTitle = styled.span`
  flex: 3;
  max-height: 66px;
  max-width: 90%;
  padding: 2px;
  font-size: 1em;
  display: inline-block;
  color: #4f4f4f;

  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  /* word-wrap: break-word; */
  
  white-space: normal !important;
	word-break: normal;
  /* overflow-wrap: break-word; */
  overflow: hidden;
  text-overflow: ellipsis;
  
`;

const RelAuthor = styled.span`
  flex: 1;
  max-width: 80%;
  padding: 2px;
  color: #8c8c8c;
  font-size: 0.8em;
  font-style: italic;

  white-space: nowrap !important;
  word-break: break-all;

  display: block;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const VideoRelated = ({video}) => {

    if(!video.snippet) return null;

    const { thumbnails, title, channelTitle} = video.snippet;
    const { videoId } = video.id;
    // console.log(videoId);
    
    return (
      <LinkVideoRel to={`/video/${videoId}`} >
        <VideoRelContainer >
            <RelThumbnail src={thumbnails.medium.url} />
            <RelText>
                <RelTitle>{title}</RelTitle>
                <RelAuthor>{channelTitle}</RelAuthor>
            </RelText>
        </VideoRelContainer>
      </LinkVideoRel>

    )
    
}

export default VideoRelated;