import styled from 'styled-components';
import {LayoutWrapperStyledProps} from './types';

export const LayoutWrapperStyled = styled.div<LayoutWrapperStyledProps>`
  overflow-x: hidden;
  overflow-y: ${({isHome}) => isHome ? 'hidden' : 'auto'};
`;