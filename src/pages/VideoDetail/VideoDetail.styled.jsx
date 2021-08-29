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
    width: 100%;
  }
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
    flex: 100%;
    overflow-y: hidden;
  }
`;
