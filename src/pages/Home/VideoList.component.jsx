import React from 'react';
import styled from 'styled-components';
import VideoItem from './VideoItem.component';

const VideoListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 15px;
`;

const VideoList = ({ videos = {} }) => {
  const { items = [] } = videos;

  if (items.length <= 0) return null;

  return (
    <VideoListContainer>
      {items.map((item) => (
        <VideoItem item={item} key={item.id.videoId} />
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
