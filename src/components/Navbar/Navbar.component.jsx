import React, { useState, useEffect } from 'react';
import { IconButton, FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import {
  GlobalStyle,
  Nav,
  NavLeft,
  NavRight,
  NavSwitch,
  UserAvatar,
  SearchContainer,
  SearchInput,
  IconContainer,
  AuthAvatar,
} from './Navbar.styled';
import FullSideBar from './Sidebar.component';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { useGlobal } from '../../providers/Global';
import MenuLogin from './Menu.component';
import { useAuth } from '../../providers/Auth';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { authenticated } = useAuth();
  const { state, dispatch } = useGlobal();
  const { query, darkTheme, sessionData } = state;

  const [localQuery, setLocalQuery] = useState(query);

  const history = useHistory();

  const debounceValue = useDebounce(localQuery, 500);

  useEffect(() => {
    if (!debounceValue) return;

    dispatch({ type: 'update_search_query', payload: debounceValue });
    history.push('/');
  }, [debounceValue, history, dispatch]);

  const showSidebar = () => setSidebar(!sidebar);

  const showMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const hideMenu = () => setAnchorEl(null);

  const changeLocalQuery = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleChangeTheme = () => {
    dispatch({ type: 'toggle_theme' });
  };

  const menuItems = [
    { route: '/', name: 'Home' },
  ];

  if (authenticated) {
    menuItems.push({ route: '/favorites', name: 'Favorites' });
  }

  return (
    <>
      <GlobalStyle dark={darkTheme} />
      <Nav dark={darkTheme}>
        <MenuLogin anchor={anchorEl} toggleMenu={hideMenu} userName={sessionData?.name} />
        <NavLeft>
          <IconButton color="inherit" aria-label="open drawer" onClick={showSidebar}>
            <MenuIcon />
          </IconButton>
          <FullSideBar
            dark={darkTheme}
            updateState={showSidebar}
            activeClass={sidebar ? 'sidebar-active' : null}
            menuItems={menuItems}
            updateTheme={handleChangeTheme}
          />
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
          <NavSwitch>
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
          </NavSwitch>
          <IconButton color="inherit" aria-label="user" onClick={showMenu}>
            {authenticated ? (
              <AuthAvatar url={sessionData?.avatarUrl} />
            ) : (
              <UserAvatar dark={darkTheme} />
            )}
          </IconButton>
        </NavRight>
      </Nav>
    </>
  );
}

export default Navbar;
