import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { currencyFormatter } from '../utilities/currencyFormatter'

const ProductInfoBox : React.FC = () => {

    const id = useParams().id
    const parseId = id !== undefined ? parseFloat(id): 0;

    const { get, product, remove } = React.useContext(ProductAPIContext) as IProductAPIContext

    useEffect (() => {
        get(parseId)
    }, [])

  return (
    <section className='product-info-box'>
        <h3 className='d-flex justify-content-center' style={{ marginTop: "100px" }}>Update Product</h3>
        <div className='container'>
            <div className='info-box mb-3'>
                <div className="left-side">
                    <div className='img-holder'>
                        <span>id: {product.id}</span>
                        <img src={product.imageName} />
                    </div>
                    <div className='text-holder'>
                        <span>Product name:</span>
                        <h3>{product.name}</h3>
                        <span>Category:</span>
                        <h3>{product.category}</h3>
                        <span>Price:</span>
                        <h3>{currencyFormatter(product.price)}</h3>
                    </div>
                </div>
                {/* <div className='right-side'>
                    <div className='btn-no-corners'><button className='btn-product remove-btn' onClick={() => remove(product.id)} ><i className='fa-solid fa-trash'></i></button></div>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default ProductInfoBox