
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Pixel Art Generator</h1>
          <p>Asking the ChatGPT API to draw an image in an 8x8 grid, outputting it on an LED matrix.</p>
        </div>
        {/* <video src="./media/bodystorming.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video> */}
        <img src="./media/heart_screenshot.png"/>
        "Heart" <br/><br/>
        <img src="./media/heart.jpg"/>
        <br/>
        "Letter" <br/><br/>
        <img src="./media/letter_a.jpg"/>

        {/* <video src="./media/bodystorming2.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video> */}
          

      </div>
    )
}