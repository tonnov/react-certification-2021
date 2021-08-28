import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import Login from '../Login';
import { useAuth } from '../../providers/Auth';

const userContainer = styled.div`
  background-color: red;
  font-size: 10pt !important;
`;

const MenuLogin = ({ anchor, toggleMenu, userName }) => {
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
          <userContainer>
            <ListItemIcon>
              <PersonIcon />
              <ListItemText fontSize="small" primary={userName} />
            </ListItemIcon>
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </userContainer>
        ) : (
          <MenuItem onClick={showLogin}>Log In</MenuItem>
        )}
      </StyledMenu>
    </>
  );
};

export default MenuLogin;
