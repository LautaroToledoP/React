import { useState, useEffect } from 'react'
// import { getProductById, getProducts } from '../../asyncMock'
import ItemListDetail from '../ItemListDetail/ItemListDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { getDoc, doc, collection } from 'firebase/firestore'
import { reference } from '../../services/firebase'


const ItemDetailContainer = ({setCart}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)


    const { id } = useParams()
    

    useEffect(() => {
        setLoading(true)

       const ref = reference
       const productCollection = ref.collection('1')
       const collectionToShow = productCollection.doc(id)


       collectionToShow.get().then((doc) => {
        if (!doc.exists) {
            console.log('product does not exist!')
            return;
        }
        console.log('product found!')
        setProduct({id: doc.id, ...doc.data() })
        console.log(`product ${product.id}`)
       }).catch((error) => {console.log('error searching products', error)
    }).finally(() => {
        setLoading(false)
    })
  }, [id])
  
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

