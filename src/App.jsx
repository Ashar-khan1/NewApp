// import React from 'react'
// import "./index.css"
// import { BrowserRouter as Router, Routes,Route } from 'react-router'
// import Home from './Components/Home'

// function App() {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route to='/'element={'./Components/Home'}/>  
//       </Routes>
//     </Router>
    
//     </>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router'
import { BrowserRouter } from "react-router";

import Home from './Components/Home/Home'
import NFT from './Components/NFTFILE/NFT'
import Collection1 from './Components/Collection/Collection1'
import Sellers from './Components/Sellers/Sellers';
import CreateNFT1 from './Components/CreateNFT/CreateNFT1';
import ProfileSeller from './Components/ProfileSeller/ProfileSeller';
import Single from './Components/SelectNFT/Single';
import Jacob from './Components/AfterSeller/Jacob';
import CNFT from './Components/SelectNFT/CNFT';
import Sform from './Components/Form/Sform';
import Choose from './Components/Form/Choose';
import NFTimg from './Components/NFTimg';
import ColNFT from './Components/Form/ColNFT';
import SelDetails from './Components/SelDetails';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
      
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/nft' element={<NFT/>}/>
           <Route path='/collection1' element={<Collection1/>} />
           <Route path='/sellers' element={<Sellers/>} />
           <Route path='/createnft1' element={<CreateNFT1/>} />
           <Route path='/profileseller' element={<ProfileSeller/> } />
           <Route path='/single' element={<Single/> } />
           <Route path='/cnft' element={<CNFT/>}/>
           <Route path='/jacob' element={<Jacob/> } />
           <Route path='/nftimg' element={<NFTimg/> } />
           <Route path='/sform' element={<Sform/> } />
           <Route path='/choose' element={<Choose/>}/>
           <Route path='/colnft' element={<ColNFT/>}/>
           <Route path='/seldetails' element={<SelDetails/>}/>
        </Routes>

      </BrowserRouter>
      {/* <Home/> */}
      {/* <NFT/> */}
      {/* <Collection1/>  */}
      {/* <Sellers/> */}
    </div>
  )
}

export default App