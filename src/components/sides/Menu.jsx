import React from 'react'
import { FaBars, FaChevronCircleLeft, FaFile, FaHome, FaMoneyBill, FaToolbox, FaUser } from 'react-icons/fa'
import { FaGear, FaPersonRays, FaRightFromBracket } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
const Menu = () => {
        return (
                < >
                        <div className='flex flex-col gap-15 mt-10'>
                                <div className='flex justify-end items-center text-2xl text-[#FF7F3E] font-bold'>
                                        <FaChevronCircleLeft />  
                                </div>
                                <div className='flex flex-col gap-3'>
                                        <NavLink className='flex items-center px-[12px] py-[8px] gap-2 text-md font-[300px]' to='/'><FaHome /><span>Acceuil</span></NavLink>
                                        <NavLink className='flex items-center px-[12px] py-[8px] gap-2 text-md font-[300px]' to='prospection'><FaPersonRays /><span>Prospection</span></NavLink>
                                        <NavLink className='flex items-center px-[12px] py-[8px] gap-2 text-md font-[300px]' to='stock'><FaToolbox /><span>Stock</span></NavLink>
                                        <NavLink className='flex items-center px-[12px] py-[8px] gap-2 text-md font-[300px]' to='depense'><FaMoneyBill /><span>Depense</span></NavLink>
                                        <NavLink className='flex items-center px-[12px] py-[8px] gap-2 text-md font-[300px]' to='administration'><FaFile /><span>Administration</span></NavLink>
                                </div>
                                <div className='flex flex-col gap-3'>
                                        <NavLink className='flex items-center px-[12px] py-[8px] gap-2 text-md font-[300px]' to='compte'><FaUser /><span>Compte</span></NavLink>
                                        <NavLink className='flex items-center px-[12px] py-[8px] gap-2 text-md font-[300px]' to='parametre'><FaGear /><span>Parametre</span></NavLink>
                                        <NavLink className='flex items-center px-[12px] py-[8px] gap-2 text-md font-[300px]' to='deconnexion'><FaRightFromBracket /><span>Deconnexion</span></NavLink>
                                </div>
                        </div>

                </>
        )
}

export default Menu
