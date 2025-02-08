import React from 'react'

const data = [{
        id: 1,
        titre: "Prospection",
        valeur: "20/700"
},
{
        id: 2,
        titre: "Depense",
        valeur: "200 000 F"
},
{
        id: 3,
        titre: "Stock",
        valeur: "Ecrans : 10"
},
{
        id: 4,
        titre: "Administration",
        valeur: "Impots : 51 000 F"
}
]

const DashboardBody = () => {
        return (
                <>
                        <div className='w-full h-full flex flex-col gap-10'>
                                <div className='w-full flex gap-4 flex-wrap justify-center'>
                                        {
                                                data.map((item) => {
                                                        return (
                                                                <>
                                                                        {
                                                                                item.id % 2 == 0 ? 
                                                                                <div key={item.id} className='w-[23%] h-[200px] shadowCss rounded-2xl p-4 titreorange'>
                                                                                        <h1 className='uppercase text-2xl text-start font-bold titreorange'>{item.titre}</h1>
                                                                                        <div className="flex justify-center items-center h-full">
                                                                                        <h1 className="text-2xl font-bold text-[#808080]">{item.valeur}</h1>
                                                                                        </div>
                                                                                </div> 
                                                                                :
                                                                                        <div key={item.id} className='w-[23%] h-[200px] shadowCss rounded-2xl p-4 titregris'>
                                                                                                <h1 className='uppercase text-2xl text-start font-bold titre titregris'>{item.titre}</h1>
                                                                                                <div className="flex justify-center items-center h-full">
                                                                                                        <h1 className="text-2xl font-bold text-[#808080]">{item.valeur}</h1>
                                                                                                </div>
                                                                                        </div>
                                                                        }

                                                                </>
                                                        )
                                                })
                                        }

                                </div>
                                <div className='w-full flex gap-4 flex-wrap justify-center'>
                                        <div className='w-[48%] h-[400px] shadowCss rounded-2xl p-2'></div>
                                        <div className='w-[48%] h-[400px] shadowCss rounded-2xl p-2'></div>
                                </div>
                        </div>

                </>
        )
}

export default DashboardBody
