import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import Layout from './Layout.component';
import { createMemoryHistory } from 'history';
import GlobalProvider from '../../providers/Global';
import AuthProvider from '../../providers/Auth';


const history = createMemoryHistory();
history.push('/'); //Go Home

const component = (
    <GlobalProvider>
        <AuthProvider>
            <Router history={history}>
                <Layout />
            </Router>
        </AuthProvider>
    </GlobalProvider>
)

beforeEach(() => render(component));

describe('Layout component', () => {

    it('should render layout', () => {
        expect(screen.getByTestId('MainContainer')).toBeInTheDocument();
    })
})