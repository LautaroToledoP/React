import { getProductById } from "../../asyncMock"
import Counter from "../Counter/Counter"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, img, name, category, price, stock }) => {

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productAdd = {
            id, name, price, quantity
        }
        addItem( productAdd )
      }

    return (
        <div>
            <img src={img} alt={name} style={{width: 175}} />
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{price}</p>
            <h2>Sinopsis: bla bla bla</h2>
            <Counter onAdd={handleOnAdd} stock={stock}/>
           </div>
    )
}


export default ItemDetail