import React, { useContext } from 'react'
import { GameContext } from '../GamerProvider/GameProvider'



function StartScreen() {
     const { dispatch} = useContext(GameContext)
  return (
     <div className="start-screen">
    <h2 className="welcome">Hello! Welcome to MasterQuiz</h2>
    <h1 className="title">Please select type of game</h1>

    <div className="buttons">
      <button  disabled={true} className="btn solo" onClick={() => dispatch({ type: "soloGame" })}>
        Solo
      </button>

      <button className="btn duo"  onClick={() => dispatch({ type: "duoGame" })}>
        <a className='as' href="">DUO</a>
      </button>
    </div>
  </div>
  )
}

export default StartScreen
