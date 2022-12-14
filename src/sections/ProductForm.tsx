import React, { useEffect, useState } from 'react'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'

const ProductForm: React.FC = () => {
  const { productRequest, setProductRequest, create, errorText, setErrorText, toggleBtnClicked } = React.useContext(ProductAPIContext) as IProductAPIContext
  const [errorName, setErrorName] = useState<{name?: string}>({})
  const [errorTag, setErrorTag] = useState<{tag?: string}>({})
  const [errorCategory, setErrorCategory] = useState<{category?: string}>({})
  const [errorPrice, setErrorPrice] = useState<{price?: string}>({})
  const [errorImageName, setErrorImageName] = useState<{imageName?: string}>({})
  const [errorSubmit, setErrorSubmit] = useState<{submit?: string}>({})

  useEffect(() => {
    setErrorText('')
  }, [])

  // ------------------------------------------------------------------------------
  // VALIDATE NAME and SETTING OF PRODUCTREQUEST
  const validateName = ( e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement } ) => {
    // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
    const { target } = e

    setProductRequest({...productRequest, name: target.value })

    let error = {
      name: ""
    }

    if (!target.value)
      error.name = "Error: You must enter a product name"     
    else if (target.value.length < 2)
      error.name = "Error: Your product name must contain at least two letters"

    setErrorName(error)

    return error.name === "" ? true : false;
  }

  // ------------------------------------------------------------------------------
  // VALIDATE TAG and SETTING OF PRODUCTREQUEST
  const validateTag = ( e: React.ChangeEvent<HTMLSelectElement> & { target: HTMLSelectElement } ) => {
    const { target } = e

    setProductRequest({...productRequest, tag: target.value })

    let error = {
      tag: ""
    }

    if (target.value === "Enter product tag...")
      error.tag = "Error: You must enter a product tag"     

    setErrorTag(error)

    return error.tag === "" ? true : false;
  }

  // ------------------------------------------------------------------------------
  // VALIDATE CATEGORY and SETTING OF PRODUCTREQUEST
  const validateCategory = ( e: React.ChangeEvent<HTMLSelectElement> & { target: HTMLSelectElement } ) => {
    const { target } = e

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
  // VALIDATE PRICE and SETTING OF PRODUCTREQUEST
  const validatePrice = (e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement }) => {
    const { target } = e

    setProductRequest({...productRequest, price: Number(target.value) })

    // Validate of price:
    let error = {
      price: ""
    }

    if (Number(target.value) === 0 )
      error.price = "Error: You must enter a product price"
    else if(Number(target.value) <= 0 )
      error.price = "Error: A product price can't be a negative number"
    
    setErrorPrice(error)
    
    return error.price === "" ? true : false;
  }

  // ------------------------------------------------------------------------------
  // VALIDATE IMAGENAME and SETTING OF PRODUCTREQUEST
  const validateImageName = ( e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement } ) => {
    const { target } = e

    setProductRequest({...productRequest, imageName: target.value })

    const regex_link = /https?:\/\//g;

    // Validate of imageName:
    let error = {
      imageName: ""
    }

    if (target.value === "" )
      error.imageName = "Error: You must enter a product image link"
    else if(!regex_link.test(target.value))
      error.imageName = "Error: You must enter a valid link, starting with https:// or http://"

    setErrorImageName(error)
    
    return error.imageName === "" ? true : false;
  }

  // ------------------------------------------------------------------------------
  // VALIDATE SUBMIT and SETTING OF PRODUCTREQUEST
  const validateSubmit = (e:  React.FormEvent<Element>) => {
    e.preventDefault()

    let nameOK = errorName.name
    let tagOK = errorTag.tag
    let categoryOK = errorCategory.category
    let priceOK = errorPrice.price
    let imageNameOK = errorImageName.imageName

    let allOK = false

    if (nameOK === "" && tagOK === "" && categoryOK === "" && priceOK === "" && imageNameOK === "")
      allOK = true
    else
      allOK = false


    if (allOK === true) {
      setErrorName({name: ''})
      setErrorTag({tag: ''})
      setErrorCategory({category: ''})
      setErrorPrice({price: ''})
      setErrorImageName({imageName: ''})
      setErrorSubmit({submit: ''})

      create(e)

      return true
    } else {
      setErrorSubmit({submit: 'Please fill in the required information!'})
      return false
    }
  }

  // ------------------------------------------------------------------------------
  
  return (
    <section className='product-form'>
      <div className="container">
        <h3 style={{ marginTop: "100px"}} className="text-center"><span style={{ color: "#FF7373" }}>Welcome! </span><br/>Here you can manage the products.</h3>
        {/* <h3 className=''>Manage Products</h3> */}
        <form onSubmit={validateSubmit} noValidate>
          <input value={productRequest.articleNumber} onChange={(e) => setProductRequest({ ...productRequest, articleNumber: e.target.value })} type='hidden' className='form-control my-3' placeholder="Enter product's article number..." />
          <input value={productRequest.name || ''} onChange={validateName} type='text' className='form-control my-3' placeholder='Enter product name...' />
          <div className="error-text">{errorName.name}</div>
          <select value={productRequest.tag} onChange={validateTag} className="form-select my-3">
            <option defaultValue="">Enter product tag...</option>
              <option value="featured">Featured</option>
              <option value="special">Special</option>
              <option value="special-two">Special - two</option>
              <option value="the-remains">The Remains</option>
          </select>
          <div className="error-text">{errorTag.tag}</div>
          <select value={productRequest.category} onChange={validateCategory} className="form-select my-3">
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
          </select>
          <div className="error-text">{errorCategory.category}</div>
          <input value={productRequest.price || ''} onChange={validatePrice} type='number' min={0} step="any" className='form-control my-3' placeholder='Enter product price...' />
          <div className="error-text">{errorPrice.price}</div>
          <input value={productRequest.imageName || ''} onChange={validateImageName} type='text' className='form-control my-3' placeholder='Enter product image link...' />
          <div className="error-text">{errorImageName.imageName}</div>
          <div className='d-flex justify-content-center flex-column'>
            <button type='submit' className='btn-bg-theme mt-2 mb-3' onClick={toggleBtnClicked} >ENTER NEW PRODUCT</button>
            <div className="error-text text-center mt-0 mb-3">{errorSubmit.submit}</div>
            <div className="error-text text-center mt-0 mb-4">{errorText}</div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ProductForm