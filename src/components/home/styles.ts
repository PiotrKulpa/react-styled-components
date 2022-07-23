import styled from 'styled-components';
import { SliderWrapperProps } from './types';

export const SliderPattern = styled.div`
position: absolute;
  height: 100vh;
  width: 100vw;
  background-image:  url('pattern.png');
`;

export const SliderWrapper = styled.div<SliderWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image:  url(${props => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.white};

  h2 {
    font-weight: 700;
    font-size: 5em;
    letter-spacing: -0.05em;
    margin: 0px;
    text-transform: uppercase;
    line-height: 1.05em;
    color: ${({theme}) => theme.colors.white};
  }
`;