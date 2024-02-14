
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <h1>Cupra Ferro — A fluid intelligence co-existing in a vehicle.</h1>
        <h3>Scope</h3>
        <p>Together with Cupra and the Transportation Design program at UID, we explored what future sensorial in-car experiences could look like.</p>
        <h3>Experience Prototype</h3>
        <p>We explored how a ferro fluid could co-exist in a vehicle, and represent intelligence in a more abstract way. It moves throughout the vehicle, changes shape and expresses intionality to express itself to the humans inside of the vehicle.<br/><br/>The user changes the shape of the steering wheel when going from driving to speed mode, the driving information moves accordingly from the dashboard to the HUD. </p>
        
        <video src="./media/cupra_driving_bw.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
        <div className='image-details'>Autonomous -&#62; Driving -&#62; Speed</div>

        <p>The driver enters the centre console when requesting driving information from the fluid about the autonomous journey, the fluid shows its shift of focus accordingly. </p>
        
        <video src="./media/cupra_autonomous_bw.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
        <div className='image-details'>Autonomous -&#62; Touching -&#62; Status</div>
        
        <p>I created the ferro fluid animations using Blender, combined them with the interface elements in ProtoPie, and projection mapped that onto the physical model. The UI was done by Marie, the CAD by Nikita.</p>

        <h3>Ferro Fluid Explorations</h3>
        <p>We experimented with various types of ferro fluids, trying different proportions of the chemicals and carrying liquids to explore the behavior and aesthetics of this material.</p>
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

        <div className='context quarter'>
          <div><h4>Project Info</h4> 10 weeks, autumn 2023<br/>  Interaction Concept<br/>  <a href='https://www.uid.umu.se/en/' target="_blank">Umeå Institute of Design</a><br/></div>
          <div><h4>Team</h4>
            <a href="https://mariespreitzer.com/" target="_blank">Marie Spreitzer</a><br/> 
            <a href="" target="_blank">Nikitia Zatonskiy</a>
            </div>
          <div><h4>Partner</h4> <a href='https://www.cupraofficial.com/' target="_blank">Cupra</a></div>
        </div>
        
        <Nav />
      </div>
    )
}