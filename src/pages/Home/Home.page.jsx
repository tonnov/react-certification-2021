import React from 'react';

import { Link } from 'react-router-dom';
// import { Link, useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import data from '../../mock/youtube-videos-mock.json';
import './Home.styles.css';

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
      <h1>Challenge 1</h1>
      <div className="videoGrid">
        {data.items.map((item) => {
          return (
            <Link to="!#" key={item.etag}>
              <div className="videoCard">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className="text">
                  <h3>{item.snippet.title}</h3>
                  <span>{item.snippet.description}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default HomePage;
