import React from 'react'
import PageCard from '../../../layout/container/PageCard'
import Header from '../../sides/Header'
import DepenseBody from './DepenseBody'


const Depense = () => {
        return (
                <>
                        <PageCard>
                                <div className="w-full h-full flex flex-col gap-4">
                                        <div className="shadowCss p-3 rounded-2xl "><Header /></div>
                                        <div className="shadowCss p-3 rounded-2xl "> <DepenseBody /></div>
                                </div>
                        </PageCard>
                </>
        )
}

export default Depense
