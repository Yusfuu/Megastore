import { useReducer, createContext, FC } from "react";
// import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

interface Cart {
  showCart: boolean;
  cartItems: Array<any>;
}

const initalState = {
  showCart: false,
  cartItems: [],
};

const CartContext = createContext<Cart>(initalState);

export const CartState: FC = ({ children }) => {
  // const initalState = {
  //   showCart: false,
  //   cartItems: [],
  // };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  // const addToCart = (item: any) => {
  //   dispatch({ type: ADD_TO_CART, payload: item });
  // };

  // const showHideCart = () => {
  //   dispatch({ type: SHOW_HIDE_CART });
  // };

  // const removeItem = (id) => {
  //   dispatch({ type: REMOVE_ITEM, payload: id });
  // };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        // addToCart,
        // showHideCart,
        // removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// export default CartState;
export default CartContext;
