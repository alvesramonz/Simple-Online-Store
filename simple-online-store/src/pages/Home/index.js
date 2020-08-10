import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import api from '../../services/api';

import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

import * as CartAction from '../../store/modules/cart/actions';

function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((products) => ({
        ...products,
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  /**
   * Every component connected with redux have a prop "dispatch" [this.props.dispatch], serving
   * to discharge an action. Every "reducer" is activate at the same time.
   */
  function handleAddProduct(product) {
    dispatch(CartAction.addToCart(product));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt={product.title} />
          <strong>{product.title}</strong>
          <span>$ {product.price}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color={'#FFF'} />
              {/* {amount[product.id] || 0} */}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

export default connect()(Home);
