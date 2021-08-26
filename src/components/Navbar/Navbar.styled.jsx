import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.dark ? '#3b3b3b' : '#fff')};
    color: ${(props) => (props.dark ? '#f2f2f2' : '#3d3d3d')};
  }
`;

export const Nav = styled.nav`
  background-color: ${(props) => (props.dark ? '#556CD6' : '#1c5476')};
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
  @media screen and (max-width: 600px) {
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

  &:hover {
    transition: all 0.2s ease;
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

const UserBackground = styled.span`
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.dark ? 'rgba(168, 168, 168, 0.7)' : 'rgba(255, 255, 255, 0.5)'};
  display: flex;
  align-items: center;
`;

const Icon = styled(PersonIcon)`
  font-size: 27px !important;
  color: ${(props) => (props.dark ? '#4f4f4f' : '#fff')};
`;

export const UserAvatar = ({ dark }) => {
  return (
    <UserBackground dark={dark}>
      <Icon dark={dark ? 1 : 0} />
    </UserBackground>
  );
};

const AuthContainer = styled.span`
  width: 43px;
  height: 43px;
  padding: 2px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.dark ? 'rgba(168, 168, 168, 0.7)' : 'rgba(255, 255, 255, 0.5)'};
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 100%;
  border-radius: 50%;
`;

export const AuthAvatar = ({url}) => {
  return (
    <AuthContainer>
      <Avatar src={url} />
    </AuthContainer>
  )
}