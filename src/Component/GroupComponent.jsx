import React from 'react'

const GroupComponent = ({title, group,}) => {
    return (
    <div className='group'>
        <h2 className='productsTitle'>{title }</h2>
        <ul className='product'>
          {group.map((product) => (
            <li key={product.id} className={product.className}><p>{product.name} - </p><span>R${product.price},00</span></li>
          ))}
        </ul>
    </div >
  )
}

export default GroupComponent