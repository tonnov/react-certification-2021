import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { VideoMain } from './VideoMain.component';
import infoVideo from '../../mock/single-video.json';

describe('VideoMain component', () => {
  const embedId = 'T_j60n1zgu0';
  const [selVideo] = infoVideo.items;

  beforeEach(() => {
    render(<VideoMain embedId={embedId} video={selVideo} />);
  });

  it('should match snapshot', () => {
    const snap = renderer.create(<VideoMain embedId={embedId} video={selVideo} />);
    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('should render an iframe element', () => {
    const iframe = screen.getByTestId('iframe');
    expect(iframe).toBeInTheDocument();
  });

  // const component = render(<VideoMain embedId={embedId} video={selVideo} />);

  // component.debug();
});
