import React from 'react';
import { useParams } from 'react-router-dom';
import { VideoLayout, VideoContainer, ListVideoRelated, VideoMain } from './VideoMain';
import VideoRelated from './VideoRelated';
import infoVideo from '../../mock/single-video.json';
import relatedVideos from '../../mock/related-to.json';


const VideoDetail = () => {
  const { id } = useParams();

  const { items: videosRel } = relatedVideos;

  return (
    <>
      <VideoLayout>
        <VideoContainer>
          <VideoMain embedId={id} video={infoVideo} />
        </VideoContainer>
        <ListVideoRelated>
          {videosRel.map((video) => (
            <VideoRelated key={video.id.videoId} video={video} />
          ))}
        </ListVideoRelated>
      </VideoLayout>
    </>
  )
};

export default VideoDetail;
