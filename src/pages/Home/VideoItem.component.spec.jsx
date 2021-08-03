import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import VideoItem from './VideoItem.component';
import videos from '../../mock/youtube-videos-mock.json';


// test('render VideoItem', () => {
    
//     const component = render(<VideoItem item={item} />)

//     component.getByRole('img');

// })

describe('Video Item Component', () => {

    const item = videos.items[0];

    beforeEach(() => {
        render(<VideoItem item={item} />);
    })

    it('should match snapshot', () => {
        const snap = renderer.create(<VideoItem item={item} />);

        expect(snap.toJSON()).toMatchSnapshot();
    })
    
    it('should render an link', () => {
        // const component = render(<VideoItem item={item} />);

        const link = screen.getByRole('link');

        expect(link).toBeInTheDocument();
    });

    it('should render an image', () => {
        // const component = render(<VideoItem item={item} />);

        const img = screen.getByRole('img');

        expect(img).toBeInTheDocument();
    });

});