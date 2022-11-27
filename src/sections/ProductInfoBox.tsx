import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { ProductAPI } from '../models/productModels'
import { currencyFormatter } from '../utilities/currencyFormatter'

const ProductInfoBox: React.FC = () => {
    const [fetchedProduct, setFetchedProduct] = useState<ProductAPI>({id: 0, articleNumber: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: ''})

    const id = useParams().id
    const parseId = id !== undefined ? parseFloat(id) : 0;

    const { get, product, products, getAll } = React.useContext(ProductAPIContext) as IProductAPIContext


    useEffect(() => {
        getAll()
    }, [getAll])

    useEffect(() => {
        get(parseId)

        // console.log(`http://localhost:5000/api/products/${parseId}`)

        // const fetchProduct = async () => {
        //     let result = await fetch(`http://localhost:5000/api/products/${parseId}`)
        //     console.log(result);
        // }

        // fetchProduct()
    }, [])

    // const foundProduct: ProductAPI = products.find(product => product.id == parseId);

    // console.log(product);
    
    const debug = () => {
        console.log('products:', products);

        products.filter(product => product.id == parseId)

        // UPPDATERAR SIG EFTER FRONTEND ÄNDÅ!?
        // console.log('filtered product object:', product);
        console.log('id:', product.id);
        console.log('name:', product.name);
        // console.log('category:', product.category);
        // console.log('imageName:', product.imageName);
    }

    return (
        <section className='product-info-box'>
            <h3 className='d-flex justify-content-center' style={{ marginTop: "100px" }}>Update Product</h3>
            {/* PREVIEW */}
            <h2 className='d-flex justify-content-center'><i>Preview</i></h2>
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
                </div>
            </div>
            {/* SERVER INFO */}
            <h2 className='d-flex justify-content-center'><i>!HELP! Sever info about product !HELP!</i></h2>
            <div className='container'>
                <div className='info-box mb-3'>
                    <div className="left-side">


                        {/* ---DEBUGGING--- */}
                    <div className='border'>
                        {products.filter(product => product.id = parseId).map(filteredProduct => (
                            <div>
                                {filteredProduct.name}
                            </div>
                        ))}
                    </div>
                    <div className='border'>
                        {products.filter(product => product.id = parseId).map(filteredProduct => (
                            <div>
                                {filteredProduct.category}
                            </div>
                        ))}
                    </div>
                    <div className='border'>
                        {products.filter(product => product.id = parseId).map(filteredProduct => (
                            <div>
                                {filteredProduct.price}
                            </div>
                        ))}
                    </div>
                    <div className='border'>
                        {products.filter(product => product.id = parseId).map(filteredProduct => (
                            <div>
                                {filteredProduct.imageName}
                            </div>
                        ))}
                    </div>
                        {/* ---DEBUGGING END--- */}

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
            </div>
            <div className='d-flex justify-content-center btn-no-corners'>
                <button onClick={debug} className='mb-5' style={{ color: "black" }}>DEBUG</button>
            </div>
        </section>
    )
}

export default ProductInfoBox