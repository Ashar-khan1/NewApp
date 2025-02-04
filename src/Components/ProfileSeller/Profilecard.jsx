import React from 'react'
import { ChevronDown } from 'lucide-react';
import PP2 from '/Profile/P2.png'
import PP3 from '/Profile/P3.png'
import PP4 from '/Profile/P4.png'
import PP5 from '/Profile/P5.png'
import PP6 from '/Profile/P6.png'
import { Link } from 'react-router';
function Profilecard() {
    const items=[
        {
            id:1,
            name:'wonderful artwork',
            sell:'1.5k',
            image:'/Profile/P5.png',
        },
        {
            id:2,
            name:'wonderful artwork',
            sell:'1.5k',
            image:'/Profile/P6.png',
        },
        {
            id:3,
            name:'wonderful artwork',
            sell:'1.5k',
            image:'/Profile/P2.png',
        },
        {
            id:4,
            name:'wonderful artwork',
            sell:'1.5k',
            image:'/Profile/P4.png',
        },
        {
            id:5,
            name:'wonderful artwork',
            sell:'1.5k',
            image:'/Profile/P5.png',
        },
        {
            id:6,
            name:'wonderful artwork',
            sell:'1.5k',
            image:'/Profile/P3.png',
        },
        {
            id:7,
            name:'wonderful artwork',
            sell:'1.5k',
            image:'/Profile/P2.png',
        },
        {
            id:8,
            name:'wonderful artwork',
            sell:'1.5k',
            image:'/Profile/P6.png',
        },
    ]
  return (
    <div>
        
       <div>
        <div>
        <div className='max-w-7xl mx-auto justify-between flex'>
            <button className='border-red-600 border rounded-lg text-red-600 w-36 h-12'> Collections</button>
            <button className='border-red-600 border rounded-lg text-red-600 gap-1 w-36 h-12 flex justify-center py-2'> Newest<ChevronDown /></button>
        </div>
            <Link to='/seldetails'>
        <div className='flex-1'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 ms-3 mt-6'>
            
                {items.map((item)=>(
                    <div 
                    key={item.id} 
                    className=' border rounded-[14px] max-w-[417px] max-h-[285px bg-white'>
                        <div className='ms-3 mt-1'>
                            <p className='text-[20px] uppercase font-extrabold'>{item.name}</p>
                            <p className='text-[14px] font-bold'><span className='font-normal text-gray-400'>Item</span> {item.sell}</p>
                        </div>
                        <img src={item.image} alt="" className='w-[410px] mx-auto h-[200px] py-1' />
                    </div>
                ))}
            </div>
        </div>
                </Link>
        </div>
       </div>
    </div>
  

);
};
export default Profilecard;
