import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const VideoLayout = styled.div`
  margin: 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
  /* background-color: ${props => props.dark ? '#3b3b3b' : '#fff'}; */
  background-color: inherit;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const VideoContainer = styled.div`
  flex: 70%;
  padding: 5px;

  @media screen and (max-width: 768px) {
    flex: 100%;
    /* flex: 1; */
  }
`;

const VideoTitle = styled.h3`
  font-weight: 900;
  color: ${props => props.dark ? '#f5f5f5' : '#383838'};
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10pt;
  padding: 0 10px;
  margin: 0;
  color: ${props => props.dark ? '#b5b5b5' : '#383838'};
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
  color: ${props => props.dark ? '#d1d1d1' : '#757575'};
  display: inline-block;
  word-wrap: break-word;
  white-space: pre-line;
  height: auto;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  /* background-color: cadetblue; */
`;

export const ListVideoRelated = styled.div`
  flex: 30%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px 0;
  height: 800px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    /* display: none; */
    flex: 100%;
    overflow-y: hidden;
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

export const VideoMain = ({ embedId, video, dark }) => {
  if (!video) return null;

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
          title="Embedded youtube"
          data-testid="iframe"
        />
      </VideoFrame>
      <VideoTitle dark={dark}>{snippet.title}</VideoTitle>
      <VideoDetails dark={dark}>
        <VideoPub >{`Publicado: ${publicado}`}</VideoPub>
        <VideoViews >{`${vistas} Visualizaciones`}</VideoViews>
      </VideoDetails>
      <VideoDescription dark={dark}>{firstLine}</VideoDescription>
    </>
  );
};

VideoMain.propTypes = {
  embedId: PropTypes.string.isRequired,
};
