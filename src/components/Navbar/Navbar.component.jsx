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
  SearchContainer,
  SearchInput,
  IconContainer,
} from './Navbar.Elements';
import FullSideBar from './Sidebar.styled';
import { useHistory } from "react-router-dom";
// import { useSearch } from '../../providers/Search';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { useGlobal } from '../../providers/Global';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  // const { query, setQuery } = useSearch();
  const {query, setQuery, darkTheme, setDarkTheme} = useGlobal();
  const [localQuery, setLocalQuery] = useState(query);
  // const [localTheme, setLocalTheme] = useState(darkTheme);
  
  const history = useHistory();

  const debounceValue = useDebounce(localQuery, 500);

  useEffect(() => {
    if (!debounceValue) return;

    setQuery(debounceValue);
    history && history.push('/');

  }, [debounceValue, setQuery, history]);

  const showSidebar = () => setSidebar(!sidebar);

  const changeLocalQuery = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleChangeTheme = (event) => {
    // setLocalTheme(event.target.checked);
    const swValue = event.target.checked;
    // console.log(swValue);
    setDarkTheme(swValue);
  };

  const menuItems = [
    { route: '/', name: 'Home' },
    { route: '/video/HYyRZiwBWc8', name: 'Video' }
  ];

  return (
    <>
      <Nav>
        <NavLeft>
          <IconButton color="inherit" aria-label="open drawer" onClick={showSidebar}>
            <MenuIcon />
          </IconButton>
          <FullSideBar updateState={showSidebar} activeClass={sidebar ? 'sidebar-active' : null} menuItems={menuItems} />
          <SearchContainer>
            <IconContainer>
              <SearchIcon />
            </IconContainer>
            <SearchInput
              placeholder="Search..."
              value={localQuery}
              onChange={changeLocalQuery}
              aria-label="search"
            />
          </SearchContainer>
        </NavLeft>
        <NavRight>
          <FormControlLabel
            control={
              <Switch
                checked={darkTheme}
                name="toggleTheme"
                color="primary"
                onChange={handleChangeTheme}
              />
            }
            label="Dark mode"
          />
          <IconButton color="inherit" aria-label="user">
            <UserAvatar />
          </IconButton>
        </NavRight>
      </Nav>
    </>
  );
}

export default Navbar;
