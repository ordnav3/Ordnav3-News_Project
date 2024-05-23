/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import {
  Dropdown, NavItem, NavLink, InputGroup,
} from 'react-bootstrap';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaSearch } from 'react-icons/fa';

import { IconContext } from 'react-icons';
import {
  HeaderStyled, ContainerHeader, InputS, ButtonS,
  ImgS,
} from './style';

export default function Header() {
  const img = 'https://picsum.photos/50';
  return (
    <HeaderStyled>
      <ContainerHeader>

        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>

            <IconContext.Provider
              // eslint-disable-next-line react/jsx-no-constructed-context-values
              value={{ color: '#EBF2FA', size: '35px' }}
            >
              <RxHamburgerMenu />
            </IconContext.Provider>

          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Hello there!</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ImgS src={img} alt="Imagem lorem" />

        <InputGroup>
          <InputS />
          <ButtonS>
            <FaSearch />
          </ButtonS>
        </InputGroup>

      </ContainerHeader>
    </HeaderStyled>

  );
}
