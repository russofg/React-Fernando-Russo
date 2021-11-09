import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext (CartContext);

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCartList = itemAdded => {
        const findItem = cartList.find(itemInCart => itemInCart.charla.id === itemAdded.charla.id)
        if (findItem) {
            findItem.qty = findItem.qty + itemAdded.qty
            setCartList(cartList)
        }
        else {
            setCartList(previousItems => [...previousItems, itemAdded])
        }
    }

    const removeItem = idItemToRemove => {
        setCartList(
            cartList.filter(itemSearched => itemSearched.charla.id !== idItemToRemove)
        )
    }

    const removeCart = () => {
        setCartList([])
    }


    return (
        <CartContext.Provider value={{cartList, addToCartList, removeItem, removeCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;