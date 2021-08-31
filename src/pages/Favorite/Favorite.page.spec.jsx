import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from '../../providers/Global';
import FavoritePage from './Favorite.page';

describe('Home Page', () => {
  beforeEach(() => {
    const component = (
      <GlobalProvider>
        <BrowserRouter>
          <FavoritePage />
        </BrowserRouter>
      </GlobalProvider>
    );
    render(component);
  });

  it('should render Favorites videoList', () => {
    // screen.debug()
  });
});
