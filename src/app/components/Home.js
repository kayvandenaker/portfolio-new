"use client";

import '../css/main.css'
import '../css/home.css'

import { React, useState, useRef, useEffect } from "react";

import Head from '../components/Head.js';
import GridItem from '../components/GridItem.js';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const headRef = useRef(null);
  const masonryRef = useRef(null);
  const [columnsCount, setColumnsCount] = useState(0);

  useEffect(() => {
    setColumnsCount(masonryRef.current.props.columnsCount);
  }, [])



  return (
    <main>
    <div className='container'>
      <div className='intro'>
          <p>
          <b>Kay van den Aker</b><br/><br/>
          I'm a design technologist exploring interactions that fuse digital and physical. 
          </p>
      </div>
      {columnsCount == 0 ?  <div className='loading'>Media loading...</div> : ""}

      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 760: 2, 1140: 3, 1360: 4}}>
        <Masonry gutter={"20px"} ref={masonryRef} className={"masonry " + (columnsCount ? "loaded" : "")}>
          <GridItem src={'./media/tiles_small.mp4'} title={'Tiles'} info={'Case Study'} link={'tiles'}/>
          <GridItem src={'./media/arch.mp4'} title={'Arch'} info={'Case Study'} link={'arch'}/>
          <GridItem src={'./media/touchbar.mp4'} title={'IR TouchBar'} info={'MadMapper / ProtoPie'} link={'touchbar'}/>
          <GridItem src={'./media/protopie_laundry.mp4'} title={'ProtoPie'} info={'Freelance Work'} link={'protopie'}/>
          <GridItem src={'./media/hapticlabs_unity.mp4'} title={'Hapticlabs'} info={'Freelance Work'} link={'hapticlabs'}/>
          <GridItem src={'./media/lines.mp4'} title={'Entering Digital'} info={'Unity / Leap Motion'} link={'lines'}/>
          <GridItem src={'./media/uwb.mp4'} title={'Radar Presence'} info={'UWB Radar / ProtoPie'} link={'uwb'}/>
          <GridItem src={'./media/timer_swift.mp4'} title={'Timer Concept'} info={'SwiftUI'} link={'timer'}/>
          <GridItem src={'./media/bmw.mp4'} title={'BMW Group'} info={'Internship Highlights'} link={'bmw'}/>
          <a className={"gridItem"} href={'/head'}>
            <div className="gridItemMedia" ref={headRef} onMouseMove={(e) => {
              setMouseX((e.pageX - headRef.current.getBoundingClientRect().left) / headRef.current.offsetWidth * window.innerWidth); 
              setMouseY((e.clientY - headRef.current.getBoundingClientRect().top) / headRef.current.offsetHeight * window.innerHeight); 
            }}>
              <div className='head-container'>
                <Head mouseX={mouseX} mouseY={mouseY}/>
              </div>
            </div>
            <div className="gridItemText stretch-text">
            <span>Head</span>
            <span>React</span>
            </div>
          </a>
          <GridItem src={'./media/colors.mp4'} title={'Noise'} info={'Blender'} link={'noise'}/>
          <GridItem src={'./media/bodystorming.mp4'} title={'Bodystorming'} info={'MadMapper / Figma'} link={'bodystorming'}/>
          <GridItem src={'./media/kinect.mp4'} title={'Kitchen'} info={'TouchDesigner / Kinect'} link={'kitchen'}/>
          <GridItem src={'./media/trackpad.mp4'} title={'Trackpad'} info={'Arduino / ProtoPie'} link={'trackpad'}/>
          <GridItem src={'./media/slider.mp4'} title={'Tactile Slider'} info={'Arduino / Processing'} link={'slider'}/>
          <GridItem src={'./media/midi.jpg'} title={'MIDI Controller'} info={'Arduino'} link={'midi'}/>
        </Masonry>
      </ResponsiveMasonry>
      <div className='outro'>
      <p>
          <b>About</b><br/><br/>
          Hey! I'm Kay, a design technologist that thrives in ambiguous environments using a hands-on and iterative approach focused on experience prototyping; putting concepts in the world by gluing together various hard- and software.
          <br/><br/>
          Currently freelancing for <a href='https://www.hapticlabs.io' target="_blank">Hapticlabs</a> and <a href='https://www.protopie.io' target="_blank">ProtoPie</a> while mastering IxD in <a href='https://www.umu.se/en/umea-institute-of-design/' target="_blank">Umeå</a>, formerly at <a href='https://www.above.se' target="_blank">Above</a>, <a href='https://www.arduino.cc' target="_blank">Arduino</a>, <a href='https://www.rolls-roycemotorcars.com/' target="_blank">Rolls-Royce</a> and <a href='https://www.bmw.com' target="_blank">BMW</a>.
          <br/><br/>
          <div className='contact-container'>
              <a className='link' href="mailto:kayvandenaker@gmail.com" target="_blank">Email</a>
              <a className="link" href="https://www.instagram.com/aker.industries/" target="_blank">Instagram</a>
              <a className="link" href="https://www.linkedin.com/in/kayvandenaker" target="_blank">LinkedIn</a>
              <a className="link" href="https://twitter.com/kayvandenaker" target="_blank">Twitter</a>
              <a className="link" href='./files/Kay_van_den_Aker.pdf' target="_blank">Resume</a>
          </div>
        </p>
        </div>
    </div>
    </main>
  )
}