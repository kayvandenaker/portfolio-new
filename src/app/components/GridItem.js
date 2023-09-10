import {React, useState, useEffect} from 'react'

export default function GridItem({src, title, info, link}){

    const [windowWidth, setWidth] = useState(() => {
        const initialState = window.innerWidth;
        return initialState;
    });

    return (
        <a className={"gridItem"} href={"/" + link}>
            <div className="gridItemMedia">
                {!src.endsWith("mp4") ? 
                    <img src={src}/> :
                    windowWidth > 760 ?
                        <video onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} width="100%" alt="video" loop playsInline muted src={src} type="video/mp4"/> :
                        <video width="100%" alt="video" autoPlay loop playsInline muted src={src} type="video/mp4"/>
                }
                {/* {src.endsWith("mp4") ? <video width="100%" alt="video" muted src={src} type="video/mp4" poster="./media/midi.jpg"/> : <img src={src}/>} */}

            </div>
            <div className="gridItemText">
                <span>{title}</span>
                <span>{info}</span>
            </div>
        </a>
    )
}