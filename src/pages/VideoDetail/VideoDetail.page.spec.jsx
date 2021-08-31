import React from 'react';
import { render } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AuthProvider from '../../providers/Auth';
import GlobalProvider from '../../providers/Global';
import VideoDetail from './VideoDetail.page'

// jest.mock('../../providers/Auth');

const history = createMemoryHistory();
history.push({
    pathname: '/video:/nmXMgqjQzls',
    state: {origin: 'home'}
});

const component = (
    <GlobalProvider>
        <AuthProvider>
            <Router history={history}>
                <Route path="/video/:id">
                <VideoDetail />
              </Route>
            </Router>
        </AuthProvider>
    </GlobalProvider>
)

beforeEach(() => render(component));

describe('VideoDetail page', () => {

    it('should render the video detail view', () => {
        // screen.debug();
        // const detailPage = screen.getByTestId('Video Detail');
        // expect(detailPage).toBeInTheDocument()
    })

})