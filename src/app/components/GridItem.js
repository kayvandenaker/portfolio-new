import {React, useState} from 'react'

export default function GridItem({src, title, info, link}){

    return (
        <a className={"gridItem"} href={"/" + link}>
            <div className="gridItemMedia">
                {src.endsWith("mp4") ? <video onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} width="100%" loop playsInline muted src={src} type="video/mp4"/> : <img src={src}/>}
            </div>
            <div className="gridItemText">
                <span>{title}</span>
                <span>{info}</span>
            </div>
        </a>
    )
}