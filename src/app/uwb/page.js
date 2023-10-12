
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Radar Presence</h1>
          <p>Exploring the possibilities of ultra-wideband radar to detect human presence. Novelda UWB X4 sensor is talking to ProtoPie through a custom Python bridge. ProtoPie is visualizing the data and controlling a NeoPixel through an Adafruit Feather M0.</p>
        </div>
        <video src="./media/uwb.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <video src="./media/uwb2.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <Nav />
      </div>
    )
}