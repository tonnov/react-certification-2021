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
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  color: #383838;
  font-size: 10pt;
  padding: 0 10px;
  margin: 0;
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
  color: #757575;
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


export const VideoMain = ({ embedId, video }) => {

  if (!video) return null;
  
  const { snippet, statistics} = video;
  const publicado = new Date(snippet.publishedAt).toLocaleDateString();
  const vistas = new Intl.NumberFormat('es-MX', {style: 'decimal'}).format(statistics.viewCount);
  var firstLine = snippet.description.split('\n')[0];

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
        />
      </VideoFrame>
      <VideoTitle>{snippet.title}</VideoTitle>
      <VideoDetails>
        <VideoPub>{`Publicado: ${publicado}`}</VideoPub>
        <VideoViews>{`${vistas} Visualizaciones`}</VideoViews>
      </VideoDetails>
      <VideoDescription>{firstLine}</VideoDescription>
    </>
  )
}

VideoMain.propTypes = {
  embedId: PropTypes.string.isRequired,
};
