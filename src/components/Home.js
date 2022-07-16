import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({theme}) => theme.grey};
`;

const Home = () => {
  return (
    <div><Title>Home</Title></div>
  )
}

export default Home