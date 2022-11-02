import { getProducts } from "../../asyncMock"
import { Link } from 'react-router-dom'
import { useContext } from "react"


const Item = ({ img, name, category, price, id }) => {


    return (
        <div>
            <img src={img} alt={name} style={{width: 175}} />
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{price}</p>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
           </div>
    )
}


export default Item