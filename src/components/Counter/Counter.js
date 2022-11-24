import {useState} from 'react'

const Counter = ({stock, initial = 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }


    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div>
            <h2>{quantity}</h2>
            <button onClick={decrement}>sacar del carrito</button>
            <button onClick={increment}>agregar al carrito</button>
            <button onClick={() => onAdd(quantity)}>aplicar al carrito</button>
        </div>
    )
}

export default Counter