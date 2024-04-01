
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <img src="./media/archetype_banner_big.png" className='page-hero'/>
        <h1>Thesis – Physical AI as an interaction design material.</h1>
        <h3>Work In Progress</h3>
        <p>This page is a living document of the master thesis I just started – digging into what physical AI as a material means for the world of interaction design. It aims to explore the possibilities and opportunities that arise when a space understands, reasons, and interacts with the people and things inside of it. How our experiences with our environment change, and our relationship with technology transforms through physical AI. 
          
          {/* <img src="./media/archetype_overview.jpg"/>
          <div className='image-details'>Moving the stage of interacting with AI from a screen, to the world around us.</div> */}

          
          <h3>Partner</h3>
          For this project I'll be collaborating with Archetype AI, a San-Francisco based startup born out of Google's ATAP department (project Soli). Archetype AI leads the way in developing a physical AI platform called a Large Behavior Model, which makes sense of the physical world around it by looking for behavioural patterns through various sensors such as camera, microphone, radar, IMU etcetera.

          <br/><br/>
          If you're interested or want to chat about it, feel free to shoot an <u><a href="mailto:kayvandenaker@gmail.com" target="_blank">email</a></u>.

        </p>
          <div className='context quarter'>
            <div>
              <h4>Project Info</h4> 
              6 months, spring 2024<br/>
              Master Graduation Project<br/>  
              <a href='https://www.uid.umu.se/en/' target="_blank">Umeå Institute of Design</a>
            </div>
            <div><h4>Partner</h4> <a href='https://www.archetypeai.io/' target="_blank">Archetype AI</a></div>
          </div>


          <h1>So far...</h1>

          <h3>Zero-Shot Object Detection</h3>
          <p>Hand overlapping with input prompts to look for "a photo of a pen".</p>
          <img src="./media/thesis/pen.png"/>
          <div className='image-details'>MediaPipe and OwlViT.</div>


          <h3>Accelerometer Analysis</h3>
          <p>LLM making sense of raw sensor data.</p>
          <video src="./media/thesis/imu.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Adafruit Feather Sense with OpenAI's LLM (Python).</div>
          

          <h3>Haptic Glove</h3>
          <p>Giving feedback through haptics, incorrect is a quick double pulse, correct is a slower single pulse.</p>
          <video src="./media/thesis/haptics.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>MediaPipe, YOLO v8 and Hapticlabs (Python).</div>

          <h3>Stethoscope</h3>
          <p>Understand the patient together with AI. Stay in the moment with the other person, while listening to the heart beat and getting insights from the AI.</p>
          <video src="./media/thesis/stethoscope.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>A01 Summarize API, OpenAI's LLM/TTS, OpenCV, Librosa and Arduino (Python).</div>

          <h3>Binoculars</h3>
          <p>AI powered depth camera. Switch between color and depth view, and get insights from the AI about the main object in the viewport.</p>
          <video src="./media/thesis/binoculars.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>A01 Summarize API, iPhone's LiDAR and Adafruit Feather (Swift).</div>

          <h3>Sketch Assistant</h3>
          <p>What if you could sketch with AI together in the physical world? Using traditional tools with an AI layer projected on top.</p>
          <video src="./media/thesis/sketch.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Latent Consistency Model, Projector and Adafruit Feather (TouchDesigner).</div>

          <h3>Dynamic Actuators</h3>
          <p>An LLM deciding what interaction is suitable for the context and the prompt. It can communicate to the person through the desk lamp, the fan, the waving arm and/or the speaker.</p>
          <video src="./media/thesis/dynamic_actuators.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>A01 Summarize API, OpenAI's LLM and Arduino (Python).</div>

          <h3>AI as a 6th sense</h3>
          <p>What if the space understands your intention, and it could let you feel the relevant information of an object when you interact with it, like a 6th sense. <br/><br/>In this example, a person wants to know if the parcel might be damaged. The AI will pick the most relevant history of the sensor data, and show it through haptics to give the person an understanding of how the parcel was handled, and whether it might be damaged or not.</p>
          <video src="./media/thesis/box.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Hapticlabs, OpenAI's LLM and Adafruit Feather (Python).</div>

          <p>More coming soon...</p>
          
          <Nav />


      </div>
    )
}