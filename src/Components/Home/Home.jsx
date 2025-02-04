import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Herosection'
import CardSection from './CardSection'
import FeaturedCollection from './FeaturedCollection'
import TNFT from './TNFT'
import TopSeller from './TopSeller'
import Auction from './Auction'
import TopCollections from './TopCollections'
import RecentlySold from './RecentlySold'
import ImaginationAsset from './ImaginationAsset'
import BoostNFTs from './BoostNFTs'
import FAQAccordion from './FAQAccordion'
import Search from '../Search'
import NFTimg from '../NFTimg'



function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CardSection/>
    <FeaturedCollection/>
    <TNFT/>
    <TopSeller/>
    <Auction/>
    <TopCollections/>
    <RecentlySold/>
    {/* <ImaginationAsset/> */}
    <BoostNFTs/>
    <FAQAccordion/>
    <Search/>
    </>
  )
}

export default Home