import React from 'react'
import { IProductAPIContext, ProductAPIContext } from '../contexts/ProductAPIContext'

const TrashCanBtn: React.FC = () => {
    const { product, remove } = React.useContext(ProductAPIContext) as IProductAPIContext

  return (
    <div className='btn-no-corners'>
        <button className='btn-product remove-btn' onClick={() => remove(product.id)} ><i className='fa-solid fa-trash'></i></button>
    </div>
    )
}

export default TrashCanBtn