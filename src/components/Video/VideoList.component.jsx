import React from 'react';
import styled from 'styled-components';
import { VideoItem } from './VideoItem.component';

const VideoListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 15px;
  background-color: inherit;
`;

export const VideoList = ({ videos = [], dark, origin }) => {
  if (videos.length <= 0) return null;

  return (
    <VideoListContainer>
      {videos.map((video) => (
        <VideoItem item={video} key={video.etag} dark={dark} origin={origin} />
      ))}
    </VideoListContainer>
  );
};
