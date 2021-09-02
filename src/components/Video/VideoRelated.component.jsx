import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkVideoRel = styled(Link)`
  text-decoration: none;
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin: 0;
  padding: 0;

  :hover {
    opacity: 0.8;
    transition: all 0.3s ease-out;
  }
`;

const VideoRelContainer = styled.div`
  height: 92px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 1px;
  padding: 1px;
`;

const RelThumbnail = styled.img`
  height: 90px;
  padding: 1px;

  @media screen and (max-width: 768px) {
    height: 95px;
  }
`;

const RelText = styled.div`
  flex: auto;
  height: auto;
  max-width: 100%;
  min-width: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin: 0;
  padding-left: 2px;
`;

const RelTitle = styled.span`
  flex: 3;
  max-height: 66px;
  max-width: 90%;
  padding: 2px;
  font-size: 1em;
  color: ${(props) => (props.dark ? '#f0f0f0' : '#4f4f4f')};

  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  white-space: normal;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RelAuthor = styled.span`
  flex: 1;
  max-width: 80%;
  padding: 2px;
  color: ${(props) => (props.dark ? '#9e9e9e' : '#8c8c8c')};
  font-size: 0.8em;
  font-style: italic;

  white-space: nowrap !important;
  word-break: break-all;

  display: block;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const VideoRelated = ({ video, dark, origin }) => {
  if (!video.snippet) return null;

  const { thumbnails, title, channelTitle } = video.snippet;

  const videoId = video.id.videoId || video.id;
  return (
    <LinkVideoRel
      dark={dark}
      to={{
        pathname: `/video/${videoId}`,
        state: { origin },
      }}
    >
      <VideoRelContainer role="listitem">
        <RelThumbnail src={thumbnails.medium.url} role="img" />
        <RelText>
          <RelTitle role="note" dark={dark}>
            {title}
          </RelTitle>
          <RelAuthor dark={dark}>{channelTitle}</RelAuthor>
        </RelText>
      </VideoRelContainer>
    </LinkVideoRel>
  );
};
