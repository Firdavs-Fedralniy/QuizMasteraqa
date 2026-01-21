import React, { useContext, useEffect } from 'react'
import { GameContext } from '../GamerProvider/GameProvider'
import Time from '../assets/sd.png'

function Timer() {

    const {dispatch,timeLeft} = useContext(GameContext)
console.log( timeLeft)
   useEffect(()=>{

     if(timeLeft <= 0){
        dispatch({type:"nextQuestion"})
    }   


  const timer = setInterval(() => {
        dispatch({type: "second"})
    }, 1000);

    return () => clearInterval(timer)


   
   }, [timeLeft,dispatch])

  return (
    <div>
      <img src={Time} alt="" width={30}/> {timeLeft}
    </div>
  )
}

export default Timer
