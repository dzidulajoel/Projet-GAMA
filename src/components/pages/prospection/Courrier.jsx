import React from 'react'
import { FaPrint, FaQrcode } from 'react-icons/fa'
import stamp from "./image/stamp.png"
const Courrier = ({titre, date}) => {
        const text = `
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit error obcaecati porro 
                dolores! Mollitia ea perspiciatis repellendus corporis tempore repudiandae nobis placeat iste! 
                Assumenda iure nihil deserunt tempora voluptate, odio iusto obcaecati modi non unde? 
                Recusandae consequatur alias dolore ratione magni sint inventore fugiat placeat illo veritatis? Quae, 
                maiores! Soluta.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit error obcaecati porro 
                dolores! Mollitia ea perspiciatis repellendus corporis tempore repudiandae nobis placeat iste! 
                Assumenda iure nihil deserunt tempora voluptate, odio iusto obcaecati modi non unde? 
                Recusandae consequatur alias dolore ratione magni sint inventore fugiat placeat illo veritatis? Quae, 
                maiores! Soluta.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit error obcaecati porro 
                dolores! Mollitia ea perspiciatis repellendus corporis tempore repudiandae nobis placeat iste! 
                Assumenda iure nihil deserunt tempora voluptate, odio iusto obcaecati modi non unde? 
                Recusandae consequatur alias dolore ratione magni sint inventore fugiat placeat illo veritatis? Quae, 
                maiores! Soluta.

        `
        return (
                <div className='h-full w-full flex flex-col'>
                        <div className='h-[5%]'>
                                <h1 className='text-[#FF7F3E] font-extrabold text-xl flex justify-between items-center '>
                                        <span>COURRIER :</span>
                                        <span><FaPrint /></span>
                                </h1>
                        </div>
                        <div className='h-[95%] w-full'>
                                <div className='h-full w-full flex flex-col gap-2'>
                                        <div className='shadowCss w-full px-2 h-[15%]'></div>
                                        <div className=' w-full px-2 h-[75%]'>
                                                <div >
                                                        <p className=' flex justify-end  text-sm font-[200px]'>{titre}</p>
                                                        <p className=' flex justify-end  text-sm font-[200px]'>{date}</p>
                                                </div>
                                                <p className='text-justify text-sm font-[200px] text-gray-500'>{text}</p>
                                                </div>
                                        <div className=' w-full px-2 h-[10%] flex justify-between'>
                                                <div className='flex justify-center items-center'><FaQrcode className='text-4xl'/></div>
                                                <div className='relative'>
                                                        <p className='text-sm ont-[200px] text-gray-500'>Le PDG</p>
                                                        <div className='w-[60px] h-[60px] absolute top-[-7px]'><img src={stamp} alt="" className='w-full h-full'/></div>
                                                        <p className='text-sm pt-5 font-[200px] text-gray-500'>Marc ADEGNON</p>
                                                </div>
                                        </div>
                                </div>

                        </div>

                </div>
        )
}

export default Courrier