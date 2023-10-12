'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import GridItems from '../components/GridItems.js';
import Link from 'next/link'

export default function Nav(){
    const pathname = usePathname().split('/')[1];
    const index = GridItems.gridItems.findIndex(item => item.link === pathname);

    // const prev = GridItems.gridItems[index - 1] ? GridItems.gridItems[index - 1] : GridItems.gridItems[GridItems.gridItems.length - 1];
    // const next = GridItems.gridItems[index + 1] ? GridItems.gridItems[index + 1] : GridItems.gridItems[0];

    const prev = GridItems.gridItems[index - 1];
    const next = GridItems.gridItems[index + 1];
    
    return (
        <div className={"nav-footer"}>
            <div className='mobile'>
                {prev ? <Link href={"/" + prev.link}>← {prev.title}</Link> : <span></span>}
                {next && prev ? <span className='nav-footer-spacer'> / </span>  : ""}
                {next ? <Link href={"/" + next.link}>{next.title} →</Link> : <span></span>}
            </div>
            <div className='desktop'>
                {prev ? <Link href={"/" + prev.link}>prev</Link> : <span></span>}
                {next && prev ? <span className='nav-footer-spacer'> / </span>  : ""}
                {next ? <Link href={"/" + next.link}>next</Link> : <span></span>}
            </div>


        </div>
    )
}