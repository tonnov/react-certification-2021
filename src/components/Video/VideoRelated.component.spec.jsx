import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import VideoRelated from './VideoRelated.component';
import infoVideo from '../../mock/single-video.json';


jest.mock('react-router-dom', () => {
    return {
      Link: jest.fn(({ children }) => <div role="link">{children}</div>),
    };
});

describe('VideoRelated component', () => {
    
    const [vid] = infoVideo.items;

    // const component = render(<VideoRelated video={vid} />);
    // component.debug();

    beforeEach(() => {
        render(<VideoRelated video={vid} />);
    })


    it('should match snapshot', () => {
        const snap = renderer.create(<VideoRelated video={vid} />)
        expect(snap.toJSON()).toMatchSnapshot();
    })

    it('Should render a link', () => {
        // render(<VideoRelated video={vid} />);
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    })

    it('Should render an img', () => {
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
    })

    it('Should render a title (note)', () => {
        const note = screen.getByRole('note');
        expect(note).toBeInTheDocument();
    })


})