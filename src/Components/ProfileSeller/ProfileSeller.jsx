import React from 'react'
import Navbar2 from '../CreateNFT/Navbar2'
import Profilecard from './Profilecard'
import Profile from './Profile'
import Search from '../Search'

function ProfileSeller() {
  return (
    <div>
        <Navbar2/>
        <Profile/>
        <Profilecard/>
        <Search/>
    </div>
  )
}

export default ProfileSeller