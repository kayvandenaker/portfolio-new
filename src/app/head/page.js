"use client";

import '../css/main.css'
import '../css/page.css'


import { useState } from "react";

import Close from '../components/Close.js'

import Head from '../components/Head.js';

export default function Page() {

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  return (
    <main onMouseMove={(e) => {setMouseX(e.clientX); setMouseY(e.clientY)}}>
      <div className="page">
        <Close />
        <div className='page-hero'>
          <h1>Head</h1>
          <p>Mouse tracking head made with React Three Fiber and post processing. 3D created with a Lidar scanner, cleaned with MeshMixer and Blender.</p>
        </div>
        <div className='head-container'>
          <Head mouseX={mouseX} mouseY={mouseY}/>
        </div>
      </div>
    </main>
    )
}