import Item from "../Item/Item"
import {memo} from 'react'

const ItemList = ({ products }) => {

    return (
        <div>
            { products.map(prod => <Item key={prod.id} {...prod} id={prod.id}/>)}
            
        </div>
    )


}

export default memo(ItemList)