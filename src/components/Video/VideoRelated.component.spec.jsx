import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { VideoRelated } from './VideoRelated.component';
import infoVideo from '../../mock/single-video.json';

describe('VideoRelated component', () => {

  const [vid] = infoVideo.items;

  // const component = render(
  //   <BrowserRouter>
  //     <VideoRelated video={vid} />
  //   </BrowserRouter>
  //     );
  // component.debug();

  const component = (
    <BrowserRouter>
      <VideoRelated video={vid} />
    </BrowserRouter>
  );

  beforeEach(() => {
    render(component);
  });

  it('should match snapshot', () => {
    const snap = renderer.create(component);
    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('Should render a link', () => {
    // render(<VideoRelated video={vid} />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('Should render an img', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('Should render a title (note)', () => {
    const note = screen.getByRole('note');
    expect(note).toBeInTheDocument();
  });
});
