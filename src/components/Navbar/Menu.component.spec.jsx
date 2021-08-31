import React from 'react'
import { render, screen } from  '@testing-library/react';
import GlobalProvider from '../../providers/Global'
import AuthProvider from '../../providers/Auth'
import MenuLogin from '../Navbar/Menu.component';

const component = (
    <GlobalProvider>
        <AuthProvider>
            <MenuLogin userName={'Usuario'} />
        </AuthProvider>
    </GlobalProvider>
);

beforeEach(() => render(component) );

describe('Menu component', () => {

    // it('should match snapshot', () => {
    //     const snap = renderer.create(component);
    //     expect(snap.toJSON()).toMatchSnapshot();
    //   });

    it('should render Log In menu item', () => {
        const LogInMenuItem = screen.getByLabelText('Log In');
        expect(LogInMenuItem).toBeInTheDocument();
    });

})