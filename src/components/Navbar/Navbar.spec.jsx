import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar.component';
import { SearchContext } from '../../providers/Search';
import { useDebounce } from '../../utils/hooks/useDebounce';

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


  it('Input should change should not be empty', () => {
    const searchBox = screen.getByRole('textbox');
    expect(searchBox.value).not.toBe('');
  });
  

  it('Input should change query value', () => {
    const searchBox = screen.getByRole('textbox');
    const preValue = searchBox.value;
    fireEvent.change(searchBox,{target: { value: `${preValue} Rocks!`}});

    // const spyChangeValue = jest.spyOn(Navbar,"changeLocalQuery");
    // jest.spyOn(Navbar, 'changeLocalQuery').mockImplementation((e) => {
    //   return e;
    // })
    // const spyChangeValue = jest.spyOn(navBar);
    
    expect(searchBox.value).toBe('wizeline Rocks!');
    // expect(spyChangeValue).toHaveBeenCalled();
  });

});
