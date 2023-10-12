"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Close(){
    const router = useRouter();
    const [fromHome, setFromHome] = useState(0);

    useEffect(() => {
        setFromHome(sessionStorage.getItem('oldPage') == "home");
        sessionStorage.setItem('oldPage', 'sub');
      }, [])

    return (
        <React.Fragment>
        {fromHome ? 
            <a className='close' onClick={() => router.back()}>← Home</a>:
            <Link className='close' href={"/"}>← Home</Link>
        }
        </React.Fragment>
    )
}