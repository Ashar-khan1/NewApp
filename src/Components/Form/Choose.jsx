import React from 'react'
import { DoorClosed } from "lucide-react";
import { Link } from 'react-router';

function Choose() {

    const Cards=[
        {
            id:1,
            image:'./i.png',
            name:'WonderFul Artwork',
            price:'1.5k',
            select:'Select'

        },
        {
            id:2,
            image:'./i.png',
            name:'WonderFul Artwork',
            price:'1.5k',
            select:'Select'

        },
        {
            id:3,
            image:'./i.png',
            name:'WonderFul Artwork',
            price:'1.5k',
            select:'Select'

        },
        {
            id:4,
            image:'./i.png',
            name:'WonderFul Artwork',
            price:'1.5k',
            select:'Select'

        },
    ]
  return (
    <div>
        <div className='flex mt-32 gap-2 ms-3 h-[1040px]'>
            <div>
            <Link to='/sform'>
            <button className="flex w-[126px] h-[51px] bg-white ps-8 pt-4 rounded-2xl shadow-xl mb-1 "> <DoorClosed/>Back</button>
            </Link>
            </div>
            <div className='w-[1164px] h-[730px] rounded-lg shadow-2xl bg-white'>
                <h1 className='text-center text-[40px] uppercase mt-3'>
                Choose collection
                </h1>
                {
                    Cards.map((Card)=>(
                        <div key={Card.id} className='w-[628px] mt-5 border-2 mx-auto rounded-2xl'>
                            <div className=' flex justify-between'>
                                <div className='flex'>
                                    <img src={Card.image} alt=""  className='p-1 w-[61px] h-[61px]'/>
                                    <div className='ms-2 mt-2'>
                                        <h3 className='font-bold text-[18px]'>{Card.name}</h3>
                                        <p className='text-gray-500 text-sm'>Item <span className='text-black'>{Card.price}</span></p>
                                    </div>
                                </div>
                                <button className='w-[115px] h-[51px] bg-slate-200 mr-2 mt-[5px]  rounded  '>{Card.select}</button>
                            </div>
                        </div>
                    )

                    )
                } 
                <div className='flex justify-end mt-10 mr-32    '>

                <button className='bg-red-600 text-white w-[102px] rounded-md h-[53px]'>Next </button>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Choose