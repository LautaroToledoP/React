import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {

    const {cart, total} = useContext(CartContext)

    const objOrder = {
        buyer: {
            name: 'Lemon Chelo',
            phone: '132523534',
            mail: 'lemon@gmail.com'
            
        },
        items: cart,
        total
    }
    return (
        <div>
            <h1>Checkout</h1>
        </div>
    )
}
export default Checkout