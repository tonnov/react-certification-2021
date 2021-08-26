import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

const LinkList = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 8px;
  list-style-type: none;
`;

const LinkItem = styled.li`
  margin: 0;
  padding: 0;
  height: 50px;

  display: flex;
  justify-content: center;
`;

const LinkNav = styled(Link)`
  text-decoration: none;
  /* color: rgb(73, 73, 73); */
  color: inherit;
  font-size: 16px;
  width: 100%;
  height: 100%;
  padding: 18px;
  display: flex;
  align-items: center;

  :hover {
    background-color: #d9d8d8;
  }
`;

const LinkItemNav = ({ item }) => {
  return (
    <LinkItem>
      <LinkNav to={item.route}>{item.name}</LinkNav>
    </LinkItem>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  /* display: none; */
  visibility: hidden;
  opacity: 0;
  /* align-items: baseline; */

  &.sidebar-active {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 0.2s linear;
  }
`;

const SideBar = styled.nav`
  width: 250px;
  height: 100vh;
  top: 0;
  left: -100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
  /* background: #fff; */
  background-color: ${(props) => (props.dark ? '#4d4d4d' : '#fff')};
  color: ${(props) => (props.dark ? '#f2f2f2' : '#4d4d4d')};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  z-index: 1050;

  &.sidebar-active {
    transition: 0.5s;
    left: 0;
  }
`;

const FullSideBar = ({ activeClass, updateState, menuItems, dark }) => {
  const handleOnClick = () => {
    updateState();
  };

  return (
    <ModalWrapper className={activeClass}>
      <SideBar className={activeClass} role="menu" aria-label="sidebar" dark={dark}>
        <IconButton onClick={handleOnClick}>
          <CloseIcon style={{ color: 'inherit', fontSize: 30 }} />
        </IconButton>
        <LinkList onClick={handleOnClick}>
          {menuItems &&
            menuItems.map((item) => <LinkItemNav key={item.name} item={item} />)}
        </LinkList>
      </SideBar>
    </ModalWrapper>
  );
};

export default FullSideBar;
