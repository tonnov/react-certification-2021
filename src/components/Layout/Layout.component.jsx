import React from 'react';
import { Main } from './Layout.styled';

function Layout({ children }) {
  return <Main data-testid="MainContainer">{children}</Main>;
}

export default Layout;
