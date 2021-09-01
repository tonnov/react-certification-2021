import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { VideoLayout, VideoContainer, ListVideoRelated } from './VideoDetail.styled';
import { VideoMain } from '../../components/Video';
import { VideoRelated } from '../../components/Video/VideoRelated.component';
import { useVideo, useRelatedVideos as getRelated } from '../../utils/hooks/useVideos';
import { useGlobal } from '../../providers/Global';
import { useAuth } from '../../providers/Auth';
import { ScrollToTop } from '../../utils/scrollTop';
import { excludeVideo } from '../../utils/favsHelper';

// import infoVideo from '../../mock/single-video.json';
// import relatedVideos from '../../mock/related-to.json';

const VideoDetail = () => {
  ScrollToTop();

  const { id } = useParams();
  const { authenticated } = useAuth();

  const location = useLocation();
  const { origin } = location.state;

  console.log( origin );

  const selVideo = useVideo(id);

  const { state } = useGlobal();
  const { darkTheme } = state;

  const getFavsRelated = (videoId) => {
    const { userFavorites } = state;
    const filtered = excludeVideo(userFavorites, videoId);
    return filtered;
  };

  const relVideos = origin === 'fav' ? getFavsRelated(id) : getRelated(id);

  return (
    <VideoLayout dark={darkTheme} data-testid="Video Detail">
      <VideoContainer>
        <VideoMain embedId={id} video={selVideo} dark={darkTheme} auth={authenticated} />
      </VideoContainer>
      <ListVideoRelated>
        {relVideos &&
          relVideos.map((vid) => (
            <VideoRelated
              key={vid.id.videoId || vid.id}
              video={vid}
              dark={darkTheme ? 1 : 0}
              origin={origin}
            />
          ))}
      </ListVideoRelated>
    </VideoLayout>
  );
};

export default VideoDetail;
