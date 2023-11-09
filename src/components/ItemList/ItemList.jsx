import { Link } from "react-router-dom"
import { Filter } from "../ItemListContainer/Filter"

const productFiltered = ({products, filterState, handleFilterChange}) => (
    <>
     <br/>
    { filterState === '' ? products.map(product => 
             <div className="card w-25">
                <img src={product.url} className="card-img-top"/>
                    <div className="card-body">
                        <p>Nombre: {product.name}</p>
                        <p>Categoria: {product.categoria}</p>
                        <p>Precio: {product.precio}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/detail/${product.id}`}>
                        <button className="btn btn-outline-warning w-100">Detalle</button>
                        </Link>
                    </div>
</div>
) : products.filter(prod => prod.name.toLowerCase().includes(filterState.toLowerCase())).map(product => 
                                            <div className="card w-25">
                                                <img src={product.url} className="card-img-top"/>
                                            <div className="card-body">
                                                <p>Nombre: {product.name}</p>
                                                <p>Categoria: {product.categoria}</p>
                                                <p>Precio: {product.precio}</p>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-outline-warning w-100">Detalle</button>
                                            </div>
                                        </div>
)}

</>

)
export const ItemList = ({products}) => {
  return (
    <Filter products= {products}>
        { productFiltered }
    </Filter>
  )
}

