import React from 'react'
import loading from "../images/Runningdog.gif"
import "../CSSfolder/Loading.css"

const Loading = () => {
  return (
    <div>
    <div className="loading d-flex justify-content-center">
        <img src={loading} className="img-fluid" alt="loading"></img>
      </div>
      
    </div>
  )
}

export default Loading
