
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <img src="./media/tiles/tiles.jpeg" className='page-hero'/>
        <h1>Tiles — Connecting with your music collection.</h1>
        <h3>Problem</h3>
        <p>Modern music listening experiences often lack suspense. The black box present in modern technologies such as mobile phones abstract away what's going on behind the interface and don't require any process to interact with; any song in the world is just one click away, no sonic feedback, no haptic feedback and flat visual feedback.</p>
        <h3>Solution</h3>
          <p>
            Tiles is an exploration of how a tangible interface in combination with sounds can convey the message of music listening as the sophisticated process it was intended to be.
            <blockquote>By mechanically moving the top down, music moves from the collection into the player and presents the user with album info and playback controls.</blockquote>
          </p>

          <video src="./media/tiles/video.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Navigating the music collection, queuing a song and increasing volume.</div>

          <p> Our approach is a device which puts emphasis on the albums, their artworks and information. In contrast to music streaming apps, Tiles provokes a careful selection of music and elegant interactions to enjoy your favorite tunes.</p>
          
          <div className='context quarter'>
            <div>
              <h4>Project Info</h4> 
              3 weeks, spring 2022<br/>
              Sound Design Course<br/>  
              <a href='https://www.uid.umu.se/en/' target="_blank">Umeå Institute of Design</a>
            </div>
            <div>
              <h4>Team</h4>
              <a href="https://emilechuffart.com" target="_blank">Emile Chuffart</a><br/> 
              <a href="https://www.tobias-ertel.de" target="_blank">Tobias Ertel</a><br/> 
              <a href="https://www.koolsson.com" target="_blank">Oscar Olsson</a>
            </div>
          </div>
          
          {/* <h2>Concept Video</h2>
          <br/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8Zwa_QQow_Y?rel=0" frameBorder="0" allowFullScreen="1"></iframe> */}
          
          <h1>Highlights & Contribution</h1>

          <h3>Experience Prototyping</h3>

          <p>I made a rough mockup of the interactions with the device in ProtoPie. This allowed to quickly explore, communicate and iterate interface ideas.</p>
          <img src="./media/tiles/protopie.png"/>

          <p>I created a physical experience prototype to try out the tangible interface in combination with the sounds and the graphical user interface. </p>
          <img src="./media/tiles/prototype.jpeg"/>

          <p>A projector was used to show what the screens would display. The capacitive touch sensor, rotary encoder and potentiometer communicate with ProtoPie through an Arduino emulating keystrokes.</p>
          <div className='half'>
            <video src="./media/tiles/slider.mp4" type="video/mp4" autoPlay={true} muted loop playsInline controls>Your browser does not support the video tag.</video>
            <video src="./media/tiles/cue.mp4" type="video/mp4" autoPlay={true} muted loop playsInline controls>Your browser does not support the video tag.</video>
          </div>
          <div className='image-details'>Turn up the volume to hear the audio.</div>

          <h3>Model Making</h3>
          <p>This project was a collaboration with the Product Design MFA, so the model you see bellow is mostly their work. I helped with the mechanical parts of the mockup and the video editting.</p>
          <img src="./media/tiles/process.jpeg"/>
          <img src="./media/tiles/render2.jpeg"/>
          <img src="./media/tiles/back.jpg"/>



      </div>
    )
}