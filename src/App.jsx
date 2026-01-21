import React, { useContext } from 'react'
import { GameContext, GameProvider } from './GamerProvider/GameProvider'
import Teamm from './components/Teamm'
import Video from './components/Video'
import Timer from './components/Timer'
import "../src/App.css"
import StartScreen from './components/StartScreen'


function Main() {
  const { gameSelect } = useContext(GameContext)

  return (
    <div>
      {gameSelect === "start" && <StartScreen />}

      {gameSelect === "duo" && (
        <div className="appas">
          <Teamm>
            <Video>
              <Timer />
            </Video>
          </Teamm>
        </div>
      )}

      {gameSelect === "solo" && (
        <div className="appas">
         {gameSelect === "solo" && (
  <div className="appas">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
      title="YouTube video player"
     
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)}

        </div>
      )}
    </div>
  )
}





function App() {
  return (
    <GameProvider>
      <Main />
    </GameProvider>
  )
}

export default App

