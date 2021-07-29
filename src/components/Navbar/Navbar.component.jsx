import React, { useState } from 'react';
import { IconButton, FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
// import { NavLink as Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {
  Nav,
  NavLeft,
  NavRight,
  UserAvatar,
  SideBar,
  SearchContainer,
  SearchInput,
  IconContainer,
} from './Navbar.Elements';

import './Navbar.styles.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [query, setQuery] = useState('wizeline');
  // const [themeMode, setThemeMode] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = () => {};

  return (
    <>
      <Nav>
        <NavLeft>
          {/* <MenuIcon style={{ color: 'white', cursor: 'pointer' }}  /> */}
          <IconButton color="inherit" aria-label="open drawer" onClick={showSidebar} >
            <MenuIcon />
          </IconButton>
          <SideBar className={sidebar ? 'sidebar active' : null} onClick={showSidebar}>
            <ul className="nav-menu-items">
              <li className="nav-text">
                <a href="/">Home</a>
              </li>
            </ul>
          </SideBar>
          {/* <SearchBar placeholder="Search..." value={query} /> */}
          <SearchContainer>
            <IconContainer>
              <SearchIcon />
            </IconContainer>
            <SearchInput placeholder="Search..." value={query} onChange={changeQuery} aria-label="search" />
          </SearchContainer>
        </NavLeft>
        <NavRight>
          <FormControlLabel
            control={ <Switch checked={false} name="toggleTheme" color="primary" onChange={handleChange} /> }
            label="Dark mode"
          />
          <IconButton color="inherit" >
            <UserAvatar />
          </IconButton>
        </NavRight>
      </Nav>
    </>
  );
}

export default Navbar;
