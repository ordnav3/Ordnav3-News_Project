import styled, { createGlobalStyle } from 'styled-components';
import * as V from './variaveis';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    background-color: ${V.UtimateColor};
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  max-width: 960px;
    width: 100%;
    margin: 0 auto;
`;
