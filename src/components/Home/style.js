import styled from 'styled-components';

import { Container } from '../../styles/GlobalStyles';

export const ContainerHome = styled(Container)`
  margin-top: 64px;
`;

export const ContainerNews = styled(Container)`
  margin: 32px 0;

  h2{
    margin-bottom: 16px;
  }

  p{
    line-height: 24px;
  }

  div{
    display: flex;

    img{
      width: 300px;
      margin-right: 16px;
    }
  }
`;
