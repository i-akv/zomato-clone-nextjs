"use client"
import Image from "next/image"
import Link from "next/link"
import mobileAppImg from '@/assets/mobile-app.png'
import { useState } from "react"

import playStoreBadgeImg from '@/assets/app-badges/google-play-badge.webp'
import appStoreBadgeImg from '@/assets/app-badges/app-store-badge.svg'

const ZomatoMobileApp = () => {
  const [linkThrough, setLinkThrough] = useState("Email")

  function onRadioChange(e: any) {
    if (e.target.id == "email") {
      setLinkThrough("Email")
      e.target.checked=true;
    }
    else {
      setLinkThrough("Phone")
      e.target.checked=true;
    }
  }

  return (
    <div className="bg-[#FFFBF7] grid grid-cols-3 py-10 md:py-20">
        <div className="image col-span-3 md:col-span-1">
            <Image src={mobileAppImg} alt="Mobile App" width={0} height={0} className="w-full" />
        </div>
        <div className="right-div grid col-span-3 md:col-span-2 grid-cols-3 gap-1">
            <p className="title col-span-3 text-[2rem] md:text-[2.5rem]">Get the Zomato app</p>
            <p className="col-span-3">We will send you a link, open it on your phone to download the app</p>
            <div className="radiobox flex gap-1 justify-start items-center">

              <input type="radio" name="platform" id="email" onChange={(e)=>onRadioChange(e)} />
              <label htmlFor="email">Email</label>
            </div>
            <div className="radiobox flex gap-1 justify-center items-center">

              <input type="radio" name="platform" id="phone" onChange={(e)=>onRadioChange(e)} />
              <label htmlFor="phone">Phone</label>
            </div>
              <input type="text" className="col-span-2 outline-none px-2 py-1 rounded-lg border-[1px]" placeholder={linkThrough} />
              <button className="bg-[#EF4F5F] rounded-lg text-white tezt-sm">Send Me</button>

              <p className="col-span-3 text-sm mt-1 flex flex-row items-end capitalize">Downlaod app from</p>            
              <div className="col-span-3 gap-1 lg:gap-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-hidden items-start justify-start">
                <Link href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&pli=1" className="col-span-1"><Image src={playStoreBadgeImg} alt='play-store-badge' width={0} height={0} className='h-full' /></Link>
                <Link href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896" className="col-span-1"><Image src={appStoreBadgeImg} alt='play-store-badge' width={0} height={0} className='md:scale-[.90] md:ml-[-8px] md:mt-[-2px] lg:scale-95 mt-[-1px]' /></Link>
              </div>        
        </div>
    </div>
  )
}

export default ZomatoMobileApp