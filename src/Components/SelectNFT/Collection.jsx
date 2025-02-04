import React from 'react'
import NFT1 from '/SNFT/SNFT1.png'
import NFT2 from '/SNFT/SNFT2.png'
import NFT3 from '/SNFT/SNFT3.png'
import NFT4 from '/SNFT/SNFT4.png'
import { Link } from 'react-router'

function Collection() {
const items=[
    {
        id:1,
        name:'Ashar',
        img:'/SNFT/SNFT4.png'
    },
    {
        id:2,
        img:'./SNFT/SNFT3.png'
    },
    {
        id:3,
        img:'./SNFT/SNFT2.png'
    },
    {
        id:4,
        img:'./SNFT/SNFT1.png'
    },
    {
        id:5,
        name:'Ashar',
        img:'/SNFT/SNFT4.png'
    },
    {
        id:6,
        img:'./SNFT/SNFT3.png'
    },
    {
        id:7,
        img:'./SNFT/SNFT2.png'
    },
    {
        id:8,
        img:'./SNFT/SNFT1.png'
    },
]
  return (
    <div className=''>
        
        <div className='flex justify-between xl:max-w-[1320px] md:mr-14  xl:mr-0 my-10 mt-36'>
            <div className='md:flex md:gap-  '>
            <button className='bg-re-600 text-gray-400 border ms-6 w-24 h-9 rounded-md'>Collection</button> 
            <p className='text-[16px] text-gray-400 p-2 ms-5 md:ms-0'>10/10  Generated</p>

            </div>
            <div className='md:flex'>
                <p className='text-[16px] text-gray-400 p-2'>Select an NFT to mint</p>
             <Link to='/colnft'>
               <button className='bg-red-600 text-white w-24 h-9 rounded-md mr-6'>Mint NFT</button>
             </Link> 
            </div>
        </div>
    {/* <div className='flex flex-wrap justify-around '> */}
    <div className='grid grid-cols-1 md:grid-cols-2 py-2 lg:grid-cols-4 mx-auto ms-5 gap-2 '>
         
        <img src={NFT1} alt="" className='w-[288px] h-[265px] p-1' />
        <img src={NFT2} alt=""className='w-[288px] h-[265px] p-1' />
        <img src={NFT3} alt=""className='w-[288px] h-[265px] p-1' />
        <img src={NFT4} alt="" className='w-[288px] h-[265px] p-1'/>
         
        <img src={NFT1} alt="" className='w-[288px] h-[265px] p-1' />
        <img src={NFT2} alt=""className='w-[288px] h-[265px] p-1' />
        <img src={NFT3} alt=""className='w-[288px] h-[265px] p-1' />
        <img src={NFT3} alt=""className='w-[288px] h-[265px] p-1' />
        <img src={NFT3} alt=""className='w-[288px] h-[265px] p-1' />
        <img src={NFT4} alt="" className='w-[288px] h-[265px] p-1'/>
    </div>
    </div>
  )
}

export default Collection