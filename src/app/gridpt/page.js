
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Pixel Art Generator</h1>
          <p>Prompting the ChatGPT API to draw an image in an 8x8 grid, outputting it on an LED matrix through Serial.
            Built with React and Arduino, in collaboration with <a href="https://lukasmoro.com" target="_blank">Lukas Moro</a>.</p>
        </div>
        <video src="./media/gpt_smile.mp4" type="video/mp4" autoPlay={true} controls muted loop playsInline>Your browser does not support the video tag.</video>
        <img src="./media/gpt_screenshot.png"/>
        {/* "Heart" <br/><br/> */}
        {/* <img src="./media/gpt_heart.jpg"/> */}
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
          
        <Nav />
      </div>
    )
}