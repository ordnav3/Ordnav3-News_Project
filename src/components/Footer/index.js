import React from 'react';

import { FooterContainer } from './styles';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <img src="https://live.staticflickr.com/5091/5389831279_627a7bd649_b.jpg" alt="lo<p>© 2024 Editora Omnis Scientia - Todos os direitos reservados.</p>go" />
      <p>
        &copy;
        {currentYear}
        {' '}
        Todos os direitos reservados.
      </p>

    </FooterContainer>
  );
}
