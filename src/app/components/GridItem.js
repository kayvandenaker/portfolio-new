import { React, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import HeadSmall from '../components/HeadSmall.js';

export default function GridItem({src, title, info, link, poster}){

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1140px)' }) ;
    const vidRef = useRef(null);

    useEffect(() => {
        if(vidRef.current){

            if(isTabletOrMobile && src.endsWith("mp4")){
                vidRef.current.play();
            } else if (src.endsWith("mp4")){
                vidRef.current.pause();
            }
        }
    }, [isTabletOrMobile]);

    return (
        <Link className={"gridItem"} href={"/" + link}>
            { title == "3D Head" ?
                <HeadSmall/>
            :
                <div className="gridItemMedia">
                    {!src.endsWith("mp4") ? 
                        <img src={src}/> :
                        // <video ref={vidRef} {...(isTabletOrMobile ? { autoPlay: true } : {})}  width="100%" loop playsInline muted src={src} type="video/mp4" poster={poster} />
                        (!isTabletOrMobile ?
                            <video ref={vidRef} width="100%" loop playsInline muted src={src} type="video/mp4" poster={poster} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} />
                            :
                            <video ref={vidRef} width="100%" loop playsInline muted src={src} type="video/mp4" poster={poster} autoPlay/>
                        )
                    }
                    {/* {src.endsWith("mp4") ? <video width="100%" alt="video" muted src={src} type="video/mp4" poster="./media/midi.jpg"/> : <img src={src}/>} */}
                </div>
            }
            <div className="gridItemText">
                <span>{title}</span>
                <span>{info}</span>
            </div>
        </Link>
    )
}