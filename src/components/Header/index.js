import React from 'react';

import {
  HeaderStyled, ContainerHeader,
  ImgS,
} from './style';

export default function Header() {
  const img = 'https://live.staticflickr.com/5091/5389831279_627a7bd649_b.jpg';

  return (
    <HeaderStyled>
      <ContainerHeader>
        <ImgS src={img} alt="Imagem lorem" />
      </ContainerHeader>
    </HeaderStyled>

  );
}
