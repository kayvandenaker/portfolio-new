import {React} from 'react'
import Link from 'next/link'

export default function Close(){
    return (
        <Link className='close' href='/'>← Home</Link>
    )
}