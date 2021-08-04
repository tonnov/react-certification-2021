import React from 'react';
import { useParams } from 'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed';

const VideoDetail = () => {

  const { id } = useParams();

  return (
    <YoutubeEmbed embedId={id} />
  );
};

export default VideoDetail;
