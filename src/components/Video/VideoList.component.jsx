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
  /* background-color: ${(props) => (props.dark ? '#4d4d4d' : '#fff')}; */
`;

export const VideoList = ({ videos = {}, dark }) => {
  const { items = [] } = videos;

  if (items.length <= 0) return null;

  return (
    <VideoListContainer>
      {items.map((item) => (
        // { console.log(item.id.videoId)}
        <VideoItem item={item} key={item.etag} dark={dark} />
      ))}
    </VideoListContainer>
  );
};

// export default VideoList;
