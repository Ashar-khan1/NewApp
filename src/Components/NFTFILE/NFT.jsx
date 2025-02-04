
// import React from 'react'
// // import "./index.css"

// // import FilterMenu from './Components/FilterMenu'
  

// import AuctionSection from '../AuctionSection'
// import TopListedSection from '../TopListedSection'
// import LiveAuction from './Components/LiveAuction'
// import TList from './Components/TList'
// import Search from './Components/Search'
// // import Navbar from '.Components/Navbar'
// // import Top from './Components/Top'




// function NFT() {
//   return (
//     <>
//     {/* <Navbar/> */}
//     {/* <FilterMenu/> */}
//     <AuctionSection/>
//     <TopListedSection/>
//     <LiveAuction/>
//     <TList/>
    
  
//     <Search/>
//     {/* <Top/> */}
//     </>
//   )
// }

// export default NFT



import React from 'react'
import { useEffect } from "react";


// import "./index.css";
import Navbar from '../Home/Navbar';
import AuctionSection from './AuctionSection';
import TopListedSection from './TopListedSection';
import LiveAuction from './LiveAuction';
import Search from '../Search';



function NFT() {
  
  return (
    <div>
      <Navbar/>
      <AuctionSection/>
      <TopListedSection/>
      <LiveAuction/>
      <Search/>
    </div>
  )
}

export default NFT