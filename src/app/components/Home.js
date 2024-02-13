"use client";

import '../css/main.css'
import '../css/home.css'

import { React, useState, useEffect } from "react";

import GridItem from '../components/GridItem.js';
import GridItems from '../components/GridItems.js';

import useBetterMediaQuery from '../components/useBetterMediaQuery.js';



export default function Home() {
  
  const isMobile = useBetterMediaQuery('(max-width: 760px)');
  const isTablet = useBetterMediaQuery('(min-width: 761px) and (max-width: 1140px)');
  const isLaptop = useBetterMediaQuery('(min-width: 1141px) and (max-width: 1360px)');
  const isDesktop = useBetterMediaQuery('(min-width: 1361px)');
  
  const [masonryContent, setMasonryContent] = useState([]);
  const [columnCount, setColumnCount] = useState(0);

  
  useEffect(() => {setColumnCount(isMobile ? 1 : isTablet ? 2 : isLaptop ? 3 : isDesktop ? 3 : 0)}, [isMobile, isTablet, isLaptop, isDesktop])
  
  useEffect(() => {
    if(columnCount !== 0){
      const content = [];
      for (let i = 0; i < columnCount; i++) {
        const column = [];
        GridItems.gridItems.forEach((item, j) => {
          // move the last object if columns = 4 to column 1
          if(columnCount == 4){
            if(j !== GridItems.gridItems.length - 1){
              if(j % columnCount == i){ column.push(<GridItem key={item.link} src={item.src} poster={item.poster} title={item.title} info={item.info} link={item.link}/>) };
            } else if (i == 1){
              column.push(<GridItem key={item.link} src={item.src} poster={item.poster} title={item.title} info={item.info} link={item.link}/>)
            }
          // move the second and 4th last objects if columns = 3 to column 1
          // } else if(columnCount == 3){
          //   if(j !== GridItems.gridItems.length - 2 && j !== GridItems.gridItems.length - 5){
          //     if(j % columnCount == i){ column.push(<GridItem key={item.link} src={item.src} poster={item.poster} title={item.title} info={item.info} link={item.link}/>) };
          //   } else if (i == 1){
          //     column.push(<GridItem key={item.link} src={item.src} poster={item.poster} title={item.title} info={item.info} link={item.link}/>)
          //   }
          } else{
            if(j % columnCount == i){ column.push(<GridItem key={item.link} src={item.src} poster={item.poster} title={item.title} info={item.info} link={item.link}/>) };
          }
          // if(j !== GridItems.gridItems.length - 2 || columnCount !== 3){
          //   if(j % columnCount == i){ column.push(<GridItem key={item.link} src={item.src} poster={item.poster} title={item.title} info={item.info} link={item.link}/>) };
          // } else if (i == 1){
          //   column.push(<GridItem key={item.link} src={item.src} poster={item.poster} title={item.title} info={item.info} link={item.link}/>)
          // }
        })
        content.push(<div key={"c" + i} className='masonry-column'>{column}</div>);
      }
      setMasonryContent(content);
    }
  }, [columnCount]);
  
  useEffect(() => { sessionStorage.setItem('oldPage', 'home') }, [])

  return (
    <div className='container'>
      <div className='intro'>
          {/* <p>
            <b>Kay van den Aker</b><br/><br/>
            Designer and prototyper, exploring interactions that fuse digital and physical.
          </p> */}
          <p>
            <b>Kay van den Aker</b><br/><br/>
            Designer and prototyper, exploring interactions that fuse digital and physical. Turning ambiguous ideas into experiences by gluing together various hard- and software.
            <br/><br/>
            {/* Currently freelancing for <a href='https://www.hapticlabs.io' target="_blank">Hapticlabs</a> and <a href='https://www.protopie.io' target="_blank">ProtoPie</a> while mastering IxD in <a href='https://www.umu.se/en/umea-institute-of-design/' target="_blank">Umeå</a>, formerly at <a href='https://www.above.se' target="_blank">Above</a>, <a href='https://www.arduino.cc' target="_blank">Arduino</a>, <a href='https://www.rolls-roycemotorcars.com/' target="_blank">Rolls-Royce</a> and <a href='https://www.bmw.com' target="_blank">BMW</a>. */}
            Currently doing master thesis with <a href='https://www.archetypeai.io/' target="_blank">Archetype AI</a> in <a href='https://www.umu.se/en/umea-institute-of-design/' target="_blank">Umeå</a>, formerly at <a href='https://www.hapticlabs.io' target="_blank">Hapticlabs</a>, <a href='https://www.protopie.io' target="_blank">ProtoPie</a>, <a href='https://www.rolls-roycemotorcars.com/' target="_blank">Rolls-Royce</a>, <a href='https://www.above.se' target="_blank">Above</a>, <a href='https://www.arduino.cc' target="_blank">Arduino</a> and <a href='https://www.bmw.com' target="_blank">BMW</a>.
            <br/><br/>
            <span className='contact-container'>
                <a className='link' href="mailto:kayvandenaker@gmail.com" target="_blank">Email</a>
                <a className="link" href="https://www.linkedin.com/in/kayvandenaker" target="_blank">LinkedIn</a>
                <a className="link" href="https://www.instagram.com/aker.industries/" target="_blank">Instagram</a>
                <a className="link" href="https://twitter.com/kayvandenaker" target="_blank">X</a>
                <a className="link" href='./files/Kay_van_den_Aker.pdf' target="_blank">Resume</a>
            </span>
          </p>
      </div>

      <div className={'masonry ' + (columnCount ? "loaded" : "")}>{masonryContent}</div>

      {/* <div className='outro'>
        <p>
            <b>About</b><br/><br/>
            Designer and prototyper, exploring interactions that fuse digital and physical. Turning ambiguous ideas into experiences by gluing together various hard- and software.
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
        </div> */}
    </div>
  )
}