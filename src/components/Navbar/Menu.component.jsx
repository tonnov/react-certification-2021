import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import Login from '../Login';
import { useAuth } from '../../providers/Auth';

const MenuLogin = ({ anchor, toggleMenu }) => {
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const [loginForm, setLoginForm] = useState(false);

  const showLogin = () => {
    toggleMenu(null);
    setLoginForm(!loginForm);
  };

  const { authenticated, logout } = useAuth();

  const handleClose = () => {
    toggleMenu(null);
  };

  const handleLogout = () => {
    logout();
    toggleMenu(null);
  };

  return (
    <>
      <Login show={loginForm} toggleShow={showLogin} />
      <StyledMenu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        {authenticated ? (
          <MenuItem onClick={handleLogout}>Log Out</MenuItem>
        ) : (
          <MenuItem onClick={showLogin}>Log In</MenuItem>
        )}
      </StyledMenu>
    </>
  );
};

export default MenuLogin;
