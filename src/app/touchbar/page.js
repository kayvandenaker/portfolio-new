
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>IR Touchbar</h1>
          <p>An interaction exploration of an infrared touch sensor in combination with MadMapper and ProtoPie. Using textured fabric to touch and projection map onto.</p>
        </div>
        <video className='portrait' src="./media/touchbar.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/touchbar2.jpeg"/>
          

      </div>
    )
}