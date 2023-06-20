import React, { useState, useEffect } from 'react'

const Square = (props) => {

  // status of whether the square has been clicked
 
  // checks if the square has been clicked (true) or not. If clicked, short-circuites and does not allow a state change. otherwise changes state, and sets status to true



  const handleClick = () => {
    
    
      props.playerClicks(props.index);
    
  };

  return (
    // calls handleClick when square is clicked
    <div className="square" onClick={props.value!=null?null:handleClick}>{props.value}</div>
  )
}
export default Square
