import cart1 from './assets/cart1.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <Link to='/cart' className='btn btn-light'>
            <img src={cart1} alt='cart1' />
            {totalQuantity}
        </Link>
        
    )
}

export default CartWidget