import {React, useState, useEffect, useRef} from 'react'

export default function GridItem({src, title, info, link, poster}){
    const vidRef = useRef(null);
    const [w, setW] = useState(600);

    useEffect(() => {
        setW(window.innerWidth);
        if(src.endsWith("mp4") && window.innerWidth <= 760){
            vidRef.current.play();
        };
      }, [])

    return (
        <a className={"gridItem"} href={"/" + link}>
            <div className="gridItemMedia">
                {!src.endsWith("mp4") ? 
                    <img src={src}/> :
                    (w > 760 ?
                    <video ref={vidRef} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} width="100%" alt="video" loop playsInline muted src={src} type="video/mp4" poster={poster}/> 
                    :
                    <video ref={vidRef} width="100%" alt="video_small" loop playsInline muted src={src} type="video/mp4" poster={poster}/>)
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