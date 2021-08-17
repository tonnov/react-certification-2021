import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalProvider from '../../providers/Global';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../providers/Search';
import YouTubeApiProvider from '../../providers/Youtube';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import Navbar from '../Navbar';
import VideoDetail from '../../pages/VideoDetail';
// import { random } from '../../utils/fns';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>
          <SearchProvider>
            <YouTubeApiProvider>
              <Navbar />
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/login">
                    <LoginPage />
                  </Route>
                  <Route exact path="/video/:id">
                    <VideoDetail />
                  </Route>
                  <Private exact path="/secret">
                    <SecretPage />
                  </Private>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Layout>
            </YouTubeApiProvider>
          </SearchProvider>
        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
