import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar.component';
import { GlobalContext } from '../../providers/Global';

const RenderNavWithSearchProvider = (snap) => {
  const isSnap = snap || false;

  const state = { query: 'wizeline', darkTheme: false };
  const dispatch = jest.fn();

  const component = (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </GlobalContext.Provider>
  );

  if (isSnap) {
    return renderer.create(component);
  }

  return render(component);
};

beforeEach(() => RenderNavWithSearchProvider());

describe('Navbar Component', () => {
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

describe('Navbar User Interaction', () => {
  it('Input should change should not be empty', () => {
    const searchBox = screen.getByRole('textbox', { name: 'search' });
    expect(searchBox.value).not.toBe('');
  });

  it('Input should change query value', () => {
    const searchBox = screen.getByRole('textbox', { name: 'search' });
    const preValue = searchBox.value;
    fireEvent.change(searchBox, { target: { value: `${preValue} Rocks!` } });
    expect(searchBox.value).toBe('wizeline Rocks!');
  });

  it('check if sidebar shows on click', () => {
    const openMenu = screen.getByRole('button', { name: 'open drawer' });
    fireEvent.click(openMenu);
    const sideBar = screen.getByLabelText('sidebar');
    expect(sideBar).toHaveClass('sidebar-active');
  });
});
