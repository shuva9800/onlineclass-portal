import logo from '../assets/studyNotion.png'

import React, { useState } from 'react'

function Header() {
    const [dropdown, setDropdown] = useState(false);

    const handleOpen = () => {
        setDropdown(true);
    }


    return (
        <header className='w-full h-auto lg:py-4 sm:py-6 py-8 bg-[#000814]  '>
            <div className="container mx-auto flex justify-between items-center ">
                <a href="#">
                    <img src={logo} alt="study notion" className=' max-w-[10rem] w-full max-h-8 h-full ' />
                </a>
                <ul className='w-fit flex items-center  '>
                    <li>
                        <a href="#" className=' py-1 px-3 flex items-center justify-center header-link-icons'>Home</a>
                    </li>
                    <li className='relative'>
                        <button className='py-1 px-3 flex items-center justify-between header-link-icons ' onClick={handleOpen}>
                            Catalog
                            <svg className="w-2.5 h-2.5 ms-3 drop-down-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <ul className={` ${dropdown ? 'open-menu': 'closed-menu'} drop-down-menu absolute top-8 left-0 w-full h-auto py-4 px-1 border bg-[#000814] border-none  `}>
                            <li>
                                <a href="#" className=' py-1 px-3 flex items-center justify-center header-link-icons'>Option 1</a>
                            </li>
                            <li>
                                <a href="#" className=' py-1 px-3 flex items-center justify-center header-link-icons'>Option 1</a>
                            </li>
                            <li>
                                <a href="#" className=' py-1 px-3 flex items-center justify-center header-link-icons'>Option 1</a>
                            </li>
                        </ul>

                    </li>
                    <li>
                        <a href="#" className=' py-1 px-3 flex items-center justify-center header-link-icons'>About us</a>
                    </li>
                    <li>
                        <a href="#" className=' py-1 px-3 flex items-center justify-center header-link-icons'>Contact us</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;