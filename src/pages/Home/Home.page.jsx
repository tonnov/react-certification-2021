import React, { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../providers/Auth';
import VideoList from './VideoList.component';
import { useSearch } from '../../providers/Search';
import './Home.styles.css';
import { useYoutubeApi } from '../../providers/Youtube';

// import listaVideos from '../../mock/react-response.json';
// import YoutubeSearch from '../../components/Api/Youtube.api';

function HomePage() {
  const { query } = useSearch();
  const { searchVideos } = useYoutubeApi();

  const [videos, SetVideos] = useState({});

  useEffect(() => {

    const runAsync = async () => {

      const data = await searchVideos(query);
      SetVideos(data || []);

    }

    runAsync();

    // YoutubeSearch(query).then((res) => {
    //   if (res.data.items.length < 0) return null;
    //   SetVideos(res.data);
    // });
    
  }, [query, searchVideos]);

  return (
    <section className="homepage">
      <h1>Welcome to the Challenge!</h1>
      <VideoList videos={videos} />
    </section>
  );
}

export default HomePage;
