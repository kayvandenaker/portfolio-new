"use client";

import '../css/main.css'
import '../css/home.css'

import { React, useState, useRef, useEffect } from "react";
import Link from 'next/link'

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

  // ffmpeg -i input.mp4 -vframes 1 -vf "scale=640:480" output.jpeg

  return (
    <main>
    <div className='container'>
      <div className='intro'>
          <p>
          <b>Kay van den Aker</b><br/><br/>
          {/* I'm a design technologist exploring interactions that fuse digital and physical.  */}
          I'm a designer and prototyper, exploring interactions that fuse digital and physical.
          </p>
      </div>
      {/* {columnsCount == 0 ?  <div className='loading'>Media loading...</div> : ""} */}

      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 760: 2, 1140: 3, 1360: 4}}>
        <Masonry gutter={"20px"} ref={masonryRef} className={"masonry " + (columnsCount ? "loaded" : "")}>
          <GridItem src={'./media/tiles_small.mp4'} poster={'./media/tiles_poster.jpg'} title={'Tiles'} info={'Case Study'} link={'tiles'}/>
          <GridItem src={'./media/arch_small.mp4'} poster={'./media/arch_poster.jpg'} title={'Arch'} info={'Case Study'} link={'arch'}/>
          <GridItem src={'./media/touchbar_small.mp4'} poster={'./media/touchbar_poster.jpeg'} title={'IR TouchBar'} info={'MadMapper / ProtoPie'} link={'touchbar'}/>
          <GridItem src={'./media/protopie_laundry_small.mp4'} poster={'./media/protopie_laundry_poster.jpg'} title={'ProtoPie'} info={'Freelance Work'} link={'protopie'}/>
          <GridItem src={'./media/hapticlabs_unity_small.mp4'} poster={'./media/hapticlabs_unity_poster.jpeg'} title={'Hapticlabs'} info={'Freelance Work'} link={'hapticlabs'}/>
          <GridItem src={'./media/lines_small.mp4'} poster={'./media/lines_poster.jpeg'} title={'Entering Digital'} info={'Unity / Leap Motion'} link={'lines'}/>
          <GridItem src={'./media/uwb_small.mp4'} poster={'./media/uwb_poster.jpeg'} title={'Radar Presence'} info={'UWB / ProtoPie'} link={'uwb'}/>
          <GridItem src={'./media/timer_swift_small.mp4'} poster={'./media/timer_swift_poster.jpeg'} title={'Timer Concept'} info={'SwiftUI'} link={'timer'}/>
          <GridItem src={'./media/bmw_small.mp4'} poster={'./media/bmw_poster.jpg'} title={'BMW Group'} info={'Internship Highlights'} link={'bmw'}/>
          <Link className={"gridItem"} href={'/head'}>
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
          </Link>
          <GridItem src={'./media/bodystorming_small.mp4'} poster={'./media/bodystorming_poster.jpg'} title={'Bodystorming'} info={'MadMapper / Figma'} link={'bodystorming'}/>
          <GridItem src={'./media/colors_small.mp4'} poster={'./media/colors_poster.jpg'} title={'Noise'} info={'Blender'} link={'noise'}/>
          <GridItem src={'./media/kinect_small.mp4'} poster={'./media/kinect_poster.jpg'} title={'Kitchen'} info={'TouchDesigner / Kinect'} link={'kitchen'}/>
          <GridItem src={'./media/midi.jpg'} title={'MIDI Controller'} info={'Arduino'} link={'midi'}/>
          <GridItem src={'./media/trackpad_small.mp4'} poster={'./media/trackpad_poster.jpg'} title={'Trackpad'} info={'Arduino / ProtoPie'} link={'trackpad'}/>
          {/* <GridItem src={'./media/slider_small.mp4'} poster={'./media/slider_poster.jpg'} title={'Tactile Slider'} info={'Arduino / Processing'} link={'slider'}/> */}
        </Masonry>
      </ResponsiveMasonry>
      <div className='outro'>
      <p>
          <b>About</b><br/><br/>
          I'm a designer and prototyper, exploring interactions that fuse digital and physical. Turning ambiguous ideas into experiences by gluing together various hard- and software.
          <br/><br/>
          Currently freelancing for <a href='https://www.hapticlabs.io' target="_blank">Hapticlabs</a> and <a href='https://www.protopie.io' target="_blank">ProtoPie</a> while mastering IxD in <a href='https://www.umu.se/en/umea-institute-of-design/' target="_blank">Umeå</a>, formerly at <a href='https://www.above.se' target="_blank">Above</a>, <a href='https://www.arduino.cc' target="_blank">Arduino</a>, <a href='https://www.rolls-roycemotorcars.com/' target="_blank">Rolls-Royce</a> and <a href='https://www.bmw.com' target="_blank">BMW</a>.
          <br/><br/>
          <span className='contact-container'>
              <a className='link' href="mailto:kayvandenaker@gmail.com" target="_blank">Email</a>
              <a className="link" href="https://www.instagram.com/aker.industries/" target="_blank">Instagram</a>
              <a className="link" href="https://www.linkedin.com/in/kayvandenaker" target="_blank">LinkedIn</a>
              <a className="link" href="https://twitter.com/kayvandenaker" target="_blank">Twitter</a>
              <a className="link" href='./files/Kay_van_den_Aker.pdf' target="_blank">Resume</a>
          </span>
        </p>
        </div>
    </div>
    </main>
  )
}