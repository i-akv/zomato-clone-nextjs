"use client"

import { useState } from 'react'
import Link from 'next/link'
import './Nav.css'

import Image from 'next/image'
import profilePhoto from '@/assets/Profile_Photo.jpg'

import {TbDeviceMobileDown} from 'react-icons/tb'
import {RxHamburgerMenu, RxCross1} from 'react-icons/rx'

const Nav = () => {
  const styles = {
    navLink: "p-3 backdrop-blur-sm capitalize bg-white/30 rounded-xl flex gap-1 items-center w-full items-center justify-center hover:shadow-md hover:scale-[1.02] duration-500"
  }
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <nav className={`px-6 py-5 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-1 absolute top-0  ${isMenuVisible ? 'w-full h-screen backdrop-blur-xl bg-black/20' : ''}`}>
      <div onClick={()=>setIsMenuVisible(!isMenuVisible)} className='cursor-pointer'>
        {isMenuVisible ? <RxCross1/> : <RxHamburgerMenu/>}
      </div>
      <div className={`toggle-menu ${isMenuVisible ? "" : "hidden"}`}>

          <div className="left-nav flex flex-col gap-2 items-center justify-center h-full">
            <Link href="#" className={styles.navLink}><TbDeviceMobileDown/>Get the App</Link>
            <Link href="#" className={styles.navLink}>Investor Relations</Link>
            <Link href="#" className={styles.navLink}>Add restaturant</Link>
            <Link href="#" className={styles.navLink}>Log in</Link>
            <Link href="#" className={styles.navLink}>Sign up</Link>
            <Link href="https://iakv.vercel.app" className={styles.navLink}><Image src={profilePhoto} alt="#" width={0} height={0} className='w-5 rounded-full' />Contact Developer</Link>
          </div>
      </div>
    </nav>
  )
}

export default Nav