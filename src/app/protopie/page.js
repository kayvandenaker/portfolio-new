
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <h1>ProtoPie — Highlights of freelance work.</h1>
        
        <p>This is a collection of prototypes and demos I built for ProtoPie, a company creating a no-code prototyping tool. </p>
        <h3>Demo: APIs and Parsing JSON</h3>
        <p>Showcasing the new parse json function by fetching data from Spotify and Weather API and feeding it into a car UI. <u><a href='https://www.protopie.io/blog/how-to-integrate-data-into-prototypes' target='blank'>Read tutorial</a></u></p>
        <video src="./media/protopie_json.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          
        <h3>Demo: Voice Interactions and Connect</h3>
        <p>Showcasing voice interactions across devices through a Google-style remote laundry controller. <u><a href='https://www.protopie.io/blog/voice-and-cross-device-prototyping' target='blank'>Read tutorial</a></u></p>
        <video src="./media/protopie_laundry.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <Nav />
      </div>
    )
}