import { produce } from 'immer';

/**
 * Por padrão o reducer tem um (state, action)
 */
export default function cart(state = [], action) {
  /**
   * Switch é a garantia da chamada de uma única action
   */
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        /**
         * Index do produto, para caso o achar. Basicamente o mapeamento atrás do 'product.id'
         */
        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        /**
         * If: Caso já exista no 'index' o id do produto no carrinho, então apenas "atualize" o seu
         * amount, somando '+ 1'
         *
         * Else: Caso não exista, então certamente essa é a primeira inserção, logo setta 'amount'
         * e repassa o valor  de '1'
         */
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        /**
         * Corte(slcie) o draft, que no caso é um array na posição que o encontrar, ou seja,
         * corte ele mesmo, entretando nesse caso cortará todos os repetidos.
         *
         * If: Caso já exista no 'index' o id do produto no carrinho, então apenas "atualize" o seu
         * amount, subtraindo em '1'
         *
         * Else: Caso não exista, então certamente essa é a última possível remoção, logo setta
         * 'amount' com '0' findando na exclusão
         */
        if (productIndex >= 0) {
          if (draft[productIndex].amount > 1) {
            draft[productIndex].amount -= 1;
          } else {
            draft.splice(productIndex, 1);
          }
        }
      });

    default:
      return state;
  }
}
