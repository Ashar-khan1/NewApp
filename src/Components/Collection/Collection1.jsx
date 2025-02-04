// import React from 'react'
// import Navbar from './Components/navbar'
// import NFTCollections from './Components/NFTCollection'
// import ExploreCollections from './Components/ExploreCollections'
// import Search from './Components/Search'

// function Collection1() {
//   return (
//     <>
//     <Navbar/>
//     <NFTCollections/>
//     <ExploreCollections/>
//     <Search/>
//     </>
//   )
// }

// export default Collection1


import React from 'react'
import Navbar from '../Home/Navbar';
import NFTCollection from './NFTCollection'
import ExploreCollections from './ExploreCollections'
import Search from '../Search';

function Collection1() {
  return (
    <div>
      <Navbar/>
      <NFTCollection/>
      <ExploreCollections/>
      <Search/>
    </div>
  )
}

export default Collection1