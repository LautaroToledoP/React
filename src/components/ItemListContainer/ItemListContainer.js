import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {

    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(response => {
      console.log(response)
      setProducts(response)
    }).finally(() => {
      setLoading(false)
    }
    )
  },[categoryId])


  if(loading) {
    return <h1>Cargando...</h1>
  }

    return <div>
      <h1>Productos disponibles</h1>
      <ItemList products={products}/>


  </div>
      
}

export default ItemListContainer