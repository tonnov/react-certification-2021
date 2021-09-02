import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AuthProvider from '../../providers/Auth';
import GlobalProvider from '../../providers/Global';
import Private from './Private.component';
import FavoritePage from '../../pages/Favorite';
import HomePage from '../../pages/Home';

// jest.mock('../../providers/Auth');

const history = createMemoryHistory();
history.push('/favorites');

const component = (
  <GlobalProvider>
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Private>
            <FavoritePage exact path="/favorites" />
          </Private>
        </Switch>
      </Router>
    </AuthProvider>
  </GlobalProvider>
);

beforeEach(() => render(component));

describe('Private component', () => {
  it('should redirect to Home', () => {
    const homepage = screen.getByTestId('Home');
    expect(homepage).toBeInTheDocument();
  });
});
