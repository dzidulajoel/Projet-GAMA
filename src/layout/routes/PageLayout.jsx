import React from 'react'
import Menu from '../../components/sides/Menu'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
        return (
                <div className='w-full h-screen flex gap-5 p-4 bg-[#f0f8ff]'>
                        <div className='w-[15%]  p-3 rounded-2xl shadowCss'><Menu/></div>
                        <div className='w-[85%]  p-3 rounded-2xl shadowCss'><Outlet/></div>
                </div>
        )
}

export default PageLayout
