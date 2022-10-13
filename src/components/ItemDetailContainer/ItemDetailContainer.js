import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemListDetail from '../ItemListDetail/ItemListDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductById('4').then(response => {
            console.log(response)
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    },[])


    if(loading) {
        return <h1>Cargando detalle...</h1>
    }


    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemListDetail product={product}/>
        </div>
    )

}

export default ItemDetailContainer
