import React, { useState, useEffect } from 'react'

import deatheater from './Assets/deatheater.png'

import sorting from './Assets/sorting-hat.png'
const Difficulty = (props) => {


  const handleDiffClick = (t) => {

    props.playerDifficultyChoice(t);
  
};
    

  const handleClick = (t) => {

      props.playerIconChoice(t);
    
  };


  const sortingIcon = <img className=" sortingChoosing" src={sorting} onClick = { () => handleClick(5)} alt = 'sorting hat'/>
  const deatheaterIcon = <img className=" deathEaterChoosing" src={deatheater} onClick = { () => handleClick(5)} alt = 'deathEater Icon'/>

  return ( <>
  <div className='choosingBoard'> <div className= 'sortingChoosing '><h1 className='text'>{sortingIcon}<span className = 'word one'>Welcome</span><span className='word two'> to</span><span className='word three'> Hogwarts!</span></h1>
            
  <h1 className='text'>{deatheaterIcon}<span className = 'word one'>Choose</span><span className='word two'> your</span><span className='word three'> difficulty</span>
 <div><p className = 'diff'><span style = {{color:'lavender'}} onClick = { () => handleDiffClick(0)} >2player</span>
 <span style = {{color:'#1818ec'}} onClick = { () => handleDiffClick(1) }> easy</span>
  <span style = {{color:'blueviolet'}} onClick = { () => handleDiffClick(2) }> medium</span>
  <span style = {{color:'darkred'}} onClick = { () => handleDiffClick(3) }> hard</span>
   <span style = {{color:'black'}} onClick = { () => handleDiffClick(4) }> impossible</span></p></div> 
           </h1>
            </div></div>

            </>
  )
}
export default Difficulty