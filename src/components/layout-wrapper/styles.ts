import styled from 'styled-components';
import {LayoutWrapperStyledProps} from './types';

export const LayoutWrapperStyled = styled.div<LayoutWrapperStyledProps>`
  overflow: ${({isHome}) => isHome ? 'hidden' : 'visible'};
`;