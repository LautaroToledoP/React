import { useState, useEffect } from 'react'
import ItemListDetail from '../ItemListDetail/ItemListDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc, collection } from 'firebase/firestore'
import { reference } from '../../services/firebase'


const ItemDetailContainer = ({setCart}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()
    

    useEffect(() => {

        const docRef = doc(reference, 'products', productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])
//         setLoading(true)

//        const ref = reference
//        const productCollection = ref.collection('1')
//        const collectionToShow = productCollection.doc(productId)


//        collectionToShow.get().then((doc) => {
//         if (!doc.exists) {
//             console.log('product does not exist!')
//             return;
//         }
//         console.log('product found!')
//         setProduct({id: doc.id, ...doc.data() })
//         console.log(`product ${product.id}`)
//        }).catch((error) => {console.log('error searching products', error)
//     }).finally(() => {
//         setLoading(false)
//     })
//   }, [productId])
  
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

