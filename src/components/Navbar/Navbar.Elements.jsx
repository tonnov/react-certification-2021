import React from 'react';
import styled from 'styled-components';

import PersonIcon from '@material-ui/icons/Person';

export const Nav = styled.nav`
  /* background-color: #fff; */
  background-color: #1c5476;
  color: #fafafa;
  height: 64px;
  width: 100%;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 600px) {
    height: 56px;
  }
`;

export const NavLeft = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  @media screen and (max-width: 600px) {
    /* margin-left: 15px; */
    margin-right: 15px;
    flex: 100%;
  }
`;

export const NavRight = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Input = styled.input`
  margin-left: 40px;
  height: 60%;
  font-size: 12pt;
  width: 200px;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0 15px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 240px;
  height: 60%;
  margin-left: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  display: flex;
  align-items: center;

  padding-left: 5px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  @media screen and (max-width: 600px) {
    /* margin-left: 30px; */
    height: 65%;
    width: 78%;
  }
`;

export const SearchInput = styled.input`
  flex: 90%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 11pt;
  padding-left: 6px;

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const IconContainer = styled.span`
  flex: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

// export const SearchBar = (props) => {
//     return (
//         <SearchContainer>
//             <IconContainer>
//                 <SearchIcon />
//             </IconContainer>
//             <SearchInput placeholder={props.placeholder} value={props.value} />
//         </SearchContainer>
//     )
// }

const UserBackground = styled.span`
  padding: 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
`;

export const UserAvatar = () => {
  return (
    <UserBackground>
      <PersonIcon style={{ fontSize: 27 }} />
    </UserBackground>
  );
};

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: none;
  /* align-items: baseline; */

  &.sidebar-active {
    display: flex;
    transition: 650ms;
  }
`;

export const SideBar = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: -100%;
  transition: 850ms;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  z-index: 1050;

  &.sidebar-active {
    left: 0;
    transition: 650ms;
  }
`;


export const LinkList = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;
`;

const LinkItem = styled.li`
  margin: 0;
  padding: 0;
  height: 50px;

  display: flex;
  justify-content: center;
`;

const LinkNav = styled.a`
  text-decoration: none;
  color: rgb(73, 73, 73);
  font-size: 16px;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }
`;


export const LinkItemNav = ({ item }) => {
  return (
    <LinkItem>
      <LinkNav href={item.route}>{item.name}</LinkNav>
    </LinkItem>
  );
};
