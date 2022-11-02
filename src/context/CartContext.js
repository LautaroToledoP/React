import { useEffect, useState, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)


    useEffect(() => {
        const totalQ = getQuantity()
        setTotalQuantity(totalQ)
    }, [cart] )


    const addItem = (productAdd) => {
      if(!isInCart(productAdd.id)) {
      setCart([...cart, productAdd])
      } else {
        console.log("Ya esta en el carrito")
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
    const removeItem = (id) => {
        const CartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(CartWithoutProduct)
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

