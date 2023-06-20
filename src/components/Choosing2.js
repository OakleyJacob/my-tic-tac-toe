import React, { useState, useEffect } from 'react'
import hufflepuff from './Assets/hufflepuff.png'
import gryffindor from './Assets/gryffindor.png'
import ravenclaw from './Assets/ravenclaw.png'
import slytherin from './Assets/slytherin.png'
import deatheater from './Assets/deatheater.png'
import sorting from './Assets/sorting-hat.png'

const Choosing2 = (props) => {



    

  const handleClick = (t) => {

      props.otherIconChoice(t);
    
  };
  const gryffindorIcon = <img className="gryff iconChoosing" src={gryffindor} onClick = { () => handleClick(0)} alt = 'gryffindor house crest'/>
  const huffelIcon = <img className="huff iconChoosing" src={hufflepuff} onClick = { () => handleClick(1)} alt = 'hufflepuff house crest'/>
  const ravenIcon = <img className="raven iconChoosing" src={ravenclaw} onClick = { () => handleClick(2)} alt = 'ravenclaw house crest'/>
  const slythIcon = <img className="slyth iconChoosing" src={slytherin} onClick = { () => handleClick(3)}  alt='slytherin house crest'/>
  const dEaterIcon =<span className='width'><img className="dEater  deathEaterChoosing2" src={deatheater} onClick = { () => handleClick(4)} alt ='death eater symbol'/></span>
  const sortingIcon = <img className=" sortingChoosing" src={sorting} onClick = { () => handleClick(5)} alt = 'sorting hat'/>
  const icons = [gryffindorIcon, huffelIcon, ravenIcon, slythIcon, dEaterIcon, sortingIcon]
  return ( <>
  <div className='choosingBoard'> <div className= 'sortingChoosing '><h1 className='text'>{sortingIcon}<span className = 'word one'>Choose</span><span className='word two'> other</span><span className='word three'> house!</span></h1>
          

          </div>  {icons[props.first]}{icons[props.second]}{icons[props.third]}{icons[props.fourth]} 
            </div>

            </>
  )
}
export default Choosing2
