
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Trackpad</h1>
          <p>An I2C trackpad visualization, Azoteq TPS65 trackpad sensor as input for ProtoPie. A platform to try different trackpads and explore material overlays.</p>
        </div>
        <video src="./media/trackpad.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <Nav />
      </div>
    )
}