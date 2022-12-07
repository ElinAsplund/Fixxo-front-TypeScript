import React from 'react'
import { NavLink } from 'react-router-dom'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { ProductAPI } from '../models/productModels'

interface IProductUpdateForm{
    product: ProductAPI
}

const ProductUpdateForm: React.FC <IProductUpdateForm> = ( {product} ) => {
    const { update, setProduct } = React.useContext(ProductAPIContext) as IProductAPIContext
        
  return (
    <section className='product-update-form'>
        <div className="container">
            <form onSubmit={update} noValidate>
                <input value={product.articleNumber || ''} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type='hidden'className='form-control my-3' placeholder="Enter product's article number..." />
                <input value={product.name || ''} onChange={(e) => setProduct({...product, name: e.target.value})} type='text'className='form-control my-3' placeholder='Enter product name...' />
                <select value={product.category || ''} onChange={(e) => setProduct({...product, category: e.target.value})} className="form-select">
                    <option defaultValue="">Enter product category...</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Bags">Bags</option>
                    <option value="Basic">Basic</option>
                    <option value="Casual">Casual</option>
                    <option value="Coats">Coats</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Pants">Pants</option>
                    <option value="Sets">Sets</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Sweaters">Sweaters</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Tops">Tops</option>
                    <option value="Watches">Watches</option>
                </select>
                <input value={product.price} onChange={(e) => setProduct({...product, price: Number(e.target.value)})} type='number'step="any" min={0} className='form-control my-3' placeholder='Enter product price...' />
                <input value={product.imageName || ''} onChange={(e) => setProduct({...product, imageName: e.target.value})} type='text'className='form-control my-4' placeholder='Enter product image link...' />
                <div className='d-grid justify-content-center'>
                    <button type='submit' className='btn-bg-theme mb-3'>UPDATE PRODUCT</button>
                    <NavLink to={`/manage_products`} className="d-flex justify-content-center btn-no-corners" end>
                        <button className='btn-bg-theme-dark mb-5'>GO BACK</button>
                    </NavLink>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ProductUpdateForm