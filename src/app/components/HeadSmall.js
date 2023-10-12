import Head from '../components/Head.js';
import { React, useState, useRef } from "react";

export default function HeadSmall() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
  
    const headRef = useRef(null);
    return(
            <div className="gridItemMedia" ref={headRef} onMouseMove={(e) => {
              setMouseX((e.pageX - headRef.current.getBoundingClientRect().left) / headRef.current.offsetWidth * window.innerWidth); 
              setMouseY((e.clientY - headRef.current.getBoundingClientRect().top) / headRef.current.offsetHeight * window.innerHeight); 
            }}>
              <div className='head-container'>
                <Head mouseX={mouseX} mouseY={mouseY}/>
              </div>
            </div>
    )

}