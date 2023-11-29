const products = [ 
    {id: '1', name: 'Buzo Algodón', categoria: 'abrigo', precio: 12000, stock: 1,url:'../src/assets/img/c1.jpeg'},
    {id: '2', name: 'Short Running', categoria: 'short', precio: 6000, stock: 1,url:'../src/assets/img/C2.jpeg'},
    {id: '3', name: 'Musculosa training', categoria: 'musculosa', precio: 3000, stock: 2,url:'../src/assets/img/C3.jpeg'},
    {id: '4', name: 'Mochila Urban X', categoria: 'accesorios', precio: 8000, stock: 2,url:'../src/assets/img/C4.jpeg'},
    {id: '5', name: 'Buzo Blanco', categoria: 'abrigo', precio: 12000, stock: 1,url:'../../src/assets/img/c5.jpeg'},
    {id: '6', name: 'Short Running Mujer', categoria: 'short', precio: 6000, stock: 1,url:'../../src/assets/img/c6.jpeg'},
    {id: '7', name: 'Musculosa Training Mujer', categoria: 'musculosa', precio: 3000, stock: 2,url:'../../src/assets/img/c7.jpeg'},
    {id: '8', name: 'Cartera X', categoria: 'accesorios', precio: 8000, stock: 2,url:'../../src/assets/img/c8.jpeg'},
    {id: '9', name: 'Camiseta Manga Larga Mujer', categoria: 'abrigo', precio: 12000, stock: 1,url:'../../src/assets/img/c9.jpeg'},
    {id: '10', name: 'Pantalón Largo', categoria: 'short', precio: 6000, stock: 1,url:'../../src/assets/img/c10.jpeg'},
    {id: '11', name: 'Remera Hombre', categoria: 'musculosa', precio: 3000, stock: 2,url:'../../src/assets/img/c11.jpeg'},
    {id: '12', name: 'Mochila Viaje', categoria: 'accesorios', precio: 8000, stock: 2,url:'../../src/assets/img/c12.jpeg'}
]

export const mFetch = (id) =>{
    return new Promise((res, rej)=>{  
        setTimeout(()=>{
            res(id ? products.find(prod=> prod.id===id):products)
        }, 1000)

    })
}