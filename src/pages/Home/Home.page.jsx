import React, { useEffect, useState } from 'react';
// import { useAuth } from '../../providers/Auth';
import VideoList from './VideoList.component';
import { useGlobal } from '../../providers/Global';
import { useYoutubeApi } from '../../providers/Youtube';
import { Home, HomeTitle } from './Home.styled';

// import listaVideos from '../../mock/react-response.json';

function HomePage() {
  const { searchVideos } = useYoutubeApi();
  const [videos, SetVideos] = useState({});

  const { state } = useGlobal();
  const { query, darkTheme } = state;
  // console.log(state);

  useEffect(() => {
    const runAsync = async () => {
      const data = await searchVideos(query);
      SetVideos(data || []);
    };

    runAsync();
    // SetVideos(listaVideos);
    // }, [query]);
  }, [query, searchVideos]);


  return (
    <Home dark={darkTheme} >
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <VideoList videos={videos} dark={darkTheme} />
    </Home>
  );
}

export default HomePage;
