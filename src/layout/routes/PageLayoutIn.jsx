import React from 'react'
import Header from '../../components/sides/Header'
import { Outlet } from 'react-router-dom'

const PageLayoutIn = () => {
        return (
                <div>
                        <Header/>
                        <Outlet/>
                </div>
        )
}

export default PageLayoutIn
