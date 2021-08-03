import React, { useState, useEffect } from 'react';
import { IconButton, FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
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

import { useSearch } from '../../providers/Search/';
import { useDebounce } from '../../utils/hooks/useDebounce';


function Navbar() {
  
  const [sidebar, setSidebar] = useState(false);
  const { query, setQuery } = useSearch();
  const [localQuery, setLocalQuery] = useState(query);

  const debounceValue = useDebounce(localQuery, 500);

  useEffect(() => {
    if(!debounceValue) return;
    
    setQuery(debounceValue);
  }, [debounceValue, setQuery])
  
  // const [themeMode, setThemeMode] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const changeLocalQuery = (e) => {
    setLocalQuery(e.target.value);
  };


  const handleChangeTheme = () => {};

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
          <SearchContainer>
            <IconContainer>
              <SearchIcon />
            </IconContainer>
            <SearchInput placeholder="Search..." value={localQuery} onChange={changeLocalQuery} aria-label="search" />
          </SearchContainer>
        </NavLeft>
        <NavRight>
          <FormControlLabel
            control={ <Switch checked={false} name="toggleTheme" color="primary" onChange={handleChangeTheme} /> }
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
