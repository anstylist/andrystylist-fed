import React from 'react'
import './BackgroundPoints.scss'


function BackgroundPoints({ className }) {
  return (
    <div className={`glowing-box ${className}`}>
      <div className="glowing">
        <span style={{'--i': 1}} />
        <span style={{'--i': 2}} />
        <span style={{'--i': 3}} />
        <span style={{'--i': 4}} />
        <span style={{'--i': 5}} />
      </div>
      <div className="glowing">   
        <span style={{'--i': 1}} />
        <span style={{'--i': 2}} />
        <span style={{'--i': 3}} />
        <span style={{'--i': 4}} />
        <span style={{'--i': 5}} />
      </div>
      <div className="glowing">
        <span style={{'--i': 1}} />
        <span style={{'--i': 2}} />
        <span style={{'--i': 3}} />
        <span style={{'--i': 4}} />
        <span style={{'--i': 5}} />
      </div>
      <div className="glowing">
        <span style={{'--i': 1}} />
        <span style={{'--i': 2}} />
        <span style={{'--i': 3}} />
        <span style={{'--i': 4}} />
        <span style={{'--i': 5}} />
      </div>
      <div className="glowing">
        <span style={{'--i': 1}} />
        <span style={{'--i': 2}} />
        <span style={{'--i': 3}} />
        <span style={{'--i': 4}} />
        <span style={{'--i': 5}} />
      </div>
    </div>
  )
}

export default BackgroundPoints