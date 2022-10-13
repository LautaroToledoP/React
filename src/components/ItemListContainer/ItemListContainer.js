import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts().then(response => {
      console.log(response)
      setProducts(response)
    }).finally(() => {
      setLoading(false)
    }
    )
  }
  )


  if(loading) {
    return <h1>Cargando...</h1>
  }

    return <div>
      <h1>Productos disponibles</h1>
      <ItemList products={products}/>


  </div>
      
}

export default ItemListContainer