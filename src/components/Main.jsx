import React from 'react'
import ItemList from './ItemList'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

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
