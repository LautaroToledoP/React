import React from "react"
import { CartContext }from '../../context/CartContext'
import { useContext } from "react"
import { Link } from 'react-router-dom'

const Cart = () => {
const  { cart, removeItem, total, clearCart } = useContext(CartContext)

console.log(cart, 'info del carrito') 
    

return(
    
   <div>
    <h1>Cart</h1>
    {
        cart.map(prod => (
            <div>
                {prod.name} - cantidad: {prod.quantity}
                <button onClick={() => removeItem(prod.id)}>borrar</button>
            </div>
        ))
        
    }
    <div>
        precio total: {total}
    </div>
    <button onClick={() => clearCart()}>limpiar carrito</button>
    <Link to='/checkout' className='btn btn-light'><button>Generar pedido</button></Link>
    </div>
   
)

}


export default Cart