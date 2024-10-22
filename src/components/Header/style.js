import styled from 'styled-components';

import { Container } from '../../styles/GlobalStyles';

import * as V from '../../styles/variaveis';

export const HeaderStyled = styled.header`
  background-color: ${V.PrymaryColor};
  padding: 15px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

export const ImgS = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  cursor: pointer;
`;
