
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="page">
      <Close />
      <Image src="/media/tiles/tiles.jpeg" className='page-hero' width={1280} height={720} />
      <h1>Tiles — Connecting with your music collection.</h1>
      <h3>Problem</h3>
      <p>Modern music listening experiences often lack suspense. The black box present in modern technologies such as mobile phones abstract away what's going on behind the interface and don't require any process to interact with. Any song in the world is just one click away, no sonic feedback, no haptic feedback and flat visual feedback.</p>
      <h3>Solution</h3>
      <p>
        Tiles is an exploration of how a tangible interface could present music listening as the sophisticated process it was intended to be.
      </p>
      <blockquote>By mechanically moving the top down, music moves from the collection into the player and presents the user with album info and playback controls.</blockquote>

      <video src="./media/tiles/video.mp4" type="video/mp4" controls autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
      <div className='image-details'>Navigating the music collection, queuing a song and increasing volume.</div>

      <p> Our approach is a device which puts emphasis on the albums, their artworks and information. In contrast to music streaming apps, Tiles provokes a careful selection of music and elegant interactions to enjoy your favorite songs.</p>

      <div className='context quarter'>
        <div>
          <h4>Project Info</h4>
          3 weeks, spring 2022<br />
          Sound Design Course<br />
          <a href='https://www.uid.umu.se/en/' target="_blank">Umeå Institute of Design</a>
        </div>
        <div>
          <h4>Team</h4>
          <a href="https://emilechuffart.com" target="_blank">Emile Chuffart</a><br />
          <a href="https://www.tobias-ertel.de" target="_blank">Tobias Ertel</a><br />
          <a href="https://www.koolsson.com" target="_blank">Oscar Olsson</a>
        </div>
      </div>

      {/* <h2>Concept Video</h2>
          <br/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8Zwa_QQow_Y?rel=0" frameBorder="0" allowFullScreen="1"></iframe> */}

      <h1>Highlights & Contribution</h1>

      <h3>Experience Prototyping</h3>

      <p>Initially, I explored a tangible slider as a media controller, navigating through albums.</p>
      <video src="./media/slider.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>

      <p>Then a rough mockup of the interactions with the device was made in ProtoPie. This allowed to quickly explore, experience and iterate interface ideas.</p>
      <Image src="/media/tiles/protopie.png" width={1280} height={720} />

      <p>I created a physical experience prototype to try out the tangible interface in combination with the sounds and the graphical user interface. </p>
      <Image src="/media/tiles/prototype.jpeg" width={1280} height={720} />

      <p>A projector was used to show what the screens would display. The electronics communicate with ProtoPie through an Arduino.</p>
      <div className='half'>
        <video src="./media/tiles/slider.mp4" type="video/mp4" autoPlay={true} muted loop playsInline controls>Your browser does not support the video tag.</video>
        <video src="./media/tiles/cue.mp4" type="video/mp4" autoPlay={true} muted loop playsInline controls>Your browser does not support the video tag.</video>
      </div>
      <div className='image-details'>Turn up the volume to hear the audio.</div>

      <h3>Model Making</h3>
      <p>This project was a collaboration with the Product Design MFA, the mockup bellow is mostly their work. I helped shaping the mechanical parts and did the video editting.</p>
      <Image src="/media/tiles/process.jpeg" width={1280} height={720} />
      <Image src="/media/tiles/render2.jpeg" width={1280} height={720} />
      <Image src="/media/tiles/back.jpg" width={1280} height={720} />

    </div>
  )
}