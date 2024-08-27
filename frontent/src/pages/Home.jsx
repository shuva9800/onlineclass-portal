import React from 'react'
import {Link} from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
        <Link to='/signup'>
            <button className='flex items-center justify-center p-1 gap-1 '>
                <p>Become an Instractor</p>
                <FaArrowRightLong />
            </button>
        </Link>
    </div>
  )
}
