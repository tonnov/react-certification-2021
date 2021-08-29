import React from 'react';
import { Main } from './Layout.styled';

function Layout({ children }) {
  return <Main>{children}</Main>;
}

export default Layout;
