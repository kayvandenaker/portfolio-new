
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Entering Digital</h1>
          <p>Distortion as the physical enters the digital world. Loads of particles make the lines in Unity VFX, LeapMotion for the hand tracking.</p>
        </div>
        <video src="./media/lines.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/lines.jpg"/>
        <Nav />
      </div>
    )
}