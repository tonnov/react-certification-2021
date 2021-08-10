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
      {items.map((item) => 
      // { console.log(item.id.videoId)}
      (
        <VideoItem item={item} key={item.etag} />
      )
      )}
    </VideoListContainer>
  );
};

export default VideoList;
