import React from 'react';
import { useLocation } from 'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed';

const VideoDetail = () => {
  const query = new URLSearchParams(useLocation().search);
  const videoId = (query && query.get('id')) || '';

  // const videoSrc = `http://www.youtube.com/embed/${videoId}?autoplay=0`;

  return (
    <YoutubeEmbed embedId={videoId} />
  );
};

export default VideoDetail;
