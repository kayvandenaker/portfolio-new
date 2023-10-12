
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Kinect Kitchen</h1>
          <p>Projection mapping and image processing in TouchDesigner, Kinect for body tracking.</p>
        </div>
        <video src="./media/kinect.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/kinect.jpg"/>
        <Nav />
      </div>
    )
}