const products = [
    {
        id : '1',
        name : 'vagabond',
        price: '1500',
        category: 'manga',
        img: 'http://2.bp.blogspot.com/-nze69ig_x3s/VftIpt0_WqI/AAAAAAAAEZw/wzKSdHecm-I/s1600/Portada.jpg',
        stock: '19',
        description: 'sinopsis'
    },
    {
        id : '2',
        name : 'kimetsu no yaiba',
        price: '1250',
        category: 'manga',
        img: 'https://i.pinimg.com/474x/9c/28/d6/9c28d62093e55a1fd93ece30073156ed.jpg',
        stock: '15',
        description: 'sinopsis'
    },
    {
        id : '3', name : 'onepunch-man',price: '1100',category: 'manga',img: 'https://pack-yak.intomanga.com/images/manga/One-Punch-Man/chapter/138/page/1/3a5d16e2-c087-4f3d-8eb0-24b2eb008e58',stock: '25',description: 'sinopsis'
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
})      
}

const product = [
    {
        id : '4',
        name : 'hunter x hunter',
        price: '1500',
        category: 'manga',
        img: 'https://http2.mlstatic.com/D_NQ_NP_719528-MLA49292408396_032022-O.webp',
        stock: '19',
        description: 'sinopsis'
    }
]

export const getProductById = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product)
        }, 4000)
})      
}

