import React, { useState, useEffect } from 'react'
import Square from './components/Square'
import './App.css'
import hufflepuff from './components/Assets/hufflepuff.png'
import gryffindor from './components/Assets/gryffindor.png'
import ravenclaw from './components/Assets/ravenclaw.png'
import slytherin from './components/Assets/slytherin.png'
import deatheater from './components/Assets/deatheater.png'
import sorting from './components/Assets/sorting-hat.png'
import Choosing from './components/Choosing'
import Choosing2 from './components/Choosing2'
import Difficulty from './components/Difficulty'
import { flushSync } from 'react-dom'
const App = () => {
  const [hasAWinner, setAWinner] = useState(false)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [theWinner, setTheWinner] = useState("")
  const [playerIconChoice, setPlayerChoice] = useState(null)
  const [otherIconChoice, setOtherPlayerChoice] = useState(null)
  const [difficulty, setDifficulty] = useState(null)
    // sets newSquaresArray to copy of squares, sets selected targetIndex to an 'x', then sets squares to the new array values.
  const [numberOfClicks, setNumberOfClicks] = useState(0)
    // player array states
  const [xPlayer, setXplayer] = useState([])
  const [oPlayer, setOplayer] = useState([])
  // const [choiceOne, setChoiceOne] = useState([])
  const myRefreshPage = () => {
    setAWinner(false)
    setSquares(Array(9).fill(null))
    setNumberOfClicks(0)
    setXplayer([])
    setOplayer([])
    setTheWinner('')
  }
  useEffect(() => {
    if (difficulty>0)
    {setOtherPlayerChoice(4)}
  }, [difficulty])
  // const playerChoices = [empireIcon, rebelIcon, jediIcon, niteIcon ]
  const myRechoosePage = () => {
    setAWinner(false)
    setSquares(Array(9).fill(null))
    setNumberOfClicks(0)
    setXplayer([])
    setOplayer([])
    setTheWinner('')
    setPlayerChoice(null)
    setOtherPlayerChoice(null)
    setDifficulty(null)
  }
  const gryffindorIcon = <img className="gryff icon" src={gryffindor} alt = 'gryffindor house crest'/>
  const huffelIcon = <img className="huff icon" src={hufflepuff} alt = 'hufflepuff house crest'/>
  const ravenIcon = <img className="raven icon" src={ravenclaw} alt = 'ravenclaw house crest'/>
  const slythIcon = <img className="slyth icon" src={slytherin} alt='slytherin house crest'/>
  const dEaterIcon = <img className="dEater icon" src={deatheater} alt ='death eater symbol'/>
  const sortingIcon = <img className="sorting icon" src={sorting} alt = 'sorting hat'/>
  const sortingIcon2 = <img className="sorting icon small" src={sorting} alt = 'sorting hat'/>
  const names = ["Gryffindor", "Huffelpuff", "Ravenclaw", "Slytherin", "The Death Eater","The Sorting Hat" ]
  const hasHave = [' has ', ' has ', ' has ', ' has ', "s have ", ' has ']
  const icons = [gryffindorIcon, huffelIcon, ravenIcon, slythIcon, dEaterIcon, sortingIcon]
  // const jediIcon = <img className="rebIcon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/9/9c/Jedi-Order-Insignia.png?width=2240"/>

  // const niteIcon = <img className="rebIcon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/8/80/Nite_owls.png?width=2240"/>


  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // choose players
  const handleIconChoice = (choiceTarget) => {
    setPlayerChoice(choiceTarget)
  }
  const handleOtherChoice = (choiceTarget) => {
    setOtherPlayerChoice(choiceTarget)
  }
  const handleDifficultyChoice = (choiceDifficulty) => {
    setDifficulty(choiceDifficulty)
  }
  // Game loop
  const playerClicks = (targetIndex) => {
    if (!hasAWinner && squares[targetIndex]===null){
        updateClicks()
        updateArray(targetIndex)}
  }

    // check if player array includes an array element.
  const winCheck = (array, string) => {
    
    const containsAllElements = 
    lines.some(line => line.every(element => array.includes(element)));
  
    if(containsAllElements) {
      setTheWinner(string)
      setAWinner(true)
    }
    else if(numberOfClicks >= 8) {
      
      setAWinner(true) 
      setTheWinner("It's a tie, nobody has")
    }
    // check after each turn
    // go to win condition if player wins
  }



  // updates the number of clicks, and checks conditions
  const updateClicks = () => {
    let clickNumber = numberOfClicks + 1
    setNumberOfClicks(clickNumber)
  }


//  checks wither an X or O is played
  const updateArray = (targetIndex) => {
    let newSquaresArray = [...squares]
    if( difficulty<4 && numberOfClicks % 2 === 0 || (difficulty===4 && numberOfClicks % 2 ===1)){
      newSquaresArray[targetIndex] = icons[playerIconChoice]
      setSquares(newSquaresArray)
      let newPlayerXArray = [...xPlayer, targetIndex]
      flushSync( setXplayer(newPlayerXArray))
      winCheck(newPlayerXArray, names[playerIconChoice] + hasHave[playerIconChoice])
      console.log(xPlayer)} 
    
    else {newSquaresArray[targetIndex] =  icons[otherIconChoice] 
      setSquares(newSquaresArray)
      let newPlayerOArray = [...oPlayer, targetIndex]
     flushSync( setOplayer(newPlayerOArray))
      winCheck(newPlayerOArray, names[otherIconChoice]+ hasHave[otherIconChoice])
      console.log(oPlayer)} 
  }
  
  useEffect(() => {
    if ((!hasAWinner && (difficulty >= 1 && difficulty <= 3)&&  numberOfClicks % 2 === 1 )|| (!hasAWinner && difficulty===4  && numberOfClicks %2===0 )) {
    
      const timeout = setTimeout(() => {
        switch (difficulty){
        case 1:
          
          makeComputerMoveEasy()
          break;
        case 2:
          makeComputerMoveMedium()
          break;
        case 3:
          makeComputerMoveHard()
          break;
        case 4:
          makeComputerMoveImpo()
          break;
          default:
      
        }}, 750); 
      return () => clearTimeout(timeout);
    }
  }, [hasAWinner, numberOfClicks, otherIconChoice, otherIconChoice, difficulty]);

  const makeComputerMoveImpo = () => {
    const emptySquares = squares.reduce((acc, value, index) => {
      if (value === null) {
        return [...acc, index];
      }
      return acc;
    }, []);
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
   
    const randomMove = emptySquares[randomIndex];
    if (emptySquares.includes(4)){
      playerClicks(4)
    }else if (xPlayer.length===1){
      console.log(xPlayer);
      switch (xPlayer[0]){
        case 0:
          playerClicks(8)
          break;
        case 1:
          playerClicks(0)
          break;
        case 2:
          playerClicks(6)
          break;
        case 3:
          playerClicks(6)
          break;
        case 5:
          playerClicks(2)
          break;
        case 6:
          playerClicks(2)
          break;
        case 7:
          playerClicks(8)
          break;
        case 8:
          playerClicks(0)
          break;



      }
      
    
    
    
    }else if (findMissingWinningValue(lines, oPlayer, xPlayer)>=0){
  
      playerClicks(findMissingWinningValue(lines, oPlayer, xPlayer))

    }
  
    else if ( findMissingWinningValue(lines, xPlayer, oPlayer)>=0 ){
      playerClicks(findMissingWinningValue(lines, xPlayer, oPlayer))
    }
    
    else if (oPlayer.length===2){
      
      switch (oPlayer[1]){
        case 0:
          if (xPlayer.includes(6)){
            playerClicks(randomMove)
          } else{
          playerClicks(6)}
          break;
        case 1:
          if (xPlayer.includes(2)){
            playerClicks(randomMove)
          } else{
          playerClicks(2)}
          break;
        case 2:
          if (xPlayer.includes(0)){
            playerClicks(randomMove)
          } else{
          playerClicks(0)}
          break;
        case 3:
          if (xPlayer.includes(0)){
            playerClicks(randomMove)
          } else{
          playerClicks(0)}
          break;
        case 5:
          if (xPlayer.includes(2)){
            playerClicks(randomMove)
          } else{
          playerClicks(2)}
          break;
        case 6:
          if (xPlayer.includes(7)){
            playerClicks(randomMove)
          } else{
          playerClicks(7)}
          break;
        case 7:
          if (xPlayer.includes(8)){
            playerClicks(randomMove)
          } else{
          playerClicks(8)}
          break;
        case 8:
          if (xPlayer.includes(5)){
            playerClicks(randomMove)
          } else{
          playerClicks(5)}
          break;



      }
    }
    else {
    playerClicks(randomMove);}
  };





  const makeComputerMoveMedium = () => {
    const emptySquares = squares.reduce((acc, value, index) => {
      if (value === null) {
        return [...acc, index];
      }
      return acc;
    }, []);
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const randomMove = emptySquares[randomIndex];
    if ( findMissingWinningValue(lines, xPlayer, oPlayer)>=0 ){
      playerClicks(findMissingWinningValue(lines, xPlayer, oPlayer))
    } else {
    playerClicks(randomMove);}
  };




  function findMissingWinningValue(lines, arrayToCheck, computerArray) {
    let missingValues = [];
    for (let i = 0; i < lines.length; i++) {
      const subArray = lines[i];
      let matchingCount = 0;
      let missingValue = null;
      for (let j = 0; j < subArray.length; j++) {
        const value = subArray[j];
        if (arrayToCheck.includes(value)) {
          matchingCount++;
        } else {
          missingValue = value;
        }
        if (matchingCount === 2 && missingValue !== null) {
          missingValues.push(missingValue);
        }
      }
    }
    const targetValue = missingValues.filter(value => !computerArray.includes(value))[0]
    return targetValue
  }

   
  const makeComputerMoveEasy = () => {
    const emptySquares = squares.reduce((acc, value, index) => {
      if (value === null) {
        return [...acc, index];
      }
      return acc;
    }, []);
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const randomMove = emptySquares[randomIndex];

    playerClicks(randomMove);
  };



  const makeComputerMoveHard = () => {
    const emptySquares = squares.reduce((acc, value, index) => {
      if (value === null) {
        return [...acc, index];
      }
      return acc;
    }, []);
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    console.log('computer move hard');
    const randomMove = emptySquares[randomIndex];
    if (emptySquares.includes(4)){
      playerClicks(4)
    }else if (findMissingWinningValue(lines, oPlayer, xPlayer)>=0){
  
      playerClicks(findMissingWinningValue(lines, oPlayer, xPlayer))

    }
  
    else if ( findMissingWinningValue(lines, xPlayer, oPlayer)>=0 ){
      playerClicks(findMissingWinningValue(lines, xPlayer, oPlayer))
    } else {
    playerClicks(randomMove);}
  };

  


  const turnIcon = () => {return ((!hasAWinner && numberOfClicks % 2 === 1 && difficulty <4 )||(!hasAWinner && numberOfClicks % 2 === 0 && difficulty ===4 )) ? icons[otherIconChoice] : icons[playerIconChoice]}


  const turnText = () => {return ((!hasAWinner && numberOfClicks % 2 === 1 && difficulty <4 )||(!hasAWinner && numberOfClicks % 2 === 0 && difficulty ===4 )) ? "It is "+names[otherIconChoice] + "'s  turn" :"It is "+ names[playerIconChoice] +"'s turn"}

  return (
    <>
    <h1><span className="title">Tic Tac Toe</span></h1> <div className="gameBoard">
    {difficulty ===null?<Difficulty playerDifficultyChoice = {handleDifficultyChoice}/>:
     playerIconChoice===null?
     <Choosing playerIconChoice = {handleIconChoice} />: otherIconChoice===null ?
     <Choosing2 otherIconChoice = {handleOtherChoice}  first = {playerIconChoice===0?4:0}
       second = {playerIconChoice===1?4:1}  third = {playerIconChoice===2?4:2}
       fourth = {playerIconChoice===3?4:3}
     />:
     squares.map((value, index) => {
          return <Square
          key={index}
          index={index}
          value={value}
          // passes function through to component for use
          playerClicks={playerClicks}
          />
        })}
        
        {hasAWinner &&   <>
          <div className='winMessage'>
            <div className = "winText"> {theWinner} won the game!</div>
            <button className="button" onClick={() => myRefreshPage()}>Restart?</button>
            <button className="button" onClick={() => myRechoosePage()}>Rechoose??</button>
          </div>
          </>}
          {numberOfClicks===0 && !hasAWinner&& playerIconChoice != null && otherIconChoice !=null? <div className='turn'> { difficulty<4?icons[playerIconChoice]:icons[4]}{difficulty>=4?<p>Goes First!</p>:<p>Go first!</p> }</div>:null}
        
          {numberOfClicks > 0 && !hasAWinner&& playerIconChoice != null ? <div className='turn'>
          
          {<span className='small'>{turnIcon()}</span> }
          {turnText() }
          </div>:null}
      </div>
    </>
  )
}

export default App























//jesus will get the 2 squares





















































//its a cube thing