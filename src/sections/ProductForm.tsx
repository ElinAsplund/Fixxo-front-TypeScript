import React from 'react'

const ProductForm: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

  return (
    <section className='product-form'>
      <div className="container">
        <h3 className='d-flex justify-content-center' style={{ marginTop: "100px" }}>Manage Products</h3>
        <form onSubmit={handleSubmit} noValidate>
            <input type='text'className='form-control my-3' placeholder='Enter product name...' />
            <textarea className='form-control my-3' placeholder="Enter product description..." />
            <select className="form-select">
                <option defaultValue="">Enter product category...</option>
                <option value="Coats">Coats</option>
                <option value="Dresses">Dresses</option>
                <option value="Sets">Sets</option>
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
            <input type='text'className='form-control my-3' placeholder='Enter product price...' />
            <select className="form-select">
                <option defaultValue="">Enter product rating...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type='text'className='form-control my-3' placeholder='Enter product image link...' />
            <div className='d-flex justify-content-center'>
                <button type='submit' className='btn-bg-theme mb-5'>ENTER NEW PRODUCT</button>
            </div>
        </form>
      </div>
    </section>
  )
}

export default ProductForm