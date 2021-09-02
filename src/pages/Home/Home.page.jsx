import React from 'react';
import { VideoList } from '../../components/Video';
import { useGlobal } from '../../providers/Global';
import { Home, HomeTitle } from './Home.styled';
import { useVideos } from '../../utils/hooks/useVideos';

function HomePage() {
  const { state } = useGlobal();
  const { query, darkTheme } = state;

  const videos = useVideos(query);
  const { items } = videos;

  return (
    <Home data-testid="Home" dark={darkTheme}>
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <VideoList videos={items} dark={darkTheme} origin="home" />
    </Home>
  );
}

export default HomePage;
