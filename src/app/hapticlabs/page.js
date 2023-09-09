
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        {/* <img src="./media/hapticlabs.png" className='page-hero'/> */}
        <h1>Hapticlabs — Highlights of freelance work.</h1>
        
        <p>This is a collection of prototypes and demos I built for Hapticlabs, a company creating a no-code tool for exploring haptics. The purpose of the demos is to explore but also showcase functionalities, especially regarding integration into other software. </p>

        <h3>Unity</h3>
        <p>Coded an integration for Unity. Trigger haptics on grab, push, bubble pop and stretch. </p>
        <video src="./media/hapticlabs_unity.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
          
        <h3>TouchDesigner</h3>
        <p>Coded an integration for TouchDesigner. The demo shows dynamic haptics responding to sound. </p>
        <video src="./media/hapticlabs_touchdesigner.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        
        <h3>ProtoPie</h3>
        <p>Haptics controlled through ProtoPie Connect, varying in intensity and frequency. </p>
        <video src="./media/hapticlabs_protopie.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        


      </div>
    )
}