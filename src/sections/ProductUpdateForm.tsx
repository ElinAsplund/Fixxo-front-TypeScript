import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import TrashCanBtn from '../components/TrashCanBtn'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { ProductAPI } from '../models/productModels'

// const productChangesContext = React.createContext<ProductAPI | null>(null)

// export const useProductChangesContext = () => {
//   return React.useContext(productChangesContext) as ProductAPI
// }

const ProductUpdateForm: React.FC = () => {
    const { update, get, product, setProduct } = React.useContext(ProductAPIContext) as IProductAPIContext
        
    const id = useParams().id
    const parseId = id !== undefined ? parseFloat(id): 0;
    
    
    useEffect (() => {
        get(parseId)
    }, [])
    
    useEffect (() => {
        setProductChanges(product)
    }, [get])
    
    
    const [productChanges, setProductChanges] = useState<ProductAPI>({ id: 0, name: '', category: '', price: 0, imageName: '' })
    

    const handleSubmit = (e: React.FormEvent) => {
        console.log('CHANGES', productChanges)

        // JAG VILL SKICKA productChanges I request.body!
        
        // setProduct({...product, name: productChanges.name})
        // setProduct({...product, category: productChanges.category})
        // setProduct({...product, price: productChanges.price})
        // setProduct({...product, imageName: productChanges.imageName})
        
        console.log('PRODUCT', product)

        update(e)
    }


    const debug = (e: React.FormEvent) => {
        e.preventDefault()

        console.log('CHANGES', productChanges.name)
        
        setProduct({...product, name: productChanges.name})
        // setProduct({...product, category: productChanges.category})
        // setProduct({...product, price: productChanges.price})
        // setProduct({...product, imageName: productChanges.imageName})
        
        console.log('PRODUCT', product.name)
    }

  return (
    <section className='product-form'>
<div className="container">
  <h3 className='d-flex justify-content-center' style={{ marginTop: "100px" }}>Update Product</h3>
  <form onSubmit={update} noValidate>
      <input value={product.articleNumber || ''} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type='hidden'className='form-control my-3' placeholder="Enter product's article number..." />
      <input value={product.name || ''} onChange={(e) => setProduct({...product, name: e.target.value})} type='text'className='form-control my-3' placeholder='Enter product name...' />
      <select value={product.category || ''} onChange={(e) => setProduct({...product, category: e.target.value})} className="form-select">
          <option defaultValue="">Enter product category...</option>
          <option value="Coats">Coats</option>
          <option value="Basic">Basic</option>
          <option value="Dresses">Dresses</option>
          <option value="Sets">Sets</option>
          <option value="Fashion">Fashion</option>
          <option value="Jackets">Jackets</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Watches">Watches</option>
          <option value="Shoes">Shoes</option>
          <option value="Jeans">Jeans</option>
          <option value="Bags">Bags</option>
          <option value="Tops">Tops</option>
          <option value="Pants">Pants</option>
      </select>
      <input value={product.price} onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)})} type='number'step="any" className='form-control my-3' placeholder='Enter product price...' />
      <input value={product.imageName || ''} onChange={(e) => setProduct({...product, imageName: e.target.value})} type='text'className='form-control my-3' placeholder='Enter product image link...' />
      <div className='d-flex justify-content-center'>
        <button type='submit' className='btn-bg-theme mb-5'>UPDATE PRODUCT</button>
        <NavLink to={`/manage_products`} className="product-name" end>
            <button className='btn-bg-theme-dark ms-3 mb-5'>GO BACK</button>
        </NavLink>
      </div>
  </form>
</div>
</section>
  )
}

export default ProductUpdateForm



