import CountrySelect from '@/components/footer/CountrySelect'
import LanguageSelect from '@/components/footer/LanguageSelect'
import Link from 'next/link'
import Image from 'next/image'
import './Footer.css'

import playStoreBadgeImg from '@/assets/app-badges/google-play-badge.webp'
import appStoreBadgeImg from '@/assets/app-badges/app-store-badge.svg'

import {AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiFillYoutube} from 'react-icons/ai'
import ZomatoImg from '@/assets/zomato.png'
const Footer = () => {
  return (
    <footer className='px-5 grid grid-cols-1'>
        <div className="col-span-1 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 py-4 items-center ">

            <Image src={ZomatoImg} alt="ZOMATO" width={0} height={0} className='w-[75%] md:w-[35%] md:col-span-4 lg:col-span-7 ' />
            <div className="country-lang grid grid-cols-2 lg:col-span-3 gap-1 md:gap-3 justify-end">
                <CountrySelect />
                <LanguageSelect />
            </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 md:grid-cols-5 gap-10 border-b-2 pb-10">
            <div className="link-col col-span-1 flex flex-col justify-start items-start">
                <h1 className='footer-links-title leading-5'>ABOUT ZOMATO</h1>
                <Link href="#" className='footer-link'>Who We are</Link>
                <Link href="#" className='footer-link'>Blog</Link>
                <Link href="#" className='footer-link'>Work With Us</Link>
                <Link href="#" className='footer-link'>Investor Relations</Link>
                <Link href="#" className='footer-link'>Report Fraud</Link>
                <Link href="#" className='footer-link'>Press Kit</Link>
                <Link href="#" className='footer-link'>Contact Us</Link>
            </div>
            <div className="link-col col-span-1 flex flex-col justify-start items-start">
                <h1 className='footer-links-title leading-5'>ZOMAVERSE</h1>
                <Link href="#" className='footer-link'>Zomato</Link>
                <Link href="#" className='footer-link'>Blinkit</Link>
                <Link href="#" className='footer-link'>Feeding India</Link>
                <Link href="#" className='footer-link'>Zomaland</Link>
            </div>
            <div className="link-col col-span-1 flex flex-col justify-start items-start">
                <h1 className='footer-links-title leading-5'>for restaurants</h1>
                <Link href="#" className='footer-link'>Partner With Us</Link>
                <Link href="#" className='footer-link'>Apps For You</Link>
            </div>
            <div className="link-col col-span-1 flex flex-col justify-start items-start">
                <h1 className='footer-links-title leading-5'>learn more</h1>
                <Link href="#" className='footer-link'>privacy</Link>
                <Link href="#" className='footer-link'>security</Link>
                <Link href="#" className='footer-link'>terms</Link>
                <Link href="#" className='footer-link'>sitemap</Link>
            </div>
            <div className="link-col col-span-1 flex flex-col">
                <h1 className="footer-links-title leading-5">social links</h1>
                <div className="socials grid grid-cols-5 items-stretch gap-1">
                    <AiFillLinkedin className='text-xl' />
                    <AiFillTwitterCircle className='text-xl' />
                    <AiFillYoutube className='text-xl' />
                    <AiFillFacebook className='text-xl' />
                    <AiFillInstagram className='text-xl' />
                </div>
                <div className="apps flex flex-col gap-1">
                    <Link href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&pli=1"><Image src={playStoreBadgeImg} alt='play-store-badge' width={0} height={0} className='w-full' /></Link>
                    <Link href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"><Image src={appStoreBadgeImg} alt='play-store-badge' width={0} height={0} className='w-full' /></Link>
                </div>
            </div>
        </div>

        <section className="terms-service col-span-1">
        <p>
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.

        </p>
        <hr className='py-2 mt-2' />
        <p className='capitalize bold flex items-center'>
            
            This website is cloned to showcase developer skills, Copyright and Trademarks belongs to respectative Owners. If you have any issue regarding clone, Kindly contact me. <Link href="https://www.twitter.com/iakv_" target='_blank' className='text-[2rem]'><AiFillTwitterCircle /></Link>
        </p>
        </section>
    </footer>
  )
}

export default Footer