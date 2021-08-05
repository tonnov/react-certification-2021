import React from 'react';
import { useParams } from 'react-router-dom';
import VideoMain from './VideoMain';

const VideoDetail = () => {
  const { id } = useParams();

  return <VideoMain embedId={id} />;
};

export default VideoDetail;
