import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export const useCartContext = () => useContext (CartContext);
const CartContextProvider = ({children}) => {
    const [sumaCantidad, setSumaCantidad] = useState(0)
    const [cartList, setCartList] = useState([]);
    
    const addToCartList = itemAdded => {
        setSumaCantidad(sumaCantidad + itemAdded.qty);
        const findItem = cartList.find(itemInCart => itemInCart.charla.id === itemAdded.charla.id)

        if (findItem) {
            findItem.qty = findItem.qty + itemAdded.qty
            setCartList(cartList)
        } 
        else {
            setCartList(previousItems => [...previousItems, itemAdded])
        }
    }
    
    const precioTotal = () => {
        let total = 0;
        cartList.forEach(item => {
            total = total + (item.charla.price * item.qty)
        })
        return total
    }


    const removeItem = idItemToRemove => {
        const itemToRemove = cartList.find(itemInCart => itemInCart.charla.id === idItemToRemove)
        setSumaCantidad(sumaCantidad - itemToRemove.qty)
        setCartList(cartList.filter(itemSearched => itemSearched.charla.id !== idItemToRemove))
    }
    const removeCart = () => {
        setSumaCantidad(0)
        setCartList([])
        
    }
    return (
        <CartContext.Provider value={{cartList, addToCartList, removeItem, removeCart, precioTotal, sumaCantidad}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
