import React, { useEffect, useState } from 'react'
import { FaEye, FaPrint, FaTrash } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'

const ProspectionBody = () => {
        const [data, setData] = useState([])
        useEffect(() => {

                const fetchData = async () => {
                        const api = await fetch("http://localhost:3000/prospection")
                        const res = await api.json()
                        setData(res)
                }

                fetchData()
        }, [])

        const {} = useParams()

        return (
                <div>
                        <div className="shadowCss p-2 rounded-2xl mt-2">
                                <div className='w-full flex'>
                                        <p className='w-[5%]'>N <sup>&#186; </sup></p>
                                        <p className='w-[15%]'>| Structure</p>
                                        <p className='w-[25%]'>| Etape</p>
                                        <p className='w-[15%]'>| Date </p>
                                        <p className='w-[30%]'>| Description</p>
                                        <p className='flex gap-5 w-[15%]'>
                                                <button type="button" className='bg-[#808080] w-full h-[30px] text-white flex justify-center items-center rounded-2xl hover:bg-black hover:text-white cursor-pointer'>Ajouter</button>
                                        </p>
                                </div>
                        </div>
                        <div className='shadowCss p-3 rounded-2xl mt-4 flex flex-col gap-5 '>
                                {data.map((items) => ( 
                                        <Link to= {`${items.id}`} key={items.id} className='w-full flex bg-[#f0f8ff] px-2 rounded-2xl'> 
                                                <p className='w-[5%]'>{items.id}</p>
                                                <p className='w-[15%]'>| {items.structure}</p>
                                                <p className='w-[25%]'>| {items.etat}</p>
                                                <p className='w-[15%]'>| {items.date}</p>
                                                <p className='w-[30%]'>| {items.description}</p>
                                                <p className='flex gap-2 w-[15%]'>
                                                        <button type="button" className='bg-[#808080] w-[60px] h-[30px] text-white flex justify-center items-center hover:bg-black hover:text-white cursor-pointer'><FaEye /></button>
                                                        <button type="button" className='bg-[#808080] w-[60px] h-[30px] text-white flex justify-center items-center hover:bg-[#FF7F3E] hover:text-white cursor-pointer'><FaPrint /></button>
                                                        <button type="button" className='bg-[#808080] w-[60px] h-[30px] text-white flex justify-center items-center hover:bg-red-500 hover:text-white cursor-pointer'><FaTrash /></button>
                                                </p>
                                        </Link>
                                ))}
                        </div>

                        <div className='flex justify-center items-center mt-4 gap-10'>
                                <button type="button">Prev</button>
                                <button type="button">1</button>
                                <button type="button">2</button>
                                <button type="button">Next</button>
                        </div>

                </div>
        )
}

export default ProspectionBody