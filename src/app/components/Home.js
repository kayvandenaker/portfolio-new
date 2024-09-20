"use client";

import "../css/main.css";
import "../css/home.css";

import Link from 'next/link'
import { React, useState, useEffect, useRef, createRef } from "react";

// import HeadSmall from '../components/HeadSmall.js';

// import GridItem from "../components/GridItem.js";
import GridItems from "../components/GridItems.js";

import useBetterMediaQuery from '../components/useBetterMediaQuery.js';

export default function Home() {
  const isSmall = useBetterMediaQuery('(max-width: 760px)');

  const elementsRef = useRef(GridItems.gridItems.map(() => createRef()));

  useEffect(() => {
    sessionStorage.setItem("oldPage", "home");
  }, []);


  return (
    <div className="container">
      <div className="intro">
        <p>
          <b>Kay van den Aker</b>
          <br /><br />
          Designer and prototyper, exploring interactions that fuse digital and
          physical. Turning ambiguous ideas into experiences by gluing together
          various hard<span className="mobileText"> &</span>
          <span className="desktopText">- and</span> software.
          <br /><br />
          {/* Currently doing master thesis <span className='mobileText'>w/</span><span className='desktopText'>with</span> <a href='https://www.archetypeai.io/' target="_blank">Archetype AI</a> in <a href='https://www.umu.se/en/umea-institute-of-design/' target="_blank">Umeå</a><span className="mobileText">. Before</span>
          <span className="desktopText">, formerly</span> at <a href='https://www.hapticlabs.io' target="_blank">Hapticlabs</a>, <a href='https://www.protopie.io' target="_blank">ProtoPie</a>, <a href='https://www.rolls-roycemotorcars.com/' target="_blank">Rolls-Royce</a>, <a href='https://www.above.se' target="_blank">Above</a>, <a href='https://www.arduino.cc' target="_blank">Arduino</a> and <a href='https://www.bmw.com' target="_blank">BMW</a>. */}
          Currently freelancing for <a href='https://ai.google/' target="_blank">Google</a> and <a href='https://modemworks.com/' target="_blank">Modem</a>.
          <br /><br />
          <span className="contact-container">
            {/* <span className="link" onMouseLeave={() => {document.getElementById("email-tooltip").innerHTML = "copy to clipboard"}} onClick={() => {navigator.clipboard.writeText("kayvandenaker@gmail.com");document.getElementById("email-tooltip").innerHTML = "copied!"}}>Email</span>
            <span id="email-tooltip">copy kayvandenaker@gmail.com</span> */}
            <a className="link" href="mailto:kayvandenaker@gmail.com" target="_blank">Email</a>
            <a className="link" href="https://www.linkedin.com/in/kayvandenaker" target="_blank">LinkedIn</a>
            <a className="link" href="https://www.instagram.com/aker.industries/" target="_blank">Instagram</a>
            <a className="link" href="https://twitter.com/kayvandenaker" target="_blank">X</a>
            <a className="link" href="./files/Kay_van_den_Aker.pdf" target="_blank">Resume</a>
          </span>
        </p>
      </div>
      {!isSmall ? 
      <div className="grid-row header">
        <span>Public Work</span>
        <span>Context</span>
        <span>Date</span>
      </div> : <></>}
      <div className="grid">
      {GridItems.gridItems.map((item, j) => {
        return (
          <Link href={"/" + item.link} key={"link-to-" +  j + "-" + item.link} >
          <div className="grid-item" 
            onMouseEnter={() => !isSmall ? (elementsRef.current[j].current.scrollLeft = 0) : null} 
            onMouseMove={(event) => !isSmall ? (elementsRef.current[j].current.scrollLeft += event.movementX * 5) : null} 
          > 
          {/* <div className="grid-item" onMouseEnter={() => elementsRef.current[j].current.scrollLeft = 0} onMouseMove={(event) => elementsRef.current[j].current.scrollLeft += event.movementX * (elementsRef.current[j].current.scrollWidth - elementsRef.current[j].current.clientWidth) / 150} >  */}
          {/* <div className="grid-item" onMouseMove={(event) => elementsRef.current[j].current.scrollLeft = (elementsRef.current[j].current.scrollWidth - elementsRef.current[j].current.clientWidth) - (elementsRef.current[j].current.scrollWidth - elementsRef.current[j].current.clientWidth) * (event.pageX - 1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) / (window.innerWidth - 3 * parseFloat(getComputedStyle(document.documentElement).fontSize))}>  */}
            {!isSmall ? 
              <div className="grid-row">
                <span className="grid-highlight">{item.title}</span>
                <span>{item.info}</span>
                <span>{item.date}</span> 
              </div> 
              : <></>}
              {item.media && !isSmall ? (
                <div className="grid-media-container" ref={elementsRef.current[j]}>
                {item.media.map((media, k) => {
                  return media.endsWith("mp4") ? (
                    <video 
                      key={"video-" + j + "-" + k} loop playsInline autoPlay muted type="video/mp4" 
                      src={media} 
                      poster={media.replace(".mp4", "_poster.jpg")}
                      // onMouseOver={(event) => event.target.play()} 
                      // onMouseOut={(event) => event.target.pause()}
                    />
                  ) : (
                    // media == "./media/head.png" ? <HeadSmall/> : <img key={"image-" + j + "-" + k} src={media} /> 
                    <img key={"image-" + j + "-" + k} src={media} />
                  );
                })}
                </div>
              ) : (
                <div className="mobile-poster"><img key={item.poster} src={item.poster} /></div>
              )}

              {isSmall ? 
              <div className="grid-row">
                <span className="grid-highlight">{item.title}</span>
                <span>{item.info}</span>
              </div> : <></>}

            </div>
          </Link>
        );
      })}
      </div>
    </div>
  );
}
