import { useState, useEffect } from 'react'
import { getProductById, getProducts } from '../../asyncMock'
import ItemListDetail from '../ItemListDetail/ItemListDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ({setCart}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()

    useEffect(() => {

        const asyncFunction = productId ? getProductById : getProducts

        asyncFunction(productId).then(response => {
            console.log(response)
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    },[productId])


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
