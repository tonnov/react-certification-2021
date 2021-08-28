import React from 'react';
import { useParams } from 'react-router-dom';
import { VideoLayout, VideoContainer, ListVideoRelated } from './VideoFavDetail.styled';
import { VideoMain } from '../../components/Video';
import { VideoRelated } from '../../components/Video/VideoRelated.component';
import { useVideo } from '../../utils/hooks/useVideos';
import { useGlobal } from '../../providers/Global';
import { useAuth } from '../../providers/Auth';
import { useFavs } from '../../utils/hooks/useFavs';

// import infoVideo from '../../mock/single-video.json';
// import relatedVideos from '../../mock/related-to.json';

const VideoFavDetail = () => {
  const { id } = useParams();
  const { allOtherFavs } = useFavs();

  const selVideo = useVideo(id);
  const relVideos = allOtherFavs(id);

  const { state } = useGlobal();
  const { darkTheme } = state;
  const { authenticated } = useAuth();

  // const [selVideo] = infoVideo.items;
  // const { items: relVideos } = relatedVideos;

  return (
    <VideoLayout dark={darkTheme}>
      <VideoContainer>
        <VideoMain embedId={id} video={selVideo} dark={darkTheme} auth={authenticated} />
      </VideoContainer>
      <ListVideoRelated>
        {relVideos &&
          relVideos.map((vid) => (
            <VideoRelated
              key={vid.id.videoId}
              video={vid}
              dark={darkTheme ? 1 : 0}
              origin="fav"
            />
          ))}
      </ListVideoRelated>
    </VideoLayout>
  );
};

export default VideoFavDetail;
