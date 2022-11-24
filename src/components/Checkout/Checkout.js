import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection} from 'firebase/firestore'
// import { updateDoc, doc, getDocs, collection, query, where, documentId } from "firebase/firestore"
import { reference } from '../../services/firebase/index'
import FormCheckout from "../FormCheckout/FormCheckout"

const Checkout = () => {

    const {cart, total} = useContext(CartContext)

    const createOrder = () => {

    }
    const objOrder = {
        buyer: {
            name: 'Lemon Chelo',
            phone: '132523534',
            mail: 'lemon@gmail.com'
            
        },
        items: cart,
        total
    }
        const collectionRef = collection(reference, 'orders')
        addDoc(collectionRef, objOrder).then(response => {
            console.log(response.id)
        }).catch(error => {
            console.log(error)
        })

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Generar pedido</button>
            <FormCheckout/>
        </div>
    )
}
export default Checkout