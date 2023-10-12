
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Shader Noise</h1>
          <p>Using shaders to generate colorful animations. Made using various noise textures and gradients in Blender.</p>
        </div>
        <video src="./media/colors.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/colors.png"/>
        <Nav />
      </div>
    )
}