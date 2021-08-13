import React, { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../providers/Auth';
import VideoList from './VideoList.component';
import { useSearch } from '../../providers/Search';
import { useYoutubeApi } from '../../providers/Youtube';
import { Home, HomeTitle } from './Home.styled';

// import listaVideos from '../../mock/react-response.json';

function HomePage() {
  const { query } = useSearch();
  const { searchVideos } = useYoutubeApi();

  const [videos, SetVideos] = useState({});

  useEffect(() => {
    const runAsync = async () => {
      const data = await searchVideos(query);
      SetVideos(data || []);
    };

    runAsync();

    // SetVideos(listaVideos);
  }, [query, searchVideos]);

  return (
    <Home>
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <VideoList videos={videos} />
    </Home>
  );
}

export default HomePage;
