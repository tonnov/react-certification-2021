import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VideoFavorite from './VideoFavorite.component';

const VideoTitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0;
  padding: 5px 2px;
`;

const VideoTitle = styled.h3`
  flex: 90%;
  margin: 0;
  font-weight: 900;
  word-break: normal;
  color: ${(props) => (props.dark ? '#f5f5f5' : '#383838')};
`;

const VideoFav = styled.span`
  flex: 10%;
  display: ${(props) => (props.auth ? 'flex' : 'none')};
  justify-content: center;
  margin: 0;
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10pt;
  padding: 0 10px;
  margin: 0;
  color: ${(props) => (props.dark ? '#b5b5b5' : '#383838')};
`;

const VideoPub = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const VideoViews = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const VideoDescription = styled.p`
  padding: 10px;
  color: ${(props) => (props.dark ? '#d1d1d1' : '#757575')};
  display: inline-block;
  word-wrap: break-word;
  white-space: pre-line;
  height: auto;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  /* background-color: cadetblue; */
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

export const VideoMain = ({ embedId, video, dark, auth }) => {
  if (!video) return null;
  // console.log('VideoMain auth -->',auth);
  const { snippet, statistics } = video;
  const publicado = new Date(snippet.publishedAt).toLocaleDateString();
  const vistas = new Intl.NumberFormat('es-MX', { style: 'decimal' }).format(
    statistics.viewCount
  );
  const [firstLine] = snippet.description.split('\n');

  return (
    <>
      <VideoFrame>
        <iframe
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameborser="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded Youtube Video"
          data-testid="iframe"
        />
      </VideoFrame>
      <VideoTitleBar>
        <VideoTitle dark={dark}>{snippet.title}</VideoTitle>
        <VideoFav auth={auth}>
          <VideoFavorite video={video} dark={dark} />
        </VideoFav>
      </VideoTitleBar>
      <VideoDetails dark={dark}>
        <VideoPub>{`Publicado: ${publicado}`}</VideoPub>
        <VideoViews>{`${vistas} Visualizaciones`}</VideoViews>
      </VideoDetails>
      <VideoDescription dark={dark}>{firstLine}</VideoDescription>
    </>
  );
};

VideoMain.propTypes = {
  embedId: PropTypes.string.isRequired,
};
