import ItemDetail from "../ItemDetail/ItemDetail"



const ItemListDetail = ({ product }) => {

    

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    )


}


export default ItemListDetail