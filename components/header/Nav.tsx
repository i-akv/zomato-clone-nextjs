import React from 'react'
import Link from 'next/link'
import './Nav.css'

import {TbDeviceMobileDown} from 'react-icons/tb'

const Nav = () => {
  return (
    <nav className='px-6 py-5'>
      <div className="left-nav flex gap-1 items-center">
      <TbDeviceMobileDown/><Link href="#" >Get the App</Link>
      </div>
      <div className="right-nav">
        <Link href="#">Investor Relations</Link>
        <Link href="#">Add restaturant</Link>
        <Link href="#">Log in</Link>
        <Link href="#">Sign up</Link>
      </div>
    </nav>
  )
}

export default Nav