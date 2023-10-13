"use client";

import '../css/main.css'
import '../css/home.css'

import { React, useState, useRef, useEffect } from "react";
import Link from 'next/link'

import GridItem from '../components/GridItem.js';
import GridItems from '../components/GridItems.js';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";



export default function Home() {
  const masonryRef = useRef(null);
  const [columnsCount, setColumnsCount] = useState(0);

  useEffect(() => {
    setColumnsCount(masonryRef.current.props.columnsCount);

    sessionStorage.setItem('oldPage', 'home');
  }, [])

  // ffmpeg -i input.mp4 -vframes 1 -vf "scale=640:480" output.jpeg

  return (
    <div className='container'>
      <div className='intro'>
          <p>
          <b>Kay van den Aker</b><br/><br/>
          {/* I'm a design technologist exploring interactions that fuse digital and physical.  */}
          Designer and prototyper, exploring interactions that fuse digital and physical.
          </p>
      </div>
      {/* {columnsCount == 0 ?  <div className='loading'>Media loading...</div> : ""} */}

      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 760: 2, 1140: 3, 1360: 4}}>
        <Masonry gutter={"10px 20px"} ref={masonryRef} className={"masonry " + (columnsCount ? "loaded" : "")}>
          {GridItems.gridItems.map((item, i) => { return(
              <GridItem key={item.link} src={item.src} poster={item.poster} title={item.title} info={item.info} link={item.link}/>
          )})}
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
  )
}