import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TrashCanBtn from '../components/TrashCanBtn'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'

const ProductUpdateForm: React.FC = () => {

    const id = useParams().id
    const parseId = id !== undefined ? parseFloat(id): 0;

    const { update, get, product, setProduct } = React.useContext(ProductAPIContext) as IProductAPIContext

    useEffect (() => {
        get(parseId)
    }, [])

  return (
    <section className='product-update-form'>
      <div className="container">
        <form onSubmit={update} noValidate>
            <input value={product.articleNumber || ''} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type='hidden'className='form-control my-3' placeholder="Enter product's article number..." />
            <input value={product.name || ''} onChange={(e) => setProduct({...product, name: e.target.value})} type='text'className='form-control my-3' placeholder='Enter product name...' />
            {/* <textarea value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} className='form-control my-3' placeholder="Enter product description..." /> */}
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
            <input value={product.price || 0} onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)})} type='number'step="any" className='form-control my-3' placeholder='Enter product price...' />
            {/* <select value={productRequest.rating} onChange={(e) => setProductRequest({...productRequest, rating: parseFloat(e.target.value)})} className="form-select">
                <option defaultValue="">Enter product rating...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> */}
            <input value={product.imageName || ''} onChange={(e) => setProduct({...product, imageName: e.target.value})} type='text'className='form-control my-3' placeholder='Enter product image link...' />
            <div className='d-flex justify-content-center'>
                <button type='submit' className='btn-bg-theme mb-5'>UPDATE PRODUCT</button>
            </div>
            {/* <TrashCanBtn /> */}
        </form>
      </div>
    </section>
  )
}

export default ProductUpdateForm