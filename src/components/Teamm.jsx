import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../GamerProvider/GameProvider'


function Teamm({children}) {


  const [inputLeftValue,setInputLeftValue] = useState("")
  const [inputRightValue,setInputRightValue] = useState("")
  const [showModal, setShowModal] = useState(false)

  
    

    const {questions,dispatch,fetchQuestions,score,index,round} = useContext(GameContext)


let raznica = score.left - score.right

  useEffect(() => {
  if (raznica === 3 || raznica === -3) {
    setShowModal(true);

    // Отправка результата в Telegram
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData(
        JSON.stringify({
          left: score.left,
          right: score.right
        })
      );
    }
  }
}, [score]);
  

    function calculator(e){
       setInputLeftValue(prev => prev + e)
      
    }

     function rightCalculator(e){
       setInputRightValue(prev => prev + e)
      
    }


    function resetGame(){
      setShowModal(false)
       dispatch({type: "resetGame"})
    }

      function inputLeft(){
    console.log(inputLeftValue);
    let leftCorrect = questions[index.left].answer
    if(inputLeftValue == String(leftCorrect)){
      dispatch({ type: "addScore", payload: "left" })
    dispatch({ type: "nextQuestion" })
    setInputLeftValue("")
    
    }
  }



   function inputRight(){
    console.log(inputLeftValue);
    let RightCorrect = questions[index.right].answer
    if(inputRightValue == String(RightCorrect)){
      dispatch({ type: "addScore", payload: "right" })
    dispatch({ type: "nextQuestion" })
    setInputRightValue("")
    
    }
  }



     useEffect(() => {
    fetchQuestions()
  }, [])

  
    

  return (
    
    <div className='nigga'>
      
      <h2 className="title__round">Round {round}</h2>
      <form className="form" onSubmit={(e)=>{
        
        e.preventDefault()
        inputLeft()
      }}>
        
        <h2 className="team__title">1-Komanda</h2>
        <p className="team__quiz">{questions.length > 0 ? questions[index.left].question : "Loading..."}</p>
        <input type="text" name="" id="" className='team__answer' value={inputLeftValue} onChange={(e)=>{setInputLeftValue(e.target.value)}}/>
        <button className="team__btn" type='submit'>Javob</button>
        <div className="calc">
          <button type="button" onClick={() => calculator("1")}>1</button>
          <button type="button" onClick={() => calculator("2")}>2</button>
          <button type="button" onClick={() => calculator("3")}>3</button>
          <button type="button" onClick={() => calculator("4")}>4</button>
          <button type="button" onClick={() => calculator("5")}>5</button>
          <button type="button" onClick={() => calculator("6")}>6</button>
          <button type="button" onClick={() => calculator("7")}>7</button>
          <button type="button" onClick={() => calculator("8")}>8</button>
          <button type="button" onClick={() => calculator("9")}>9</button>
         <button type="button" onClick={() => calculator("0")}>0</button>

          <button
          type="button"
          onClick={() => setInputLeftValue("")}
       >
    ESC
  </button>

        </div>
        <p className="team__score">Score {score.left}</p>
      </form>

            {children}

        <form className="form red" onSubmit={(e)=>{
        e.preventDefault()
        inputRight()
      }}>
        <h2 className="team__title">2-Komanda</h2>
        <p className="team__quiz">{questions.length > 0 ? questions[index.right].question : "Loading..."}</p>
        <input type="text" name="" id="" className='team__answer' value={inputRightValue} onChange={(e)=>{setInputRightValue(e.target.value)}} />
        <button className="team__btn" type='submit'>Javob</button>
         <div className="calc">
          <button className='' type="button" onClick={() => rightCalculator("1")}>1</button>
          <button type="button" onClick={() => rightCalculator("2")}>2</button>
          <button type="button" onClick={() => rightCalculator("3")}>3</button>
          <button type="button" onClick={() => rightCalculator("4")}>4</button>
          <button type="button" onClick={() => rightCalculator("5")}>5</button>
          <button type="button" onClick={() => rightCalculator("6")}>6</button>
          <button type="button" onClick={() => rightCalculator("7")}>7</button>
          <button type="button" onClick={() => rightCalculator("8")}>8</button>
          <button type="button" onClick={() => rightCalculator("9")}>9</button>
         <button type="button" onClick={() => rightCalculator("0")}>0</button>

          <button
          type="button"
          onClick={() => setInputRightValue("")}
       >
    ESC
  </button>

        </div>
        <p className="team__score">Score {score.right}</p>
      </form>



      {showModal && (
  <div className="modal-overlay">
    <div className="modal">
      
      <h2>{raznica === 3? "Blue team" : raznica == -3 ? "Red team" : ("")} Win</h2>
      <button onClick={() => resetGame()}>OK</button>
    </div>
  </div>
)}

    </div>
  )
} 

export default Teamm
