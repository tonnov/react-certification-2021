import React from 'react'
import { render } from  '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import GlobalProvider from '../../providers/Global'
import HomePage from './Home.page';

// jest.mock('../../utils/hooks/useVideos');

describe('Home Page', () => {

    beforeEach(() => {
        const component = (
            <GlobalProvider>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </GlobalProvider>
        );
        render(component);
    })

    it('should render videoList', async () => {
        //screen.debug()
    })

})