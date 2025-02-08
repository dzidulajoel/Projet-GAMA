import React, { useEffect, useState } from 'react'
import Header from '../../sides/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import Infos from './Infos'
import Edit from './Edit'
import Courrier from './Courrier'

const DetailsProspection = () => {
const {id} = useParams()
const navigate = useNavigate()
const [details, setDetails] = useState(null)

useEffect(()=>{
        const fetchDetails  = async ()=>{
                const api = await fetch(`http://localhost:3000/prospection/${id}`)
                const res =await api.json()
                setDetails(res)
        }

        fetchDetails()
}, [])



        return (
                <>
                        <div className="w-full h-full flex flex-col gap-4">
                                <div className="shadowCss p-3 rounded-2xl "><Header name={details?.structure} /></div>
                                <div><button type="button" onClick={()=>{navigate("/prospection")}} className='bg-[#808080] w-[50px] h-[20px] flex justify-start text-white items-center pl-2 rounded-2xl hover:bg-[#000] hover:text-white cursor-pointer'><FaArrowLeft/></button></div>
                                <div className='flex gap-5'>
                                        <div className='w-[30%] h-[600px] rounded-2xl shadowCss p-4 flex flex-col gap-5 pt-3'>
                                                <Infos/>
                                        </div>
                                        <div className='w-[30%] h-[600px] rounded-2xl shadowCss p-4 pt-3'>
                                                <Edit/>
                                        </div>
                                        <div className='w-[40%] h-[600px] rounded-2xl shadowCss p-4 pt-3'>
                                                <Courrier titre = {details?.structure} date = {details?.date}/>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default DetailsProspection