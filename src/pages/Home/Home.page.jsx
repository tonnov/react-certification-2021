import React, { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../providers/Auth';
import VideoList from './VideoList.component';
import { useSearch } from '../../providers/Search';
import './Home.styles.css';
import { useYoutubeApi } from '../../providers/Youtube';

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
    <section className="homepage">
      <h1>Welcome to the Challenge!</h1>
      <VideoList videos={videos} />
    </section>
  );
}

export default HomePage;
