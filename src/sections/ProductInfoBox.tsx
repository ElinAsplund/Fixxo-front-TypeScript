import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { currencyFormatter } from '../utilities/currencyFormatter'

const ProductInfoBox: React.FC = () => {

    const id = useParams().id
    const parseId = id !== undefined ? Number(id) : 0;

    const { get, product, products, getAll } = React.useContext(ProductAPIContext) as IProductAPIContext


    useEffect(() => {
        getAll()
    }, [getAll])

    useEffect(() => {
        get(parseId)
    }, [])

    
    const debug = () => {
        console.log('products:', products);

        products.filter(product => product.id == parseId)

        // console.log('filtered product object:', product);
        console.log('id:', product.id);
        console.log('name:', product.name);
        // console.log('category:', product.category);
        // console.log('imageName:', product.imageName);
    }

    return (
        <section className='product-info-box'>
            <h3 className='d-flex justify-content-center' style={{ marginTop: "100px" }}>Update Product</h3>
            {/* CURRENT */}
            <div className='container'>
                <div className='info-box mb-3'>
                    <div className="content-holder">
                        <p className='d-flex justify-content-center'>Current product</p>
                        <div className='d-flex'>
                            <div className='img-holder'>
                                <span>id: {product.id}</span>
                                {
                                    products.filter(product => product.id === parseId).map(filteredProduct => (
                                        <img key={filteredProduct.id} src={filteredProduct.imageName} />
                                    ))
                                }
                            </div>
                            <div className='text-holder'>
                                <span>Product name:</span>
                                {
                                    products.filter(product => product.id === parseId).map(filteredProduct => (
                                    <h3 key={filteredProduct.id}>
                                        {filteredProduct.name}
                                    </h3>
                                    ))
                                }
                                <span>Category:</span>
                                {
                                    products.filter(product => product.id === parseId).map(filteredProduct => (
                                    <h3 key={filteredProduct.id}>
                                        {filteredProduct.category}
                                    </h3>
                                    ))
                                }
                                <span>Price:</span>
                                {
                                    products.filter(product => product.id === parseId).map(filteredProduct => (
                                    <h3 key={filteredProduct.id}>{currencyFormatter(filteredProduct.price)}</h3>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* PREVIEW */}
                {/* <div className='info-box mb-3 ms-3'>
                    <div className="content-holder">
                        <p className='d-flex justify-content-center'>Preview</p>
                        <div className='d-flex'>
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
                    </div>
                </div> */}
            </div>
            {/* <div className='d-flex justify-content-center btn-no-corners'>
                <button onClick={debug} className='mb-5' style={{ color: "black" }}>DEBUG</button>
            </div> */}
        </section>
    )
}

export default ProductInfoBox