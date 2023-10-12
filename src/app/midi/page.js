
import '../css/main.css'
import '../css/page.css'

import Close from '../components/Close.js'
import Nav from '../components/Nav.js'

export default function Page() {
    return (
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>MIDI Controller</h1>
          <p>Arduino project from back in 2015, a MIDI Controller for FL Studio. Illuminated arcade buttons, potentionmeters and 5 segment LED filter level indicators.</p>
        </div>
        <img src="./media/midi.jpg"/>
        <Nav />
      </div>
    )
}