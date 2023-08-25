import React from 'react'
import "./Home.css"
import Navbar from '../../Component/Navbar'
import Leftbar from '../../Component/LeftSideContainer/leftbar'
import Rightbar from '../../Component/RightSideContainer/rightbar'
import MainPost from '../../Component/MainPostContainer/mainpost'
import UserPost from '../../Component/MainPostContainer/UserPost'
export default function home() {
  return (
    <div className='home'>
      <Navbar />
      <div className='ComponentContainer'>
        <Leftbar />
        <div>
        <MainPost />
        <UserPost postText="Your post text here" />
        </div>
        <Rightbar />
      </div>
    </div>
  )
}
