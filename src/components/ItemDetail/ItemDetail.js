import { getProductById } from "../../asyncMock"
import Counter from "../Counter/Counter"

const ItemDetail = ({ img, name, category, price }) => {
    const handleOnAdd = () => {
        console.log("se agrego al carrito")
      }

    return (
        <div>
            <img src={img} alt={name} style={{width: 175}} />
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{price}</p>
            <h2>Sinopsis: bla bla bla</h2>
            <Counter onAdd={handleOnAdd}/>
           </div>
    )
}


export default ItemDetail