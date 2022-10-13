import ItemDetail from "../ItemDetail/ItemDetail"

const ItemListDetail = ({ product }) => {

    return (
        <div>
            { product.map(prod => <ItemDetail key={prod.id} {...prod}/>)}
        </div>
    )


}


export default ItemListDetail