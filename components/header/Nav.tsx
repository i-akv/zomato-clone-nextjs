"use client"

import { useState } from 'react'
import Link from 'next/link'
import './Nav.css'



import {TbDeviceMobileDown} from 'react-icons/tb'
import {RxHamburgerMenu, RxCross1} from 'react-icons/rx'

const Nav = () => {
  const styles = {
    navLink: "p-3 backdrop-blur-sm capitalize bg-white/30 rounded-xl flex gap-1 items-center w-full items-center justify-center"
  }
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <nav className={`px-6 py-5 grid grid-cols-1 gap-1 absolute top-0 w-full h-screen ${isMenuVisible ? 'backdrop-blur-lg bg-black/20' : ''}`}>
      <div onClick={()=>setIsMenuVisible(!isMenuVisible)} className='cursor-pointer'>
        {isMenuVisible ? <RxCross1/> : <RxHamburgerMenu/>}
      </div>
      <div className={`toggle-menu ${isMenuVisible ? "" : "hidden"}`}>

          <div className="left-nav flex flex-col gap-2 items-center justify-center">
            <Link href="#" className={styles.navLink}><TbDeviceMobileDown/>Get the App</Link>
            <Link href="#" className={styles.navLink}>Investor Relations</Link>
            <Link href="#" className={styles.navLink}>Add restaturant</Link>
            <Link href="#" className={styles.navLink}>Log in</Link>
            <Link href="#" className={styles.navLink}>Sign up</Link>
          </div>
      </div>
    </nav>
  )
}

export default Nav