import React, { useState, useEffect } from 'react'
import hufflepuff from './Assets/hufflepuff.png'
import gryffindor from './Assets/gryffindor.png'
import ravenclaw from './Assets/ravenclaw.png'
import slytherin from './Assets/slytherin.png'

import sorting from './Assets/sorting-hat.png'
const Choosing = (props) => {



    

  const handleClick = (t) => {

      props.playerIconChoice(t);
    
  };
  const gryffindorIcon = <img className="gryff iconChoosing" src={gryffindor} onClick = { () => handleClick(0)} alt = 'gryffindor house crest'/>
  const huffelIcon = <img className="huff iconChoosing" src={hufflepuff} onClick = { () => handleClick(1)} alt = 'hufflepuff house crest'/>
  const ravenIcon = <img className="raven iconChoosing" src={ravenclaw} onClick = { () => handleClick(2)} alt = 'ravenclaw house crest'/>
  const slythIcon = <img className="slyth iconChoosing" src={slytherin} onClick = { () => handleClick(3)}  alt='slytherin house crest'/>

  const sortingIcon = <img className=" sortingChoosing" src={sorting} onClick = { () => handleClick(5)} alt = 'sorting hat'/>

  return ( <>
  <div className='choosingBoard'> <div className= 'sortingChoosing '><h1 className='text'>{sortingIcon}<span className = 'word one'>Choose</span><span className='word two'> your</span><span className='word three'> house!</span></h1>
          

          </div>  {gryffindorIcon}{huffelIcon}{ravenIcon}{slythIcon} 
            </div>

            </>
  )
}
export default Choosing
