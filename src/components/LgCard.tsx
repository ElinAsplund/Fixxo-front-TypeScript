import React from 'react'
import { ILgCard } from '../models/sectionModel'

const LgCard: React.FC <ILgCard> = ( {id, heading } ) => {
  return (
    <div className="two-for-holder" id={id}>
      <h2>{heading}</h2>
      <button className="btn-bg-white">FLASH SALE</button>
    </div>  
  )
}

export default LgCard