import React from 'react'
import { NavLink } from 'react-router-dom'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'
import { ProductAPI } from '../models/productModels'
import { currencyFormatter } from '../utilities/currencyFormatter'

const ProductListItem: React.FC <{ item: ProductAPI }> = ({ item }) => {

    const { remove, toggleBtnClicked } = React.useContext(ProductAPIContext) as IProductAPIContext
 
    const handleClick = () => {
        remove(item.id)
        toggleBtnClicked()
    }


    return (
        <div className="product-list-item btn-no-corners">
            <div className='left-side'>
                <div className="placeholder-area">
                    <img src={item.imageName} />
                </div>
                <div>
                    <p className="product-name">{item.name}</p>
                    <p className="product-category">{item.category}</p>
                </div>
            </div>
            <p className="product-tag d-flex align-items-center mb-0">{item.tag}</p>
            <p className="product-price">Price: {currencyFormatter(item.price)}</p>
            <div className='right-side'>
                <NavLink to={`/update_product/${item.id}`} end>
                    <button className='btn-product edit-btn'><i className="fa-solid fa-pen"></i></button>
                </NavLink>
                <button className='btn-product remove-btn' onClick={handleClick}><i className='fa-solid fa-trash'></i></button>
            </div>
        </div>
    )
}

export default ProductListItem