
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="page">
      <Close />
      <h1>Hapticlabs — Highlights of freelance work.</h1>

      <p>This is a collection of prototypes and demos I built for Hapticlabs, a company creating a no-code tool for exploring haptics. The purpose of the demos is to explore but also showcase functionalities, especially regarding integration into other software. <u><a href='https://www.github.com/HapticlabsIO' target='blank'>Check them on GitHub</a></u> </p>

      <h3>Unity</h3>
      <p>Created an integration and demo for Unity. Trigger haptics on grab, push, bubble pop and stretch. Used at various conferences to explain the Hapticlabs eco-system.</p>
      <video src="./media/hapticlabs_unity.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
      <Image src="/media/hapticlabs_conference.jpg" width={1280} height={720} />

      <h3>TouchDesigner</h3>
      <p>Coded an integration for TouchDesigner. The demo shows dynamic haptics responding to sound. </p>
      <video src="./media/hapticlabs_touchdesigner.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>

      <h3>M5 Dial</h3>
      <p>Designed and coded a UI demo for the M5 Dial triggering different haptics patters.</p>
      <video src="./media/hapticlabs_m5.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>


      <h3>ProtoPie</h3>
      <p>Haptics controlled through ProtoPie Connect, varying in intensity and frequency.</p>
      <video src="./media/hapticlabs_protopie.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>

      <h3>Adafruit DRV2605</h3>
      <p>Using a tilt sensor to trigger haptics designed in Hapticlabs Studio, using the Adafruit DRV2605 instead of the Hapticlabs Satellite.</p>
      <video src="./media/hapticlabs_arduino.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>

    </div>
  )
}