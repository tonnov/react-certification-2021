import React from 'react';
import { useParams } from 'react-router-dom';
import {
  VideoLayout,
  VideoContainer,
  ListVideoRelated,
  VideoMain,
} from '../../components/Video/VideoMain.component';
import VideoRelated from '../../components/Video/VideoRelated.component';
// import infoVideo from '../../mock/single-video.json';
// import relatedVideos from '../../mock/related-to.json';
import { useVideo, useRelatedVideos } from '../../providers/Youtube/Youtube.helper';
import { useGlobal } from '../../providers/Global';

const VideoDetail = () => {
  const { id } = useParams();

  const selVideo = useVideo(id);
  const relVideos = useRelatedVideos(id);

  const { state } = useGlobal();
  const { darkTheme } = state;

  // const [selVideo] = infoVideo.items;
  // const { items: relVideos } = relatedVideos;

  return (
    <VideoLayout dark={darkTheme}>
      <VideoContainer>
        <VideoMain embedId={id} video={selVideo} dark={darkTheme} />
      </VideoContainer>
      <ListVideoRelated>
        {relVideos &&
          relVideos.map((vid) => <VideoRelated key={vid.id.videoId} video={vid} dark={darkTheme} />)}
      </ListVideoRelated>
    </VideoLayout>
  );
};

export default VideoDetail;
