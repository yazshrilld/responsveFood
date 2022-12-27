import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import {BsFillCartFill, BsFillCloudMoonFill, BsFillCalendar2EventFill, BsFillEmojiSmileUpsideDownFill, BsFillGeoAltFill, BsFillFileEarmarkPersonFill} from 'react-icons/bs'

const Navbar = () => {

    const [nav, setNav] = useState(false)

  return (
    <>
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div
                    onClick={() => setNav(!nav)} 
                    className='cursor-pointer sm:hidden'>
                    <AiOutlineMenu size={30}/>
                </div>
                <h1 className='hidden sm:flex items-center text-3xl lg:text-4xl px-2'>
                    Best <span className='font-bold'>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}/>
                <input className='bg-transparent p-2 w-full focus:outline-none' type="text" name="" id="" placeholder='Search Foods' />
            </div>
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-3xl px-2'>
                <BsFillCartFill className='mr-2' size={20}/> Cart
            </button>

            {/* Mobile Menu */}
            {
                console.log(nav)
            }
            { // This takes effect once the nav state is set to true. which first makes the whole div opacity-80
                nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
                </div>: ''
            }
            <div 
                className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>
                    Best <span className='font-bold'>Eats</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'>
                            <BsFillCalendar2EventFill
                                size={25} className='mr-4'
                             /> Orders
                        </li>
                        <li className='text-xl py-2 flex'>
                            <BsFillCloudMoonFill
                                size={25} className='mr-4'
                             />CLoudMoon
                        </li>
                        <li className='text-xl py-2 flex'>
                            <BsFillEmojiSmileUpsideDownFill
                                size={25} className='mr-4'
                             /> Emoji
                        </li>
                        <li className='text-xl py-2 flex'>
                            <BsFillFileEarmarkPersonFill
                                size={25} className='mr-4'
                             /> Person
                        </li>
                        <li className='text-xl py-2 flex'>
                            <BsFillGeoAltFill
                                size={25} className='mr-4'
                             /> Geography
                        </li>
                        <li className='text-xl py-2 flex'>
                            <BsFillFileEarmarkPersonFill
                                size={25} className='mr-4'
                             /> Market
                        </li>
                        <li className='text-xl py-2 flex'>
                            <BsFillCloudMoonFill
                                size={25} className='mr-2'
                             /> Sky
                        </li>
                    </ul>    
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar