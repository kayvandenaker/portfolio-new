
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <img src="./media/bmw/bmw.jpg" className='page-hero'/>
        <h1>BMW Group — Highlights of my work as creative technologist.</h1>
          <p></p>
          <h3>Summary</h3>
          <p>My main role within BMW Group was to explore, iterate and validate design proposals early in the process of the concept car department. 
            I often found myself with designers, artists, composers and engineers tinkering to make our ideas experience-able. 
            I worked with various hard- and software tools such as Arduino, Kinect, Unity, MadMapper, Leap Motion, TouchDesigner and ProtoPie. 
            
          <br/><br/>
            The process pictures are under NDA, so these are only the public visuals.
          </p>
          
          <div className='quote'>
            <div className='profile' style={{backgroundImage: "url('./media/quotes/daniel.jpg')"}}></div>
            <div>
                “Kay did a fantastic job within our design team! He helped us shaping future in-car interactions with tons of mockups ( sketched, modeled, 3D Printed, soldered, programmed, iterated). Kay matched perfectly in our team - his behavior was always a professional, nice and appreciated one.
                His skills were already outstanding and even new tools didn’t scared him at all - with the help of team members, tutorials and manuals he showed a perfect learning curve.
                We hope he comes back for his next internship or directly applies for a job!” — Daniel Fischer, UX/UI Designer BMW Group
            </div>
          </div>
          <div className='context quarter'>
            <div><h4>Context</h4> 6 months, spring 2021<br/>  Internship<br/>  <a href='https://www.bmwgroup.com/' target="_blank">BMW Group</a><br/></div>
            <div><h4>Supervisor</h4>Daniel Fischer</div>
          </div>

          <h1>What I worked on</h1>

          <h3>Dashboard animation</h3>
          <p>I was end responsible for the dashboard particle animation; initially I explored various ways of mapping light into the crystal and later, together with artists and composers, creating interactive animations in Unity VFX while integrating the gesture tracking of the engineering team. Low-fi mockups were made throughout the process using Leap Motion, Kinect and TouchDesigner.</p>
          <video controls src="./media/bmw.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>
            Your browser does not support the video tag.
          </video>
          {/* <div className='half'>
            <img src="./media/bmw/crystal.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
            <img src="./media/bmw/crystal_2.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          </div> */}

          <h3>Steering Wheel</h3>
          <p>The simplistic steering wheel raised many questions regarding interaction possibilities. I created interactive prototypes of the touchpads using Arduino and capacitive touch sensors which were directly integrated into ProtoPie so the design department could quickly try out and iterate on their UI and interaction concepts.</p>
          <img src="./media/bmw/mfl.jpg"/>

          <h3>C-Pillar Lamps</h3>
          <p>The C-Pillar lamps are upcycled from old iDrive components. I received a sketch and turned that into an experience prototype using the original rotary encoder and crystal, an Arduino and a 3D printed enclosure. I created a PCB mockup, the swiveling mechanism and the (final) A-surfaces. </p>
          <img src="./media/bmw/lamp.jpg"/>

          <h3>Art Bar</h3>
          <p>The Art Bar was something that was never done before, so we had to try how such component could function. I 3D printed the lower part of the Art Bar and made a mockup for the illuminated capacitive touch sensors and color recognition camera.</p>
          <img src="./media/bmw/artbar.jpg"/>

          <h3>Free-form Hover Displays</h3>
          <p>Unfortunately, this project is still ongoing so I cannot share much, but throughout my internship I researched various technologies for free-form hover touch displays with the goal to easily and quickly explore display shapes and interactions in interior mockups.</p>
          <img src="./media/bmw/hover.jpg"/>
          <span className='details'>image source: www.cnet.com/tech/mobile/touchless-touch-screen-gives-you-control-without-contact-video/</span>

          <Nav />
      </div>
    )
}