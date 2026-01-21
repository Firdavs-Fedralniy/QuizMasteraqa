import React, { useContext } from "react"
import { GameContext } from "../GamerProvider/GameProvider"
import myVideo from "../assets/tug-of-war.mp4"

function Video({children}) {
  const { ropePosition } = useContext(GameContext)

  return (
    
    <div className="video-wrapper">
      {children}
      <video
      src={myVideo}
        className="video"
        style={{
          transform: `translateX(${ropePosition * 70}px)`
        }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source  type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
