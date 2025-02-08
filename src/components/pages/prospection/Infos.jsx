import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Infos = () => {
        const { id } = useParams()
        const [details, setDetails] = useState(null)

        useEffect(() => {
                const fetchDetails = async () => {
                        const api = await fetch(`http://localhost:3000/prospection/${id}`)
                        const res = await api.json()
                        setDetails(res)
                }

                fetchDetails()
        }, [])

        return (
                <>
                        <h1 className='text-[#FF7F3E] font-extrabold text-xl'>INFORMATIONS :</h1>
                        <p className='text-gray-500'> <span className='font-bold text-xl'>Nom : </span>{details?.structure}</p>
                        <p className='text-gray-500'> <span className='font-bold text-xl'>Date de courrier : </span>{details?.date}</p>
                        <p className='text-gray-500'> <span className='font-bold text-xl'>Date de Demo : </span>{details?.date}</p>
                        <p className='text-gray-500'> <span className='font-bold text-xl'>Date de vente : </span>{details?.date}</p>
                        <p className='text-gray-500'> <span className='font-bold text-xl'>Etat :</span> {details?.etat}</p>
                        <p className='text-gray-500'> <span className='font-bold text-xl'>Numero :</span> {details?.numero_structure}</p>
                        <p className='text-gray-500'> <span className='font-bold text-xl'>Email : </span>{details?.email}</p>
                        <p className='text-gray-500'> <span className='font-bold text-xl'>Personne rencontree :</span> {details?.personne_rencontree}</p>
                        <p className='text-gray-500'> <span className='font-bold text-xl'>Description :</span> {details?.description}</p>
                </>
        )
}

export default Infos