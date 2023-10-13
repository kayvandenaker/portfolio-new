import { React } from 'react'
import useBetterMediaQuery from '../components/useBetterMediaQuery.js';
import Link from 'next/link'
import HeadSmall from '../components/HeadSmall.js';

export default function GridItem({src, title, info, link, poster}){

    const isTabletOrMobile = useBetterMediaQuery('(max-width: 1140px)');

    return (
        <Link className={"gridItem"} href={"/" + link} key={"/" +  link}>
            { title == "3D Head" ?
                (isTabletOrMobile ? <div className="gridItemMedia"><img src={poster}/></div> : <HeadSmall/> )
                :
                <div className="gridItemMedia">
                    {src.endsWith("mp4") && !isTabletOrMobile ?
                        <video width="100%" loop playsInline muted src={src} type="video/mp4" poster={poster} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} />:
                        <img src={poster ? poster : src}/>
                    }
                </div>
            }
            <div className="gridItemText">
                <span>{title}</span>
                <span>{info}</span>
            </div>
        </Link>
    )
}