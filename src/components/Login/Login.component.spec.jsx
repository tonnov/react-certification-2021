import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalProvider from '../../providers/Global';
import AuthProvider from '../../providers/Auth';
import Login from './Login.component';

const component = (
  <GlobalProvider>
    <AuthProvider>
      <Login show />
    </AuthProvider>
  </GlobalProvider>
);

beforeEach(() => render(component));


describe('Login component', () => {
  it('Login Form should render username textbox', () => {
    const inputUserName = screen.getByRole('textbox');
    expect(inputUserName).toBeInTheDocument();
  });

  it('Login Form should render username textbox', () => {
    const inputUserPassword = screen.getByLabelText('password');
    expect(inputUserPassword).toBeInTheDocument();
  });

  it('Login Form should render button for login', () => {
    const buttonLogin = screen.getByRole('button', { name: 'Login' });
    expect(buttonLogin).toBeInTheDocument();
  });

  it('Login Form should render button for cancel (reset form and close modal)', () => {
    const buttonCancel = screen.getByRole('button', { name: 'Cancel' });
    expect(buttonCancel).toBeInTheDocument();
  });
});
