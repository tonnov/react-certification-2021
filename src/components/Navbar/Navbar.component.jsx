import React, { useState } from 'react';

import { Nav, NavLeft, NavRight, UserAvatar, SideBar, SearchContainer, SearchInput, IconContainer } from './Navbar.Elements';
import Switch from '@material-ui/core/Switch';
import { NavLink as Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";

import './Navbar.styles.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [query, setQuery] = useState('wizeline');

  const showSidebar = () => setSidebar(!sidebar);

  const changeQuery = (e) => { setQuery(e.target.value) }

  const handleChange = () => { return }

    
  return (
    <>
      <Nav>
        <NavLeft>
        <MenuIcon style={{color: 'white', cursor: 'pointer'}} onClick={showSidebar} />
        <SideBar className={ sidebar ? 'sidebar active' : null } onClick={showSidebar} >
          <ul className='nav-menu-items'>
            <li className='nav-text'>
              <Link to='/'>
                Home
              </Link>
            </li>
          </ul>
        </SideBar>
        {/* <SearchBar placeholder="Search..." value={query} /> */}
        <SearchContainer>
            <IconContainer>
                <SearchIcon />
            </IconContainer>
            <SearchInput placeholder={'Search...'} value={query} onChange={changeQuery} />
        </SearchContainer>
        </NavLeft>
        <NavRight>
          <Switch
            // checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="toggleTheme"
            inputProps={{ 'aria-label': 'Toggle Theme' }}
          />
          {'Dark Mode'}&nbsp;
          <UserAvatar />
        </NavRight>
      </Nav>
    </>
  );
}

export default Navbar;

