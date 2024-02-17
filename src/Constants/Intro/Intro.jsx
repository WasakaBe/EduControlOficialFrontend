import React from 'react'
import './Intro.css'
import videoFile from '../../video/001.mp4';
export default function Intro() {
  const vidRef = React.useRef();
  return (
    <div>
       <div className="app__video">
            <video
              ref={vidRef}
              src={videoFile}
              type="video/mp4"
              loop
              controls={true}
              muted
            />
            </div>
    </div>
  )
}
