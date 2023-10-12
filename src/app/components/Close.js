"use client"

import {React} from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

export default function Close(){
    // const router = useRouter();
    return (
        <Link className='close' href='/'>← Home</Link>
        // <a className='close' onClick={() => router.back()}>← Home</a>
    )
}