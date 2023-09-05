import React from 'react'

const Favorites = ({ states, handleDeleteTask}) => {

  return (
    <div className='favorites'>
      <h2>Favorites <i className="material-icons">star_outline</i> </h2>
        {
          states.favorites.map((favorites) => (
            <div className="item" key={favorites.id}>
                <span>{favorites.text}</span>
                <button 
                className='btnfavorite'  onClick={(e) => handleDeleteTask(favorites.id)}>
                  <abbr title="remove">
                  <i className="material-icons">delete</i>
                  </abbr>
                </button>
            </div>
          ))
        }
    </div>
  )
}

export default Favorites;
