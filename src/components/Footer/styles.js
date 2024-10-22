import styled from 'styled-components';

import * as V from '../../styles/variaveis';

export const FooterContainer = styled.footer`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${V.PrymaryColor};
  text-align: center;

  img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    cursor: pointer;
    margin: 32px 0;
  }

  p {
    color: ${V.UtimateColor};
  }
`;
