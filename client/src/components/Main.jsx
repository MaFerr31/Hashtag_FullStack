import React from 'react'
import ItemList from './ItemList'
import { songsArray } from '../../api/api.js'
import { artistArray } from '../../api/api.js'

const Main = ({ type }) => {
  return (
    <div>
      <div className="main">
        {type === 'artists' || type === undefined ? 
        (<ItemList 
          title="Artistas" 
          items={10} 
          itemsArray={artistArray} 
          path='/artists' 
          idPath='/artist'/>
        ) : (
        <>
        </>)
        }

        {type === 'songs' || type === undefined ? (
          <ItemList
          title="Músicas" 
          items={20} 
          itemsArray={songsArray} 
          path='/songs' 
          idPath='/song'/> 
        ) : (
          <>
          </>
        )}
      
      </div>
    </div>
  )
}

export default Main