// WITH WORKING UPDATE PRODUCT:
{/* <section className='product-form'>
<div className="container">
  <h3 className='d-flex justify-content-center' style={{ marginTop: "100px" }}>Update Product</h3>
  <form onSubmit={update} noValidate>
      <input value={product.articleNumber || ''} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type='hidden'className='form-control my-3' placeholder="Enter product's article number..." />
      <input value={product.name || ''} onChange={(e) => setProduct({...product, name: e.target.value})} type='text'className='form-control my-3' placeholder='Enter product name...' />
      <select value={product.category || ''} onChange={(e) => setProduct({...product, category: e.target.value})} className="form-select">
          <option defaultValue="">Enter product category...</option>
          <option value="Coats">Coats</option>
          <option value="Basic">Basic</option>
          <option value="Dresses">Dresses</option>
          <option value="Sets">Sets</option>
          <option value="Fashion">Fashion</option>
          <option value="Jackets">Jackets</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Watches">Watches</option>
          <option value="Shoes">Shoes</option>
          <option value="Jeans">Jeans</option>
          <option value="Bags">Bags</option>
          <option value="Tops">Tops</option>
          <option value="Pants">Pants</option>
      </select>
      <input value={product.price} onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)})} type='number'step="any" className='form-control my-3' placeholder='Enter product price...' />
      <input value={product.imageName || ''} onChange={(e) => setProduct({...product, imageName: e.target.value})} type='text'className='form-control my-3' placeholder='Enter product image link...' />
      <div className='d-flex justify-content-center'>
          <button type='submit' className='btn-bg-theme mb-5'>UPDATE PRODUCT</button>
      </div>
  </form>
</div>
</section> */}




// WIP
// {/* <section className='product-update-form'>
// <div className="container d-flex justify-content-center">
//     <form onSubmit={handleSubmit} style={{ width: "800px" }} noValidate>
//         {/* <input value={product.articleNumber || ''} onChange={(e) => setProductChanges({...productChanges, articleNumber: e.target.value})} type='hidden'className='form-control my-3' placeholder="Enter product's article number..." /> */}
//         <input placeholder={product.name || ''} onChange={(e) => setProductChanges({...productChanges, name: e.target.value})} type='text'className='form-control my-3' />
//         {/* <textarea value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} className='form-control my-3' placeholder="Enter product description..." /> */}
//         <select placeholder={product.category || ''} onChange={(e) => setProductChanges({...productChanges, category: e.target.value})} className="form-select">
//             <option value="Coats">Coats</option>
//             <option value="Basic">Basic</option>
//             <option value="Dresses">Dresses</option>
//             <option value="Sets">Sets</option>
//             <option value="Fashion">Fashion</option>
//             <option value="Jackets">Jackets</option>
//             <option value="T-Shirts">T-Shirts</option>
//             <option value="Sweaters">Sweaters</option>
//             <option value="Watches">Watches</option>
//             <option value="Shoes">Shoes</option>
//             <option value="Jeans">Jeans</option>
//             <option value="Bags">Bags</option>
//             <option value="Tops">Tops</option>
//             <option value="Pants">Pants</option>
//         </select>
//         <input value={product.price || 0} onChange={(e) => setProductChanges({...productChanges, price: parseFloat(e.target.value)})} type='number'step="any" className='form-control my-3' />
//         {/* <select value={productRequest.rating} onChange={(e) => setProductRequest({...productRequest, rating: parseFloat(e.target.value)})} className="form-select">
//             <option defaultValue="">Enter product rating...</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//         </select> */}
//         <input placeholder={product.imageName || ''} onChange={(e) => setProductChanges({...productChanges, imageName: e.target.value})} type='text'className='form-control my-3' />
//         <div className='d-flex justify-content-center'>
//             <button type='submit' className='btn-bg-theme mb-5'>UPDATE PRODUCT</button>
//             <NavLink to={`/manage_products`} className="product-name" end>
//                 <button className='btn-bg-theme-dark ms-3 mb-5'>GO BACK</button>
//             </NavLink>
//         </div>
//         <div className='d-flex justify-content-center mb-2'>productChanges: {productChanges.name}</div>
//         {/* <div className='d-flex justify-content-center mb-2'>product: {product.category}</div>
//         <div className='d-flex justify-content-center mb-2'>productChanges: {productChanges.category}</div> */}
//         <div className='d-flex justify-content-center btn-no-corners'>
//             <button onClick={debug} className='mb-5' style={{ color: "black" }}>DEBUG</button>
//         </div>
//         {/* <TrashCanBtn /> */}
//     </form>
// </div>
// </section> */}