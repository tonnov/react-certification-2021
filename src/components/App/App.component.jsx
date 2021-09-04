import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalProvider from '../../providers/Global';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import FavoritePage from '../../pages/Favorite';
import Private from '../Private';
import Layout from '../Layout';
import Navbar from '../Navbar';
import VideoDetail from '../../pages/VideoDetail';
import VideoFavDetail from '../../pages/VideoDetail/VideoFavDetail.page';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>
          <Layout>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/video/:id">
                <VideoDetail />
              </Route>
              <Private exact path="/favorites">
                <FavoritePage />
              </Private>
              <Private exact path="/videofav/:id">
                <VideoFavDetail />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
