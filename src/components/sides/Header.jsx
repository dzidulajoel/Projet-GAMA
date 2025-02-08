import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
let nom = "JG"
const Header = ({name}) => {
        return (
                <div className='h-full w-full flex gap-10 justify-between'>
                        <div><h1 className='uppercase text-2xl text-[#FF7F3E] font-extrabold'>{name}</h1></div>
                        <div className='flex gap-10'>
                                <div className='flex items-center gap-3'>
                                        <span className='text-2xl text-[#FF7F3E] uppercase font-bold'>{nom}</span>
                                        <FaMessage />
                                </div>
                                <div className='flex items-center gap-5 shadowCss py-2 px-4 rounded-2xl'>
                                        <FaSun />
                                        <FaMoon />
                                </div>
                        </div>

                </div>
        )
}



export default Header
