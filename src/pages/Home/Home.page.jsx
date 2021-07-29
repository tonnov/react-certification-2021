import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../providers/Auth';
import VideoList from './VideoList.component'
import './Home.styles.css';
import videos from '../../mock/youtube-videos-mock.json';

function HomePage() {
  // const history = useHistory();
  // const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  // const items = data.items;
  // console.log(items);

  return (
    <section className="homepage">
      <h1>Welcome to the Challenge!</h1>
      <VideoList videos={videos} />
    </section>
  );
}

export default HomePage;
