import React from 'react'
import SingleItem from './SingleItem'

const ItemList = ({title, items}) => {
  return (
    <div className="item-list">
                <div className="item-list__header">
                    <h2 className="item-list__title">{title } Populares</h2>
                    <a href="/" className="item-list__link">Mostrar tudo</a>
                </div>
    
                  <div className="item-list__container">
                    {Array(items).fill().map(() => (<SingleItem />))}
                    
                  </div>
    </div>
  )
}

export default ItemList
