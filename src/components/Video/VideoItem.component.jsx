import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkVideo = styled(Link)`
  text-decoration: none;

  :hover {
    opacity: 0.8;
    transition: all 0.3s ease-out;
  }
`;

const VideoContainer = styled.div`
  width: 350px;
  height: 340px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => (props.dark ? '#1f1f1f' : '#e8e8e8')};
  border-radius: 4px;
  box-shadow: 0 1px 5px 0 rgba(79, 79, 79, 0.1);
  overflow: hidden;
  background-color: ${(props) => (props.dark ? '#4d4d4d' : '#fff')};
  color: ${(props) => (props.dark ? '#f2f2f2' : '#3d3d3d')};
`;

const VideoThumbnail = styled.div`
  min-height: 155px;
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
  color: ${(props) => (props.dark ? '#f0f0f0' : '#454545')};
`;

const VideoDescription = styled.p`
  line-height: 1.5;
  font-size: 10.5pt;
  overflow: hidden;
  color: ${(props) => (props.dark ? '#dbdbdb' : '#757575')};
`;

export const VideoItem = ({ item, dark, origin }) => {
  const { thumbnails, title, description } = item.snippet;

  const videoId = item.id.videoId || item.id;
  const path = origin === 'fav' ? 'videofav' : 'video';
  return (
    <LinkVideo to={`/${path}/${videoId}`}>
      <VideoContainer dark={dark}>
        <VideoThumbnail role="img" url={thumbnails.high.url} />
        <VideoText>
          <VideoTitle dark={dark}>{title}</VideoTitle>
          <VideoDescription role="note" dark={dark}>
            {description}
          </VideoDescription>
        </VideoText>
      </VideoContainer>
    </LinkVideo>
  );
};
