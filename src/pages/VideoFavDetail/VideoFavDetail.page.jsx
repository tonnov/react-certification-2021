import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { VideoLayout, VideoContainer, ListVideoRelated } from '../VideoDetail/VideoDetail.styled';
import { VideoMain } from '../../components/Video';
import { VideoRelated } from '../../components/Video/VideoRelated.component';
import { useVideo } from '../../utils/hooks/useVideos';
import { useGlobal } from '../../providers/Global';
import { useAuth } from '../../providers/Auth';
import { excludeVideo } from '../../utils/favsHelper';

const VideoFavDetail = () => {

  const { id } = useParams();
  const { state } = useGlobal();
  const { darkTheme, userFavorites } = state;
  const { authenticated } = useAuth();

  const [ relFavVideos, setRelFavVideos ] = useState();
  
  useEffect(() => {
    const filtered = excludeVideo(userFavorites, id);
    setRelFavVideos(filtered);
  }, [userFavorites, id]);

  const selVideo = useVideo(id);

  return (
    <VideoLayout dark={darkTheme}>
      <VideoContainer>
        <VideoMain embedId={id} video={selVideo} dark={darkTheme} auth={authenticated} />
      </VideoContainer>
      <ListVideoRelated>
        {relFavVideos &&
          relFavVideos.map((vid) => (
            <VideoRelated
              key={vid.id.videoId}
              video={vid}
              dark={darkTheme ? 1 : 0}
            />
          ))}
      </ListVideoRelated>
    </VideoLayout>
  );
};

export default VideoFavDetail;
