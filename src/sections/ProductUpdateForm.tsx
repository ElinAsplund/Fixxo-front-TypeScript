import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { IProductUpdateForm } from '../models/sectionsModels'


const ProductUpdateForm: React.FC <IProductUpdateForm> = ( {product} ) => {
    const { update, setProduct, errorText, setErrorText, getAll } = React.useContext(ProductAPIContext) as IProductAPIContext
    const [errorName, setErrorName] = useState<{name: string}>({name: ''})
    const [errorTag, setErrorTag] = useState<{tag: string}>({tag: ''})
    const [errorCategory, setErrorCategory] = useState<{category: string}>({category: ''})
    const [errorPrice, setErrorPrice] = useState<{price: string}>({price: ''})
    const [errorImageName, setErrorImageName] = useState<{imageName: string}>({imageName: ''})
    const [errorSubmit, setErrorSubmit] = useState<{submit: string}>({submit: ''})
    
    useEffect(() => {
        setErrorText('')
      }, [])

    // ------------------------------------------------------------------------------
    // VALIDATE NAME and SETTING OF PRODUCTREQUEST
    const validateName = (e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement }) => {
        // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
        const { target } = e
        
        // Setting the price for productRequest
        setProduct({...product, name: target.value })
        
        let error = {
            name: ""
        }
        
        if (!target.value)
        error.name = "You must enter a product name"     
        else if (target.value.length < 2)
        error.name = "Your product name must contain at least two letters"
        
        setErrorName(error)
        
        return error.name === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // VALIDATE TAG and SETTING OF PRODUCTREQUEST
    const validateTag = (e: React.ChangeEvent<HTMLSelectElement> & { target: HTMLSelectElement }) => {
        // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
        const { target } = e

        // Setting the price for productRequest
        setProduct({...product, tag: target.value })

        let error = {
            tag: ""
        }

        if (target.value === "Enter product tag...")
            error.tag = "You must enter a product tag"     

        setErrorTag(error)

        return error.tag === "" ? true : false;
    }
    
    // ------------------------------------------------------------------------------
    // VALIDATE CATEGORY and SETTING OF PRODUCTREQUEST
    const validateCategory = (e: React.ChangeEvent<HTMLSelectElement> & { target: HTMLSelectElement }) => {
        // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
        const { target } = e

        // Setting the category for productRequest
        setProduct({...product, category: target.value })

        // Validate of category:
        let error = {
        category: ""
        }

        if (target.value === "Enter product category...")
        error.category = "You must enter a product category"     
        
        setErrorCategory(error)
        
        return error.category === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // VALIDATE PRICE and SETTING OF PRODUCTREQUEST
    const validatePrice = (e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement }) => {
        // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
        const { target } = e

        // Setting the price for productRequest
        setProduct({...product, price: Number(target.value) })

        // Validate of price:
        let error = {
        price: ""
        }

        if (Number(target.value) === 0 )
        error.price = "You must enter a product price"
        else if(Number(target.value) <= 0 )
        error.price = "A product price can't be a negative number"
        
        setErrorPrice(error)
        
        return error.price === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // VALIDATE IMAGENAME and SETTING OF PRODUCTREQUEST
        const validateImageName = (e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement }) => {
        // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
        const { target } = e

        // Setting the imageName for productRequest
        setProduct({...product, imageName: target.value })

        // const regex_link = /^[a-zA-Z\u0080-\uFFFF]*$/;
        const regex_link = /https?:\/\//g;

        // Validate of imageName:
        let error = {
        imageName: ""
        }

        if (target.value === "" )
        error.imageName = "You must enter a product image link"
        else if(!regex_link.test(target.value))
        error.imageName = "You must enter a valid link, starting with https:// or http://"

        setErrorImageName(error)
        
        return error.imageName === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // VALIDATE SUBMIT and SETTING OF PRODUCTREQUEST
    const validateSubmit = (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
        console.log("---CLICK---")
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
    
        console.log("allOK: " + allOK)
    
        if (allOK === true) {
            setErrorName({name: ''})
            setErrorTag({tag: ''})
            setErrorCategory({category: ''})
            setErrorPrice({price: ''})
            setErrorImageName({imageName: ''})
            setErrorSubmit({submit: ''})

            update(e)

            console.log("validateSubmit: true")
        } else {
            setErrorSubmit({submit: 'Please fill in the required information!'})
            console.log("validateSubmit: false")
            return false
        }
    }    
    // ------------------------------------------------------------------------------
    
  return (
    <section className='product-update-form'>
        <div className="container">
            <form onSubmit={validateSubmit} noValidate>
                <input value={product.articleNumber || ''} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type='hidden'className='form-control my-3' placeholder="Enter product's article number..." />
                <input value={product.name || ''} onChange={validateName} type='text'className='form-control my-3' placeholder='Enter product name...' />
                <div className="error-text">{errorName.name}</div>
                <select value={product.tag} onChange={validateTag} className="form-select my-3">
                    <option defaultValue="">Enter product tag...</option>
                    <option value="featured">Featured</option>
                    <option value="special">Special</option>
                    <option value="special-two">Special - two</option>
                    <option value="the-remains">The Remains</option>
                </select>
                <div className="error-text">{errorTag.tag}</div>
                <select value={product.category || ''} onChange={validateCategory} className="form-select">
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
                <input value={product.price} onChange={validatePrice} type='number'step="any" min={0} className='form-control my-3' placeholder='Enter product price...' />
                <div className="error-text">{errorPrice.price}</div>
                <input value={product.imageName || ''} onChange={validateImageName} type='text'className='form-control my-4' placeholder='Enter product image link...' />
                <div className="error-text">{errorImageName.imageName}</div>
                <div className='d-grid justify-content-center'>
                    <button type='submit' className='btn-bg-theme mb-3'>UPDATE PRODUCT</button>
                    <div className="error-text text-center mt-0 mb-3">{errorSubmit.submit}</div>
                    <div className="error-text text-center mt-0 mb-4">{errorText}</div>
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