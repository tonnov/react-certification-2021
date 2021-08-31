import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AuthProvider from '../../providers/Auth';
import GlobalProvider from '../../providers/Global';
import NotFound from '../../pages/NotFound'

// jest.mock('../../providers/Auth');

const history = createMemoryHistory();
history.push('/fake');

const component = (
    <GlobalProvider>
        <AuthProvider>
            <Router history={history}>
                <Route path="*">
                    <NotFound />
                </Route>
            </Router>
        </AuthProvider>
    </GlobalProvider>
)

beforeEach(() => render(component));



describe('Not Found page', () => {


    it('should redirect to Not Found', () => {
        const homepage = screen.getByTestId('Not Found');
        expect(homepage).toBeInTheDocument()
    })

})