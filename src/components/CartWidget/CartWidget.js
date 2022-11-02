import cart1 from './assets/cart1.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div to='/cart'>
        <button><img src={cart1} alt='cart1'/>    
        {totalQuantity}</button>
        </div>
    )
}

export default CartWidget