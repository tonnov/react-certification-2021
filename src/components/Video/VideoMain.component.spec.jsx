import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { VideoMain } from './VideoMain.component';
import infoVideo from '../../mock/single-video.json';
import GlobalProvider from '../../providers/Global'

describe('VideoMain component', () => {
  const embedId = 'T_j60n1zgu0';
  const [selVideo] = infoVideo.items;

  beforeEach(() => {
    render(
      <GlobalProvider>
        <VideoMain embedId={embedId} video={selVideo} />
      </GlobalProvider>
    );
  });

  it('should match snapshot', () => {
    const snap = renderer.create(<GlobalProvider><VideoMain embedId={embedId} video={selVideo} /></GlobalProvider>);
    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('should render an iframe element', () => {
    const iframe = screen.getByTestId('iframe');
    expect(iframe).toBeInTheDocument();
  });

  // const component = render(<VideoMain embedId={embedId} video={selVideo} />);

  // component.debug();
});
