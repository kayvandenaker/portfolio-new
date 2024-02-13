
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        {/* <img src="./media/cupra_render.png" className='page-hero'/> */}
        <h1>Cupra Ferro — A fluid intelligence co-existing in a vehicle.</h1>
        <h3>Opportunity</h3>
        <p>Together with Cupra and master students from the Transportation Design program at UID, we explored what future sensorial in-car experiences could look like.</p>
        <h3>Outcome</h3>
         <p>We explored how a ferro fluid could co-exist in a vehicle, and represent intelligence in an intuitive way. It moves throughout the vehicle, changes shape and expresses intionality to guide the humans inside of the vehicle.</p>
        {/* <div className='half'>
            <div> */}
              <video src="./media/cupra_driving_bw.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
              <div className='image-details'>Autonomous -&#62; Driving -&#62; Speed</div>
            {/* </div>
            <div> */}
              <video src="./media/cupra_autonomous_bw.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
              <div className='image-details'>Autonomous -&#62; Touching -&#62; Status</div>
            {/* </div>
          </div> */}

        <div className='context quarter'>
            <div><h4>Project Info</h4> 10 weeks, autumn 2023<br/>  Interaction Concept<br/>  <a href='https://www.uid.umu.se/en/' target="_blank">Umeå Institute of Design</a><br/></div>
            <div><h4>Team</h4>
              <a href="https://mariespreitzer.com/" target="_blank">Marie Spreitzer</a><br/> 
              <a href="" target="_blank">Nikitia Zatonskiy</a>
              </div>
            <div><h4>Partner</h4> <a href='https://www.cupraofficial.com/' target="_blank">Cupra</a></div>
          </div>
          
          <h1>Highlights & Contribution</h1>

          <h3>Ferro Fluid</h3>
          <p>We experimented with various types of ferro fluids, trying different proportions of the chemicals and carrying liquids.</p>
          <video style={{filter: "grayscale(1)"}}  src="./media/cupra_ferro_1.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Ferro fluid made using iron powder and motor oil, on a speaker magnet.</div>
          

          <div className='half'>
            <div>
              <video style={{filter: "grayscale(1)"}} src="./media/cupra_ferro_2.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
            </div>
            <div>
              <video style={{filter: "grayscale(1)"}} src="./media/cupra_ferro_3.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
            </div>
          </div>
          <h3>Modes</h3>
          <p>The ferro fluid has different shapes and behavior depending on the driving mode.</p>

        <img src="./media/cupra_modes.png"/>
{/* 
          <div className='half'>
            <div>
              <img src="./media/cupra_steering_drive.png"/>
              <div className='image-details'>Drive</div>
            </div>
            <div>
              <img src="./media/cupra_steering_speed.png"/>
              <div className='image-details'>Speed</div>
            </div>
          </div> */}


          <h3>Experience Prototyping</h3>
          <p>I rendered the ferro fluid motions using Blender, on top of the 3D model (by Nikita). These renders are then combined with the interface elements (by Marie) in ProtoPie, and projection mapped onto the physical model (see intro).<br/><br/>The steering wheel can change shape to accomodate different driving modes.</p>

         <video src="./media/cupra_driving_render.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Autonomous, to driving, to speed.</div>

          <p>Inside the centre console lives this entity that responds to touch and squeeze.</p>
          <video src="./media/cupra_autonomous_render.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Autonomous, to being noticed, to status. (bottom left is inside of the center console)</div>

          
          <Nav />
      </div>
    )
}