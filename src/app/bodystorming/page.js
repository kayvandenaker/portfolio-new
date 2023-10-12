
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Bodystorming</h1>
          <p>Projection mapping Figma to get a quick feel for interactions, dimensions and layout. MadMapper screencapturing Figma and projected onto various projection surfaces.</p>
        </div>
        <video src="./media/bodystorming.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <video src="./media/bodystorming2.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          
        <Nav />
      </div>
    )
}