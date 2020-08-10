import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

import * as CartAction from '../../store/modules/cart/actions';

function Cart({ cart, total }) {
  const dispatch = useDispatch();

  function handleRemoveProduct(id) {
    dispatch(CartAction.removeFromCart(id));
  }

  function incrementProduct(product) {
    dispatch(CartAction.addToCart(product));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        {cart.map((product) => (
          <tr>
            <td>
              <img src={product.img} alt={product.title} />
            </td>
            <td>
              <strong>{product.title}</strong>
              <span>$ {product.price}</span>
            </td>
            <td>
              <div>
                <button
                  type="button"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdRemoveCircleOutline size={20} color="#000" />
                </button>
                <input type="number" readOnly value={product.amount} />
                <button type="button" onClick={() => incrementProduct(product)}>
                  <MdAddCircleOutline size={20} color="#000" />
                </button>
              </div>
            </td>
            <td>
              <strong>$ {product.subTotal.toFixed(2)}</strong>
            </td>
            <td>
              <button
                type="button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <MdDelete size={20} color="#000" />
              </button>
            </td>
          </tr>
        ))}
        <tbody></tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>$ {total.toFixed(2)}</strong>
        </Total>
      </footer>
    </Container>
  );
}

/**
 *
 * Inclusão de mais uma propriedade nos 'product' que é o subtota.
 */
const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: product.price * product.amount,
  })),

  /**
   * 'total' se torna um novo state advindo do 'cart', utiliza-se o reduce para que algo seja
   * reduzido a um único valor. É repassado um total a ser único e uma propriedade que será
   * somada (total, product), o total inicia com o valor em '0'
   */
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

export default connect(mapStateToProps)(Cart);
