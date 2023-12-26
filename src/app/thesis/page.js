
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
          <br/><br/>
          If you're interested or want to chat about it, feel free to shoot an <u><a href="mailto:kayvandenaker@gmail.com" target="_blank">email</a></u>.
          <h3>Partner</h3>
          For this project I'll be collaborating with Archetype AI, a San-Francisco based startup born out of Google's ATAP department (project Soli). Archetype AI leads the way in developing a physical AI platform called a Large Behavior Model, which makes sense of the physical world around it by looking for behavioural patterns through various sensors such as camera, microphone, radar, IMU etcetera.

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
          
          <Nav />


      </div>
    )
}