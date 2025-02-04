import React from 'react'
import PP from '/Profile/P.png'
import PP1 from '/Profile/P1.png'
import btn from '/Profile/btn.png'
function Profile() {
  return (
    <div className='mt-[150px]'>
        <div className='flex justify-between max-w-[1320px] mx-auto'>
            <div className='border-2 border-gray-100 w-[236px] h-[50px] p-2 flex gap-2'>
                
                <button className='bg-red-500 text-white w-[90px] h-[35px] rounded p-1  '>Profile</button>
                <button className='w-[125px]'>Profile Settings</button>
                </div>
                <div><button className='bg-red-600 text-white w-[103px] h-[53px] rounded-xl relative top-[60px] mr-2'>Follow</button></div>
        </div>
        <div>
            <img src={PP} alt=""  className='mx-auto w-[1320px] h-[320px]'/>
            <img src={PP1} alt=""  className='mx-auto relative bottom-[55px] '/>
        </div>
        <h1 className='text-center font-semibold text-[40px] uppercase'>William Akarana</h1>
        <div className='flex gap-2 justify-center'>
            <p className='font-light text-gray-400 text-[16px] '><span className='text-black text-[20px] font-bold'>99</span> Followers</p>
            <p className='font-light text-gray-400 text-[16px]'><span className='text-black text-[20px] font-bold'>26</span> Following</p>
            <p className='font-light text-gray-400 text-[16px]'><span className='text-black text-[20px] font-bold'>12</span> Items</p>
        </div>
        <div className='flex justify-center'>

        <button className='flex gap-2 w-[162px] mt-3 h-[53px] bg-slate-50 border px-7 py-3 rounded-xl font-bold'><img src={btn} alt="" />10.89 FRY</button>
        </div>
    </div>
  )
}

export default Profile