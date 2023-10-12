
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Tactile Slider</h1>
          <p>Slider texture exploration as media controller. Arduino with Adafruit MPR121 capacitive touch sensor, Processing for the album animations.</p>
        </div>
        <video src="./media/slider.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/slider.jpg"/>
        <Nav />
      </div>
    )
}