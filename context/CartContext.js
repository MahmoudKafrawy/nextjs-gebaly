import { createContext, useEffect, useReducer } from "react";
import CartReducer from "./CartReducer";

// const INITIAL_STATE = {
//   currentUser: JSON.parse(localStorage.getItem("user")) || null,
// };

const INITIAL_STATE = [];

export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.currentUser));
  // }, [state.currentUser]);

  return <CartContext.Provider value={{ cart: state, dispatch }}>{children}</CartContext.Provider>;
};
