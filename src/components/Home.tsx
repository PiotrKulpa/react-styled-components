import React, {FC} from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({theme}) => theme.colors.grey};
`;

const Home: FC = () => {
  return (
    <div><Title>Home</Title></div>
  )
}

export default Home