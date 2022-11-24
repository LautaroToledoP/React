import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query , where } from 'firebase/firestore'
import { reference } from '../../services/firebase'

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    document.title = loading ? 'Cargando...' : 'Productos disponibles'
})

  useEffect(() => {

    const collectionRef = categoryId 
    ? query(collection(reference, 'products'), where('category', '==', categoryId)) 
    : collection(reference, 'products')
    // const asyncFunction = categoryId ? getProductsByCategory : getProducts

    getDocs(collectionRef).then(response => {
      console.log(response)
      const productsAdapted = response.docs.map(doc => {
        const data = doc.data()
        console.log(data)
        return { id: doc.id, ...data }
      })

      console.log(productsAdapted)
      setProducts(productsAdapted)
      
      // setProducts(response)
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