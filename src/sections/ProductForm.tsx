import React, { useState } from 'react'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'

const ProductForm: React.FC = () => {
  const { productRequest, setProductRequest, create } = React.useContext(ProductAPIContext) as IProductAPIContext
  const [errorName, setErrorName] = useState<{name?: string}>({})
  const [errorCategory, setErrorCategory] = useState<{category?: string}>({})

  // ------------------------------------------------------------------------------
  // VALIDATE NAME:
  const validateName = () => {
    
    let error = {
        name: ""
    }

    if (!productRequest.name)
        error.name = "Error: You must enter a product name"     
    else if (productRequest.name.length < 2)
        error.name = "Error: Your product name must contain at least two letters"

    setErrorName(error)

    return error.name === "" ? true : false;
  }

  // ------------------------------------------------------------------------------
  // VALIDATE CATEGORY and SETTING OF PRODUCTREQUEST
  const validateCategory = (e: React.ChangeEvent<HTMLSelectElement> & { target: HTMLSelectElement }) => {
    // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
    const { target } = e

    // Setting the category for productRequest
    setProductRequest({...productRequest, category: target.value })

    // Validate of category:
    let error = {
      category: ""
    }

    if (target.value === "Enter product category...")
      error.category = "Error: You must enter a product category"     
    
    setErrorCategory(error)
    
    return error.category === "" ? true : false;
  }

  // ------------------------------------------------------------------------------

  return (
    <section className='product-form'>
      <div className="container">
        <h3 style={{ marginTop: "100px" }}>Manage Products</h3>
        <form onSubmit={create} noValidate>
          <input value={productRequest.articleNumber} onChange={(e) => setProductRequest({ ...productRequest, articleNumber: e.target.value })} type='hidden' className='form-control my-3' placeholder="Enter product's article number..." />
          <input value={productRequest.name} onKeyUp={validateName} onChange={(e) => setProductRequest({ ...productRequest, name: e.target.value })} type='text' className='form-control my-3' placeholder='Enter product name...' />
          <div className="error-text">{errorName.name}</div>
          {/* <textarea value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} className='form-control my-3' placeholder="Enter product description..." /> */}
          <select value={productRequest.category} onChange={validateCategory} className="form-select">
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
          <div className="error-text">{errorCategory.category}</div>
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