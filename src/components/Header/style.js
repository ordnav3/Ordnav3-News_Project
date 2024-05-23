import styled from 'styled-components';

import { Container } from '../../styles/GlobalStyles';

import * as V from '../../styles/variaveis';

export const HeaderStyled = styled.header`
  background-color: ${V.PrymaryColor};
  padding: 15px;
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImgS = styled.img`
  border-radius: 50%;
`;

export const InputS = styled.input`
  width: 70px;
  height: 20px;
  border: none;
  text-align: center;
`;

export const ButtonS = styled.button`
  padding: 0 5px;
  height: 20px;
  border: none;
`;
