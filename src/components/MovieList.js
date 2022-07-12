import React from 'react'

const MovieList=({name, gender, location, image, status, species})=> {
  return (
      <div className="character">
        <img src={image} alt={image} />
        <div className="details">
            <h2>{name}</h2>
            <p>{gender} </p>
            <p>{status} {species} </p>
            <h3>The last city seen: {location.name} </h3>
        </div>
        
      </div>
  )
}

export default MovieList