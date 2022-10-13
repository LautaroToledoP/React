import { getProducts } from "../../asyncMock"

const Item = ({ img, name, category, price }) => {
    return (
        <div>
            <img src={img} alt={name} style={{width: 175}} />
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{price}</p>
           </div>
    )
}


export default Item