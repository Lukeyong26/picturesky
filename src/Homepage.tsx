import React from 'react'
import Navigation from './nav/Navigation'
import Timeline from './timeline/Timeline'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage__timeline">
          <Timeline />
        </div>
    </div>
  )
}

export default Homepage