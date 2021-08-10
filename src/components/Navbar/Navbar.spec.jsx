import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';
import { SearchContext } from '../../providers/Search';

const RenderNavWithSearchProvider = (snap) => {
  const query = 'wizeline';
  const setQuery = jest.fn();
  const isSnap = snap || false;

  const component = (
    <SearchContext.Provider value={{ query, setQuery }}>
      <Navbar />
    </SearchContext.Provider>
  );

  if (isSnap) {
    return renderer.create(component);
  }

  return render(component);
};

describe('Navbar Component', () => {
  beforeEach(() => {
    RenderNavWithSearchProvider();
  });

  it('should match snapshot', () => {
    // const snap = renderer.create(<Navbar />);
    const snap = RenderNavWithSearchProvider(true);

    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('Should render a menu bar', () => {
    const menuBars = screen.getByRole('button', {
      name: 'open drawer',
    });

    expect(menuBars).toBeInTheDocument();
  });

  it('should render a search input', () => {
    const searchBox = screen.getByRole('textbox', {
      name: 'search',
    });

    expect(searchBox).toBeInTheDocument();
  });

  it('should render a checkbox for theme switch', () => {
    const component = screen.getByRole('checkbox', {
      name: 'Dark mode',
    });

    expect(component).toBeInTheDocument();
  });
});
