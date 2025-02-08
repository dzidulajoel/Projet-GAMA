import React from 'react'
import PageCard from '../../../layout/container/PageCard'
import Header from '../../sides/Header'
import DasboardBody from "./DashboardBody"
const Dashboard = () => {
        const valeur = "Dashboard"

        return (
                <>
                        <PageCard>
                                <div className="w-full h-full flex flex-col gap-4">
                                        <div className="shadowCss p-3 rounded-2xl "><Header name = {valeur}/></div>
                                        <div className=""><DasboardBody/></div>
                                </div>
                        </PageCard>
                </>
        )
}

export default Dashboard
