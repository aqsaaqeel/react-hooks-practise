import {useContext, createContext, useState} from "react"

const CartProvider = ({children}) =>{
  const[items, setItems] = useState(4);
  const addingToCart = () =>{
    setItems(items => items + 1)
  }
  return(
  <CartContext.Provider value = {{items, addingToCart}}>
      {children}
  </CartContext.Provider>
  );
}
const CartContext = createContext();
const useCart = () => useContext(CartContext)
export {useCart, CartProvider}
