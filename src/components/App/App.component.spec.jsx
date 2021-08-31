import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from './App.component';

jest.mock('@material-ui/core/Menu', () => () => {
  return (
    <div>
      <input data-testid="mock-component" />
    </div>
  );
});

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should match snapshot', () => {
    const snap = renderer.create(<App />);

    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('should render a navigation bar', async () => {
    const navBar = screen.getByRole('navigation', {
      name: 'NavBar',
    });
    expect(navBar).toBeInTheDocument();
  });

  it('Initially should render the home page', async () => {
    const home = screen.getByTestId('Home');
    expect(home).toBeInTheDocument();
  });
});
