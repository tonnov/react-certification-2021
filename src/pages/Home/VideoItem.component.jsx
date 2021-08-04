import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const VideoContainer = styled.div`
  width: 350px;
  height: 340px;
  /* margin: 11px 8px; */
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 4px;
  background-color: snow;
  box-shadow: 0 1px 5px 0 rgba(79, 79, 79, 0.1);
  overflow: hidden;
`;

const VideoThumbnail = styled.div`
  min-height: 150px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 4px 4px 0 0;
  display: block;
`;

const VideoText = styled.div`
  padding: 10px;
`;

const VideoTitle = styled.h3`
  color: #454545;
`;

const VideoDescription = styled.p`
  color: #757575;
  line-height: 1.5;
  font-size: 10.5pt;
  overflow: hidden;
`;

const VideoItem = ({ item }) => {
  const { thumbnails, title, description } = item.snippet;

  const videoId = item.id.videoId || item.id.channelId;

  return (
    <Link to={`/video/${videoId}`}>
      <VideoContainer>
        <VideoThumbnail role="img" url={thumbnails.high.url} />
        <VideoText>
          <VideoTitle>{title}</VideoTitle>
          <VideoDescription role="note">{description}</VideoDescription>
        </VideoText>
      </VideoContainer>
    </Link>
  );
};

export default VideoItem;
