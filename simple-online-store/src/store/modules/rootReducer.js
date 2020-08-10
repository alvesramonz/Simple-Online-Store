import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
  cart,
});

/**
 * Responsável por juntar todos os Reducers do projeto, "combineReducers"
 */
