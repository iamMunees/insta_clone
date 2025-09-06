import React from 'react'
import text from '../assets/text.jpg'
import { TiHome } from "react-icons/ti";
import { CiSearch, CiHeart, CiSquarePlus } from "react-icons/ci";
import { MdExplore } from "react-icons/md";
import { TfiInstagram } from "react-icons/tfi";
import { RiMessengerLine, RiThreadsFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoReorderThree } from "react-icons/io5";


const Sidebar = () => {
  return (
    <div className='flex flex-col items-center justify-between fixed w-72 h-screen border-r-1'>
      <img className='h-20' src={text} alt="" />
      <div>
        <div className='flex p-2 font-bold gap-2'>
          <p className=' text-2xl'><TiHome /></p>
          <p className='cursor-pointer'>Home</p>
        </div>
         <div className='flex p-2 font-bold gap-2'>
          <p className='text-2xl'><CiSearch /></p>
          <p className='cursor-pointer'>Search</p>
        </div>
         <div className='flex p-2 font-bold gap-2'>
          <p className='text-2xl'><MdExplore /></p>
          <p className='cursor-pointer'>Explore</p>
        </div>
         <div className='flex p-2 font-bold gap-2'>
          <p className='text-2xl'><TfiInstagram /></p>
          <p className='cursor-pointer'>Reels</p>
        </div>
         <div className='flex p-2 font-bold gap-2'>
          <p className='text-2xl'><CiSquarePlus /></p>
          <p className='cursor-pointer'>Create</p>
        </div>
         <div className='flex p-2 font-bold gap-2'>
          <p className='text-2xl'><RiMessengerLine /></p>
          <p className='cursor-pointer'>Messages</p>
        </div>
         <div className='flex p-2 font-bold gap-2'>
          <p className='text-2xl'><CiHeart /></p>
          <p className='cursor-pointer'>Notfication</p>
        </div>
         <div className='flex p-2 font-bold gap-2'>
          <p className='text-2xl'><CgProfile /></p>
          <p className='cursor-pointer'>Profile</p>
        </div>
      </div>
      <div className='mr-5'>
        <div className='flex p-2 font-bold gap-2'>
          <p className='text-2xl'><RiThreadsFill /></p>
          <p className='cursor-pointer'>Thread</p>
        </div>
        <div className='flex p-2 font-bold gap-2'>
          <p className='text-2xl'><IoReorderThree /></p>
          <p className='cursor-pointer'>More</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;