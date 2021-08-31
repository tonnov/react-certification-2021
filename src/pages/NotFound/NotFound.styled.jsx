import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.dark ? 'rgba(235, 235, 235, 0.9)' : 'rgba(54, 54, 54, 0.9)')};
  font-size: 1rem;
  display: block;
  text-align: right;
  padding: 0.2rem 0.3rem;

  ::before {
    content: '←';
    padding-right: 0.2rem;
    display: inline-block;
  }
`;

export const Error = styled.h1`
  font-size: 40pt;
  font-weight: bolder;
  text-align: center;
  color: ${(props) => (props.dark ? 'rgba(235, 235, 235, 0.65)' : 'rgba(54, 54, 54, 0.65)')};
`;
export const ErrorTitle = styled.h2`
  font-size: 30pt;
  font-weight: bolder;
  text-align: center;
  color: ${(props) => (props.dark ? 'rgba(235, 235, 235, 0.65)' : 'rgba(54, 54, 54, 0.65)')};
`;


// .home-link::before {
//   content: '←';
//   padding-right: 0.2rem;
//   display: inline-block;
// }
