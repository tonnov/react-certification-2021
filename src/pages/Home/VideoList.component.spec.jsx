import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import VideoList from './VideoList.component';
import videos from '../../mock/youtube-videos-mock.json';

jest.mock('react-router-dom', () => {
  return {
    Link: jest.fn(({ children }) => <div role="link">{children}</div>),
  };
});

describe('VideoList component', () => {
  it('should match snapshot', () => {
    const snap = renderer.create(<VideoList videos={videos} />);

    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('should render a list of videos', () => {
    render(<VideoList videos={videos} />);

    const listItems = screen.getAllByRole('link');

    expect(listItems.length).toBeGreaterThan(0);
  });

  it('should match a list of 25 videos', () => {
    render(<VideoList videos={videos} />);

    const listItems = screen.getAllByRole('link');

    expect(listItems.length).toBe(25);
  });
});
