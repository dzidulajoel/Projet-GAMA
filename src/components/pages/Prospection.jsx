import React from 'react'
import PageCard from '../../layout/container/PageCard'
import Header from '../sides/Header'
import ProspectionBody from "./ProspectionBody"

const Prospection = () => {
        const valeur = "Details sur la  prospection"
        return (
                <>
                        <PageCard>
                                <div className="w-full h-full flex flex-col gap-4">
                                        <div className="shadowCss p-3 rounded-2xl "><Header name = {valeur}/></div>
                                        <div ><ProspectionBody /></div>
                                </div>
                        </PageCard>
                </>
        )
}

export default Prospection