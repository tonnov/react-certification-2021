import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('should match snapshot', () => {
    const snap = renderer.create(<Navbar />);

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
