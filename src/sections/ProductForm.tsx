import React from 'react'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'

const ProductForm: React.FC = () => {

  const { productRequest, setProductRequest, create } = React.useContext(ProductAPIContext) as IProductAPIContext

  return (
    <section className='product-form'>
      <div className="container">
        <h3 style={{ marginTop: "100px" }}>Manage Products</h3>
        <form onSubmit={create} noValidate>
          <input value={productRequest.articleNumber} onChange={(e) => setProductRequest({ ...productRequest, articleNumber: e.target.value })} type='hidden' className='form-control my-3' placeholder="Enter product's article number..." />
          <input value={productRequest.name} onChange={(e) => setProductRequest({ ...productRequest, name: e.target.value })} type='text' className='form-control my-3' placeholder='Enter product name...' />
          {/* <textarea value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} className='form-control my-3' placeholder="Enter product description..." /> */}
          <select value={productRequest.category} onChange={(e) => setProductRequest({ ...productRequest, category: e.target.value })} className="form-select">
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
          <input value={productRequest.price || ''} onChange={(e) => setProductRequest({ ...productRequest, price: Number(e.target.value) })} type='number' min={0} step="any" className='form-control my-3' placeholder='Enter product price...' />
          {/* <select value={productRequest.rating} onChange={(e) => setProductRequest({...productRequest, rating: Number(e.target.value)})} className="form-select">
                <option defaultValue="">Enter product rating...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> */}
          <input value={productRequest.imageName} onChange={(e) => setProductRequest({ ...productRequest, imageName: e.target.value })} type='text' className='form-control my-3' placeholder='Enter product image link...' />
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn-bg-theme mb-5'>ENTER NEW PRODUCT</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ProductForm