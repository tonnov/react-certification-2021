import React, { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../providers/Auth';
import VideoList from './VideoList.component';
import { useSearch } from '../../providers/Search';
import './Home.styles.css';

// import listaVideos from '../../mock/react-response.json';
import YoutubeSearch from '../../components/Api/Youtube.api';

function HomePage() {
  const { query } = useSearch();

  const [videos, SetVideos] = useState({});

  useEffect(() => {
    YoutubeSearch(query).then((res) => {
      if (res.data.length < 0) return null;
      SetVideos(res.data);
    });
    // SetVideos(listaVideos);
  }, [query]);

  return (
    <section className="homepage">
      <h1>Welcome to the Challenge!</h1>
      <VideoList videos={videos} />
    </section>
  );
}

export default HomePage;
