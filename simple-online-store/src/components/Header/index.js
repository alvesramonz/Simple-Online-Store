import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logoNba from '../../assets/logoNba.png';

function Header({ cart }) {
  return (
    <Container>
      <Link to="/">
        <img src={logoNba} alt="Logo da Nba" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cart.length} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#17408b" />
      </Cart>
    </Container>
  );
}

/**
 * State é o estado dos reducers e abrindo o ({}) é possível acessar cada um
 */
export default connect((state) => ({
  cart: state.cart,
}))(Header);
