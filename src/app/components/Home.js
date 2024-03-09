"use client";

import "../css/main.css";
import "../css/home.css";

import Link from 'next/link'
import { React, useState, useEffect, useRef, createRef } from "react";

import HeadSmall from '../components/HeadSmall.js';

import GridItem from "../components/GridItem.js";
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
          <b>Kay van den Aker</b><br /><br />
          Designer and prototyper, exploring interactions that fuse digital and
          physical. Turning ambiguous ideas into experiences by gluing together
          various hard<span className="mobileText"> &</span>
          <span className="desktopText">- and</span> software.<br /><br />
          Currently doing master thesis <span className='mobileText'>w/</span><span className='desktopText'>with</span> <a href='https://www.archetypeai.io/' target="_blank">Archetype AI</a> in <a href='https://www.umu.se/en/umea-institute-of-design/' target="_blank">Umeå</a>, formerly at <a href='https://www.hapticlabs.io' target="_blank">Hapticlabs</a>, <a href='https://www.protopie.io' target="_blank">ProtoPie</a>, <a href='https://www.rolls-roycemotorcars.com/' target="_blank">Rolls-Royce</a>, <a href='https://www.above.se' target="_blank">Above</a>, <a href='https://www.arduino.cc' target="_blank">Arduino</a> and <a href='https://www.bmw.com' target="_blank">BMW</a>.
          <br /><br />
          <span className="contact-container">
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
        {/* <span>Client</span> */}
        <span>Date</span>
      </div> : <></>}
      <div className="grid" onMouseEnter={() => document.documentElement.style.setProperty('--scrollWidth', (window.innerWidth - (window.innerWidth -  960) / 2 - 27) + "px")}>
      {GridItems.gridItems.map((item, j) => {
        return (
          <Link href={"/" + item.link} key={"link-to-" +  j + "-" + item.link} >
          <div className="grid-item" onMouseEnter={() => elementsRef.current[j].current.scrollLeft = 0} onMouseMove={(event) => elementsRef.current[j].current.scrollLeft += event.movementX * (elementsRef.current[j].current.scrollWidth - elementsRef.current[j].current.clientWidth) / 150} > 
          {/* <div className="grid-item" onMouseMove={(event) => elementsRef.current[j].current.scrollLeft = (elementsRef.current[j].current.scrollWidth - elementsRef.current[j].current.clientWidth) - (elementsRef.current[j].current.scrollWidth - elementsRef.current[j].current.clientWidth) * (event.pageX - 1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) / (window.innerWidth - 3 * parseFloat(getComputedStyle(document.documentElement).fontSize))}>  */}
          {/* <div className="grid-item" onMouseMove={(event) => elementsRef.current[j].current.scrollLeft = (elementsRef.current[j].current.scrollWidth - elementsRef.current[j].current.clientWidth) - (elementsRef.current[j].current.scrollWidth - elementsRef.current[j].current.clientWidth) * (event.pageX - 1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) / (window.innerWidth - 3 * parseFloat(getComputedStyle(document.documentElement).fontSize))}>  */}
            {!isSmall ? 
            <div className="grid-row">
              <span className="grid-highlight">{item.title}</span>
              <span>{item.info}</span>
              <span>{item.date}</span> 
            </div> : <></>}
              {item.media && !isSmall ? (
                <div className="grid-media-container" ref={elementsRef.current[j]}>
                {item.media.map((media, k) => {
                  return media.endsWith("mp4") ? (
                    <video 
                      key={"video-" + j + "-" + k} loop playsInline autoPlay muted src={media} type="video/mp4" 
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
      {/* <div className="grid-row header">
        <span>Work NDA</span>
        <span>Context</span>
        <span>Client</span>
        <span>Date</span>
      </div>
      <a className="grid-row grid-item" href="https://www.above.se/" target="_blank">
        <span>Design and Prototyping</span>
        <span>Freelance</span>
        <span className="grid-highlight">Above</span>
        <span>2023</span>
      </a>
      <a className="grid-row grid-item" href="https://www.arduino.cc/" target="_blank">
        <span>Design and Prototyping</span>
        <span>Junior Content Creator</span>
        <span className="grid-highlight">Arduino</span>
        <span>2022</span>
      </a>
      <a className="grid-row grid-item" href="https://www.rolls-roycemotorcars.com/en_GB/home.html" target="_blank">
        <span>Bespoke Digital Interior Concept</span>
        <span>Freelance</span>
        <span className="grid-highlight">Rolls-Royce Motor Cars</span>
        <span>2022</span>
      </a> */}
      </div>
      <br/>

    </div>
  );
}
