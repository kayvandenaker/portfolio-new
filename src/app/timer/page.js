
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Timer</h1>
          <p>Micro interaction to go from 0:59 to 1:00, made with SwiftUI.</p>
        </div>
        <video className='portrait' src="./media/timer_swift.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/timer.png"/>
        <Nav />
      </div>
    )
}