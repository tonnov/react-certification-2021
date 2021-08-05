import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import relatedVideos from '../../mock/related-to.json';
import infoVideo from '../../mock/single-video.json';
import VideoRelated from './VideoRelated';

const VideoLayout = styled.div`
  margin: 0 auto;
  width: 100%;
  height: auto;
  /* background-color: #addccf; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px;
`;

const VideoContainer = styled.div`
  flex: 70%;
  padding: 5px;

  @media screen and (max-width: 767px) {
    flex: 100%;
  }
`;

const ListVideoRelated = styled.div`
  flex: 30%;
  padding: 5px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const VideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16/9 ratio */
  height: 0;
  overflow: hidden;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const VideoMain = ({ embedId }) => {

  const [item] = infoVideo.items;
  
  const { snippet, statistics} = item;
  const publicado = new Date(snippet.publishedAt).toLocaleDateString();
  const vistas = new Intl.NumberFormat('es-MX', {style: 'decimal'}).format(statistics.viewCount);

  const { items: videosRel } = relatedVideos;

  return (
    <VideoLayout>

      <VideoContainer>
      
        <VideoFrame>
          <iframe
            width="640"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameborser="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </VideoFrame>
        <h3>{snippet.title}</h3>
        <div>
          <span>{`Publicado: ${publicado}`}</span>{`${vistas} Visualizaciones`}<span></span>
        </div>
        <p>{snippet.description}</p>
        
      </VideoContainer>
      <ListVideoRelated>

        {videosRel.map((video) => (
          <VideoRelated key={video.id.videoId} video={video} />
        ))}

      </ListVideoRelated>

    </VideoLayout>
  );
};

VideoMain.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VideoMain;
