"use client";
import '../css/main.css'
import '../css/page.css'

import { useState } from "react";

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

import Head from '../components/Head.js';

export default function Page() {

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);


    return (
      <div className="page">
        <Close />
        {/* <div className='page-hero'> */}
        <h1>Tech Explorations</h1>
        <p>A collection of side projects over the years.</p>
          <h3>Pixel Art Generator</h3>
          <p>Prompting the ChatGPT API to draw an image in an 8x8 grid, outputting it on an LED matrix through Serial.
            Built with React and Arduino, in collaboration with <a href="https://lukasmoro.com" target="_blank">Lukas Moro</a>.</p>
        {/* </div> */}
        <video src="./media/gpt_smile.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/gpt_screenshot.png"/>
        <br/>
        <div className='half'>
          <div>
            "Heart"<br/><br/>
            <img src="./media/gpt_heart_square.jpg"/>
          </div>
          <div>
            "Letter A"<br/><br/>
            <img src="./media/gpt_letter_a.jpg"/>
          </div>
          <div>
            "Smiley"<br/><br/>
            <img src="./media/gpt_smiley.jpg"/>
          </div>
          <div>
            "Space Invader"<br/><br/>
            <img src="./media/gpt_invader.jpg"/>
          </div>
        </div>

        <h3>Timer</h3>
        <p>Micro interaction to go from 0:59 to 1:00, made with SwiftUI.</p>
        <video src="./media/timer_swift.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/timer.png"/>


        <h3>3D Head</h3>
        <p>Mouse tracking head made with React Three Fiber and post processing. 3D created with a Lidar scanner, cleaned with MeshMixer and Blender. Hover over it!</p>
        <div className='head-container' onMouseMove={(e) => {setMouseX(e.clientX); setMouseY(e.clientY)}}>
          <Head mouseX={mouseX} mouseY={mouseY}/>
        </div>

        <h3>Entering Digital</h3>
        <p>Distortion as the physical enters the digital world. Loads of particles make the lines in Unity VFX, LeapMotion for the hand tracking.</p>
        <video src="./media/lines.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/lines.jpg"/>

        <h3>Shader Noise</h3>
        <p>Using shaders to generate colorful animations. Made using various noise textures and gradients in Blender.</p>
        <video src="./media/colors.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/colors.png"/>
          

        <h3>Cupra Ferro</h3>
        <p>In a collaboration with Cupra, we explored how a ferro fluid could co-exist in a vehicle, and represent intelligence in a more abstract way. It moves throughout the vehicle, changes shape and expresses intionality to express itself to the humans inside of the vehicle.
        {/* <br/><br/>
          <ul>
            <li>Driving: The user changes the shape of the steering wheel when going from driving to speed mode, the driving information moves accordingly from the dashboard to the HUD.</li>
            <li>Autonomous: The driver enters the centre console when requesting driving information from the fluid about the autonomous journey, the fluid shows its shift of focus accordingly. </li>
          </ul> */}
          </p>
          {/* <br/><br/>The user changes the shape of the steering wheel when going from driving to speed mode, the driving information moves accordingly from the dashboard to the HUD.
        <br/><br/>The driver enters the centre console when requesting driving information from the fluid about the autonomous journey, the fluid shows its shift of focus accordingly.  */}
          
         
        
        <div className='half'>
          <div>
            <video src="./media/cupra_driving_bw.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
            <div className='image-details'>Autonomous -&#62; Driving -&#62; Speed</div>
          </div>
          <div>
            <video src="./media/cupra_autonomous_bw.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
            <div className='image-details'>Autonomous -&#62; Touching -&#62; Status</div>
          </div>
        </div>

        <p>
          I created the ferro fluid animations using Blender, combined them with the interface elements in ProtoPie, and projection mapped that onto the physical model. The UI was done by <a href="https://mariespreitzer.com/" target="_blank">Marie Spreitzer</a>, the CAD by Nikita Zatonskiy.
          <br/><br/>
          We experimented with various types of ferro fluids, trying different proportions of the chemicals and carrying liquids to explore the behavior and aesthetics of this material.</p>
        <video style={{filter: "grayscale(1)"}}  src="./media/cupra_ferro_1.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
        <div className='image-details'>Ferro fluid made using iron powder and motor oil, on a speaker magnet.</div>



        <h3>Kinect Kitchen</h3>
        <p>Projection mapping and image processing in TouchDesigner, Kinect for body tracking.</p>
        <video src="./media/kinect.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/kinect.jpg"/>


        <h3>MIDI Controller</h3>
        <p>Arduino project from back in 2015, a MIDI Controller for FL Studio. Illuminated arcade buttons, potentionmeters and 5 segment LED filter level indicators.</p>
        <img src="./media/midi.jpg"/>
        <Nav />
      </div>
    )
}