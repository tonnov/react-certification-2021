import React from 'react';
import { Main } from './Layout.styled';

// import './Layout.styles.css';

function Layout({ children }) {
  return <Main>{children}</Main>;
}

export default Layout;
