import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logoNba from '../../assets/logoNba.png';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logoNba} alt="Logo da Nba" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span> 0 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#17408b" />
      </Cart>
    </Container>
  )
}

export default Header;
