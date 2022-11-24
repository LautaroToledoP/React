import Counter from "../Counter/Counter"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"


const ItemDetail = ({ id, img, name, category, price, stock }) => {

    const {addItem, isInCart, getProductQuantity} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productAdd = {
            id, name, price, quantity
        }
        addItem( productAdd, quantity )
      }
      
      const quantityAdded = getProductQuantity(id)
    return (
        <div>
            <img src={img} alt={name} style={{width: 175}} />
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{price}</p>
            <h2>Sinopsis: bla bla bla</h2>
            
                {/* !isInCart(id) */}
                 <Counter onAdd={handleOnAdd} stock={stock} initial={quantityAdded}/>
                 <Link to={'/cart'}>Finalizar compra</Link> 
                
           </div>
    )
}


export default ItemDetail