import React from 'react';
import { render } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AuthProvider from '../../providers/Auth';
import GlobalProvider from '../../providers/Global';
import VideoDetail from './VideoFavDetail.page';

// jest.mock('../../providers/Auth');

const history = createMemoryHistory();
history.push({
  pathname: '/videofav/nmXMgqjQzls',
  state: { origin: 'fav' },
});

const component = (
  <GlobalProvider>
    <AuthProvider>
      <Router history={history}>
        <Route path="/videofav/:id">
          <VideoDetail />
        </Route>
      </Router>
    </AuthProvider>
  </GlobalProvider>
);

beforeEach(() => render(component));

describe('VideoFavDetail page', () => {
  it('should render the video detail view', () => {
    // screen.debug();
    // const detailPage = screen.getByTestId('Video Detail');
    // expect(detailPage).toBeInTheDocument()
  });
});
