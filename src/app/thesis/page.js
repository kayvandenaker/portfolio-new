
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        {/* <img src="./media/archetype_banner_big.png" className='page-hero'/> */}
        <h1>Intentional Spaces — Physical AI as an interaction design material.</h1>
        <h3>In short</h3>
        <p>Intentional Spaces digs into what physical AI as a material means for the world of interaction design. It aims to explore the possibilities and opportunities that arise when a space understands, reasons, and interacts with the people and things inside of it. How our experiences with our environment change, and our relationship with technology transforms through physical AI. 

          {/* <br/><br/>
          If you're interested or want to chat about it, feel free to shoot an <u><a href="mailto:kayvandenaker@gmail.com" target="_blank">email</a></u>. */}
          </p>
          <blockquote>As AI understands more of the physical world, it enables us to make sense of our surroundings in new and easier ways.</blockquote>
          <h3>Partner</h3>
          <p>
          Intentional Spaces is a collaboration with Archetype AI, a San-Francisco based startup born out of Google's ATAP department (project Soli). Archetype AI leads the way in developing a Large Behavior Model, which makes sense of the physical world around us by fusing sensor data with natural language. Check the video bellow for more info!


        </p>
          <iframe src="https://www.youtube.com/embed/HnUc-x6yWrI?si=fpYkflUWoy3t-tbb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          {/* <br/><br/> */}

          <div className='context quarter'>
            <div>
              <h4>Project Info</h4> 
              6 months, spring 2024<br/>
              Master Graduation Project<br/>  
              <a href='https://www.uid.umu.se/en/' target="_blank">Umeå Institute of Design</a>
            </div>
            <div><h4>Partner</h4> <a href='https://www.archetypeai.io/' target="_blank">Archetype AI</a></div>
          </div>


          <h1>Explorations</h1>

          <h3>Zero-Shot Object Detection</h3>
          <p>Hand overlapping with input prompts to look for "a photo of a pen".</p>
          <blockquote>We should not look at models in silos, rather at glueing the right ones together, leveraging their unique qualities.</blockquote>
          <img src="./media/thesis/pen2.png"/>
          <div className='image-details'>MediaPipe and OwlViT (Python).</div>


          <h3>Accelerometer Analysis</h3>
          <p>LLM making sense of raw sensor data.</p>
          <blockquote>The more context an LLM has of data, the more accurately it can reason about it.</blockquote>
          <video src="./media/thesis/imu.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Adafruit Feather Sense with OpenAI's LLM (Python).</div>
          

          <h3>Haptic Glove</h3>
          <p>Feedback through haptics, incorrect is a quick double pulse, correct is a slow single pulse.</p>
          <blockquote>Translating one sense into another, vision into haptics.</blockquote>
          <video src="./media/thesis/haptics.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>MediaPipe, YOLO v8 and Hapticlabs (Python).</div>

          <h3>Stethoscope</h3>
          <p>Understand the patient together with AI. Stay in the moment with the other person, while listening to the heart beat and getting insights from the AI.</p>
          <blockquote>Empowering humans to stay at the centre, instead of replacing them.</blockquote>
          <video src="./media/thesis/stethoscope.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>A01 Summarize API, OpenAI's LLM/TTS, OpenCV, Librosa and Arduino (Python).</div>

          <h3>Binoculars</h3>
          <p>AI powered depth camera. Switch between color and depth view, and get insights from the AI about the main object in the viewport.</p>
          <blockquote>AI makes sense of the world in a different way.</blockquote>
          <video src="./media/thesis/binoculars.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>A01 Summarize API, iPhone's LiDAR and Adafruit Feather (Swift).</div>

          <h3>Sketch Assistant</h3>
          <p>What if you could sketch with AI together in the physical world? Using traditional tools with an AI layer projected on top.</p>
          <blockquote>AI can inspire us, if we give it space to do so.</blockquote>
          <video src="./media/thesis/sketch.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Latent Consistency Model, Projector and Adafruit Feather (TouchDesigner).</div>

          <h3>Dynamic Actuators</h3>
          <p>An LLM deciding what interaction is suitable for the context and the prompt. It can communicate to the person through the desk lamp, the fan, the waving arm and/or the speaker.</p>
          <blockquote>AI can reason about suitable interactions, with enough context. The relation becomes dynamic, the AI can move from background to foreground, from agent to instrument.</blockquote>
          <video src="./media/thesis/dynamic_actuators.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>A01 Summarize API, OpenAI's LLM and Arduino (Python).</div>

          <h3>AI as a 6th sense</h3>
          <p>What if the space understands your intention, and it could let you feel the relevant information of an object when you interact with it, like a 6th sense. <br/><br/>In this example, a person wants to know if the parcel might be damaged. The AI will pick the most relevant history of the sensor data, and show it through haptics to give the person an understanding of how the parcel was handled, and whether it might be damaged or not.</p>
          <blockquote> Without changing an object, a whole new personalised set of interactions to make sense of them in their context comes into existence.</blockquote>
          <video src="./media/thesis/box.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Hapticlabs, OpenAI's LLM and Adafruit Feather (Python).</div>

          <h3>Physical context as prompt</h3>
          <p>
            The doctor examines the patient's knee, the AI comprehends this intricate context and generates insights on demand based on all available data – for example medical records, history and scans. 
            <br/><br/> 
            The doctor can express its need for assistance by looking at the screen, indicating he wants the AI to share its insights through that actuator. Subtle facial expressions can be used to get new suggestions, or enlarge them.
          </p>
          <blockquote>When AI can sense our physical context, it can reason about our intention in that moment – with those people, interacting with those object – and support accordingly.</blockquote>
          <video src="./media/thesis/medical.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>MediaPipe Face Landmarker (Node.js).</div>

          <h3>Recap</h3>
          <p>
          The series of interventions present a glimpse into the landscape of interactions enabled by physical AI. What it could be like to co-exist with an autonomous, social, reactive and pro-active entity that interacts with us in the physical world.
          </p>
          <video src="./media/thesis/reflection1.mp4" type="video/mp4" autoPlay={false} controls muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>What if AI understands the world around us?</div>
            {/* <blockquote> */}

              <p>

            Consider that all things have character, even if they don't. Don't underestimate human complexity, emotions, moods, cultures and ethics when working with AI.
            <br/>
            <br/>
            Still curious to learn more? Check out the <u><a href="https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1867426&dswid=-1567" target="_blank">full report</a></u> or listen to the podcast bellow, generated by NotebookLM.
              </p>

              <iframe
                className='spotify'
                src="https://open.spotify.com/embed/episode/3ZFOilD6yrIwDd8PrUouJt?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            {/* </blockquote> */}
          <Nav />


      </div>
    )
}