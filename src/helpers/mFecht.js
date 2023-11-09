const products = [ 
    {id: '1', name: 'Buzo Algodón', categoria: 'abrigo', precio: 12000, stock: 1,url:'../src/assets/img/c1.jpeg'},
    {id: '2', name: 'Short Running', categoria: 'short', precio: 6000, stock: 1,url:'../src/assets/img/C2.jpeg'},
    {id: '3', name: 'Musculosa training', categoria: 'musculosa', precio: 3000, stock: 2,url:'../src/assets/img/C3.jpeg'},
    {id: '4', name: 'Mochila Urban X', categoria: 'accesorios', precio: 8000, stock: 2,url:'../src/assets/img/C4.jpeg'}
]

export const mFetch = (id) =>{
    return new Promise((res, rej)=>{  
        setTimeout(()=>{
            res(id ? products.find(prod=> prod.id===id):products)
        }, 1000)

    })
}