import { React } from 'react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import HeadSmall from '../components/HeadSmall.js';

export default function GridItem({src, title, info, link, poster}){

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1140px)' }) ;

    return (
        <Link className={"gridItem"} href={"/" + link}>
            { title == "3D Head" ?
                <HeadSmall/> :
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