
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <h1>Tech Explorations</h1>
        {/* <h3>Summary</h3> */}
        <p>A collection of small side projects I worked on during my internship at Above, the bigger work is under NDA unfortunately.</p>
        
        <h3>Radar Presence</h3>
        <p>Exploring the possibilities of ultra-wideband radar to detect human presence. Novelda UWB X4 sensor is talking to ProtoPie through a custom Python bridge. ProtoPie is visualizing the data and controlling a NeoPixel through an Adafruit Feather M0.</p>
        <video src="./media/uwb.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <video src="./media/uwb2.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>


        <h3>IR Touchbar</h3>
        <p>An interaction exploration of an infrared touch sensor in combination with MadMapper and ProtoPie. Using textured fabric to touch and projection map onto.</p>
        <video src="./media/touchbar.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/touchbar2.jpeg"/>


        <h3>Bodystorming</h3>
        <p>Projection mapping Figma to get a quick feel for interactions, dimensions and layout. MadMapper screencapturing Figma and projected onto various projection surfaces.</p>
        <video src="./media/bodystorming.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <video src="./media/bodystorming2.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          
        <h3>Trackpad</h3>
        <p>An I2C trackpad visualization, Azoteq TPS65 trackpad sensor as input for ProtoPie. A platform to try different trackpads and explore material overlays.</p>
        <video src="./media/trackpad.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>

        <Nav />
      </div>
    )
}