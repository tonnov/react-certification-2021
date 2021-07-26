import React from 'react';

import './Layout.styles.css';
import Navbar from '../Navbar/';

function Layout({ children }) {
  return <main className="container">
    <Navbar />
    {children}
    </main>;
}

export default Layout;
