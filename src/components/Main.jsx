import React from 'react'
import ItemList from './ItemList'

const Main = () => {
  return (
    <div>
      <div className="main">
        <ItemList title="Artistas" items={10}/>

        <ItemList title="Músicas" items={20}/> 
      </div>
    </div>
  )
}

export default Main
