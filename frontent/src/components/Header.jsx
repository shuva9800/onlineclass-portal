import logo from '../assets/studyNotion.png'

import React, { useState } from 'react'

function Header() {
    const [dropdown, setDropdown] = useState(false);

    const handleOpen = () => {
        // setDropdown(true);
        if (dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }


    return (
        <header className='w-full h-auto lg:py-4 sm:py-6 py-8 bg-[#000814]  '>
            <div className="container mx-auto flex justify-between items-center ">
                <a href="#">
                    <img src={logo} alt="study notion" className=' max-w-[8rem] sm:max-w-[10rem] w-full max-h-8 h-full ' />
                </a>
                <ul className='w-fit lg:flex hidden items-center  '>
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
                        <ul className={` ${dropdown ? 'closed-menu' : 'open-menu'} drop-down-menu absolute top-8 left-0 w-full h-auto py-4 px-1 bg-[#000814]`}>
                            <li>
                                <a href="#" className="py-1 px-3 flex items-center justify-center header-link-icons border-b-[#7f8081] border-b ">Option 1</a>
                            </li>
                            <li>
                                <a href="#" className="py-1 px-3 flex items-center justify-center header-link-icons border-b-[#7f8081] border-b ">Option 2</a>
                            </li>
                            <li>
                                <a href="#" className="py-1 px-3 flex items-center justify-center header-link-icons border-b-[#7f8081] border-b ">Option 3</a>
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
                <ul className="w-fit flex items-center gap-6 sm:gap-5">
                    <li>
                        <button>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9388 18.5783L14.9646 13.6041C16.3201 11.9463 16.9866 9.83087 16.8261 7.69543C16.6657 5.55999 15.6906 3.5679 14.1026 2.13123C12.5146 0.694554 10.4351 -0.0767949 8.29429 -0.0232684C6.1535 0.0302581 4.11518 0.904564 2.60093 2.41881C1.08669 3.93305 0.212387 5.97137 0.15886 8.11216C0.105334 10.253 0.876683 12.3324 2.31336 13.9205C3.75003 15.5085 5.74212 16.4836 7.87756 16.644C10.013 16.8044 12.1284 16.138 13.7863 14.7825L18.7604 19.7566C18.9176 19.9084 19.1281 19.9924 19.3466 19.9905C19.5651 19.9886 19.7741 19.901 19.9286 19.7465C20.0831 19.592 20.1708 19.383 20.1727 19.1645C20.1746 18.946 20.0906 18.7355 19.9388 18.5783ZM8.51626 15.0008C7.19772 15.0008 5.90878 14.6098 4.81246 13.8773C3.71613 13.1447 2.86164 12.1035 2.35706 10.8854C1.85248 9.66718 1.72045 8.32673 1.97769 7.03353C2.23492 5.74032 2.86986 4.55243 3.80221 3.62008C4.73456 2.68773 5.92245 2.05279 7.21566 1.79556C8.50886 1.53832 9.84931 1.67035 11.0675 2.17493C12.2857 2.67952 13.3268 3.534 14.0594 4.63033C14.7919 5.72665 15.1829 7.01559 15.1829 8.33413C15.1809 10.1016 14.4779 11.7962 13.2281 13.046C11.9783 14.2958 10.2838 14.9988 8.51626 15.0008Z" fill="#999DAA" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_19_3697)">
                                    <path d="M19.1106 3.3975C18.8762 3.1162 18.5827 2.88996 18.2511 2.73485C17.9194 2.57973 17.5576 2.49955 17.1914 2.5H3.71811L3.68311 2.2075C3.61148 1.59951 3.31926 1.03894 2.86185 0.632065C2.40443 0.225186 1.81363 0.000284828 1.20144 0L1.01644 0C0.795425 0 0.583463 0.0877974 0.427183 0.244078C0.270903 0.400358 0.183105 0.61232 0.183105 0.833333C0.183105 1.05435 0.270903 1.26631 0.427183 1.42259C0.583463 1.57887 0.795425 1.66667 1.01644 1.66667H1.20144C1.40555 1.66669 1.60255 1.74163 1.75508 1.87726C1.90761 2.0129 2.00506 2.19979 2.02894 2.4025L3.17561 12.1525C3.29465 13.1665 3.78184 14.1015 4.5447 14.78C5.30755 15.4585 6.29298 15.8334 7.31394 15.8333H16.0164C16.2375 15.8333 16.4494 15.7455 16.6057 15.5893C16.762 15.433 16.8498 15.221 16.8498 15C16.8498 14.779 16.762 14.567 16.6057 14.4107C16.4494 14.2545 16.2375 14.1667 16.0164 14.1667H7.31394C6.79815 14.1652 6.29544 14.0043 5.87472 13.7059C5.454 13.4075 5.13587 12.9863 4.96394 12.5H14.8973C15.8742 12.5001 16.8201 12.1569 17.5696 11.5304C18.3192 10.9039 18.8248 10.0339 18.9981 9.0725L19.6523 5.44417C19.7176 5.08417 19.7029 4.71422 19.6093 4.36053C19.5157 4.00684 19.3454 3.67806 19.1106 3.3975ZM18.0164 5.14833L17.3614 8.77667C17.2574 9.35417 16.9535 9.87666 16.503 10.2527C16.0525 10.6287 15.4841 10.8342 14.8973 10.8333H4.69894L3.91477 4.16667H17.1914C17.3139 4.16594 17.4349 4.19218 17.5461 4.24355C17.6572 4.29491 17.7556 4.37012 17.8344 4.46384C17.9131 4.55756 17.9703 4.66748 18.0017 4.78578C18.0332 4.90409 18.0382 5.02787 18.0164 5.14833Z" fill="#999DAA" />
                                    <path d="M6.01676 20.0003C6.93723 20.0003 7.68342 19.2541 7.68342 18.3337C7.68342 17.4132 6.93723 16.667 6.01676 16.667C5.09629 16.667 4.3501 17.4132 4.3501 18.3337C4.3501 19.2541 5.09629 20.0003 6.01676 20.0003Z" fill="#999DAA" />
                                    <path d="M14.3498 20.0003C15.2702 20.0003 16.0164 19.2541 16.0164 18.3337C16.0164 17.4132 15.2702 16.667 14.3498 16.667C13.4293 16.667 12.6831 17.4132 12.6831 18.3337C12.6831 19.2541 13.4293 20.0003 14.3498 20.0003Z" fill="#999DAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_19_3697">
                                        <rect width="20" height="20" fill="white" transform="translate(0.183105)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </button>
                    </li>
                    <li>
                        <button className='max-w-[1.75rem] w-full max-h-[1.75rem] h-full flex items-center justify-center rounded-full border '>
                            <img src="" alt="profile picture" />
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;