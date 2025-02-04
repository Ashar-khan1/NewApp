// import React from 'react'

// const New=()=> {

//     const items=[
//         {
//             id:1,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ1.png'
//         },
//         {
//             id:2,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ2.png'
//         },
//         {
//             id:3,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ3.png'
//         },
//         {
//             id:4,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ4.png'
//         },
//         {
//             id:5,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ5.png'
//         },
//         {
//             id:6,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ6.png'
//         },
//         {
//             id:7,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ3.png'
//         },
//         {
//             id:8,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ2.png'
//         },
//         {
//             id:9,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ1.png'
//         },
//         {
//             id:10,
//             name:'Wonderful ARTWORK ',
//             star:'1.5K',
//             image:'./JJimg/JJ6.png'
//         },
       
//     ]
//   return (
//     <>
//     <div className='bg-black'>
//         <div className='uppercase  text-center font-bold text-3xl md:text-[64px] mt-36'>

//         <h1 className=' '>   Jacob Jones   <br /> <span className='text-red-600 text-2xl md:text-[40px] '>collections</span></h1>
//         </div>
//         <div className='w-[924px] hidden lg:block mx-auto'>
//             <img src="JJ.png" alt="" className='mx-auto  lg:relative lg:bottom-14' />
//         </div>
//         <h1 className='text-3xl text-center lg:text-left mt-4 lg:text-[64px] uppercase font-semibold'> collections</h1>

//         <div className=''>
//             <div className='grid sm:grid-cols-1 md:grid-cols-2  mx-auto xl:grid-cols-3 gap-5 justify-around md:ms-7'>
//             {items.map((item)=>(
//                 <div key={item.id} className='bg-white w-[280px] h-[287px] md:w-[337px]  md:h-[250px] rounded-2xl shadow-xl lg:w-[417px] lg:h-[287px]  ' >
//                     <div>
//                     <h1 className='ms-4 mt-1 text-lg '>{item.name}</h1>
                        
//                     <p className='font-bold text-md'><span className='text-gray-400  ms-4  '>Item</span> {item.star}</p>
//                     </div>
//                     <div>
//                         <img src={item.image} alt="" className='mx-auto rounded-xl  xl:w-[387px] h-[181px] shadow-xl mt-2' />
//                     </div>
//                 </div>
                


//             ))}
//             </div>
            
            
//         </div>

//     </div>
//     </>
//   )
// }

// export default New




import React from 'react';

const New = () => {
  const items = [
    { id: 1, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ1.png' },
    { id: 2, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ2.png' },
    { id: 3, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ3.png' },
    { id: 4, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ4.png' },
    { id: 5, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ5.png' },
    { id: 6, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ6.png' },
    { id: 7, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ3.png' },
    { id: 8, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ2.png' },
    { id: 9, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ1.png' },
    { id: 10, name: 'Wonderful ARTWORK', star: '1.5K', image: './JJimg/JJ6.png' },
  ];

  return (
    <>
      <div className="flex flex-col justify-center mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="uppercase text-center font-bold text-3xl md:text-[64px] mt-3">
          <h1>
            Jacob Jones <br />
            <span className="text-red-600 text-2xl md:text-[40px]">collections</span>
          </h1>
        </div>

        {/* Main Image */}
        <div className="w-[924px] hidden lg:block mx-auto">
          <img src="JJ.png" alt="" className="mx-auto lg:relative lg:bottom-14 bg-white shadow-lg mt-24" />
        </div>

        <h1 className="text-3xl text-center lg:text-left mt-4 lg:text-[64px] uppercase font-semibold">
          Collections
        </h1>

        {/* Grid Section */}
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white w-full max-w-[417px] h-[287px] md:h-[250px] rounded-2xl shadow-xl mx-auto"
              >
                {/* Item Details */}
                <div>
                  <h1 className="ms-4 mt-1 text-lg">{item.name}</h1>
                  <p className="font-bold text-md">
                    <span className="text-gray-400 ms-4">Item</span> {item.star}
                  </p>
                </div>
                {/* Item Image */}
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="mx-auto rounded-xl xl:w-[387px] h-[181px] shadow-xl mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
