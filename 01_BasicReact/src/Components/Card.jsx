import React from 'react'

const Card = (props) => {
    console.log(props.name);
    
  return (
    
        <div className="card">
            <img src={props.image} alt="" />
            <h1>Student Card</h1>
            <h2><strong>Name:</strong><i>  {props.name}</i></h2>
            <h3><strong>City:</strong><i> {props.city}</i></h3>
            <button>View Profile</button>
        </div>
   
  )
}

export default Card