import styled from 'styled-components';

export const Home = styled.section`
  /* margin: 5px; */
  padding: 10px;
  background-color: ${props => props.dark ? '#3b3b3b' : '#fff'};
  color: ${props => props.dark ? '#f2f2f2' : '#3d3d3d'};
`;

export const HomeTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  letter-spacing: 0.15rem;
`;
