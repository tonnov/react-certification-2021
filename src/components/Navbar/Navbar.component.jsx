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
  UserAvatar,
  SearchContainer,
  SearchInput,
  IconContainer,
} from './Navbar.styled';
import FullSideBar from './Sidebar.component';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { useGlobal } from '../../providers/Global';
import MenuLogin from './Menu.component';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { state, dispatch } = useGlobal();
  const { query, darkTheme } = state;

  const [localQuery, setLocalQuery] = useState(query);

  const history = useHistory();

  const debounceValue = useDebounce(localQuery, 600);

  // console.log('Navbar rendered');

  useEffect(() => {
    if (!debounceValue) return;

    dispatch({ type: 'update_search_query', payload: debounceValue });
    history.push('/');

  }, [debounceValue, history, dispatch]);

  const showSidebar = () => setSidebar(!sidebar);

  const showMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const hideMenu = () => setAnchorEl(null);

  const changeLocalQuery = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleChangeTheme = () => {
    dispatch({ type: 'toggle_theme' });
  };

  const menuItems = [
    { route: '/', name: 'Home' },
    // { route: '/video/HYyRZiwBWc8', name: 'Video' }
  ];

  return (
    <>
      <MenuLogin anchor={anchorEl} toggleMenu={hideMenu} />
      <GlobalStyle dark={darkTheme} />
      <Nav dark={darkTheme}>
        <NavLeft>
          <IconButton color="inherit" aria-label="open drawer" onClick={showSidebar}>
            <MenuIcon />
          </IconButton>
          <FullSideBar
            dark={darkTheme}
            updateState={showSidebar}
            activeClass={sidebar ? 'sidebar-active' : null}
            menuItems={menuItems}
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
          
          <IconButton color="inherit" aria-label="user" onClick={showMenu} >
            <UserAvatar dark={darkTheme} />
          </IconButton>
        
        </NavRight>
      </Nav>
    </>
  );
}

export default Navbar;
