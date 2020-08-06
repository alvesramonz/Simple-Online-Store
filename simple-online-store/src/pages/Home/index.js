import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';


function Home() {
  const [products, setProducts] = useState([]);

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

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt={product.title} />
          <strong>{product.title}</strong>
          <span>R$ 000,00</span>

          <button type="button" /*onClick={() => handleAddProduct(product.id)}*/>
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

export default Home;
