import CountrySelect from '@/components/footer/CountrySelect'
import LanguageSelect from '@/components/footer/LanguageSelect'
import Link from 'next/link'
import Image from 'next/image'
import './Footer.css'

import {AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiFillYoutube} from 'react-icons/ai'
import ZomatoImg from '@/assets/zomato.png'
const Footer = () => {
  return (
    <>
    <footer className='px-5'>
        <div className="top flex justify-between items-center pb-10">
            <Image src={ZomatoImg} alt="ZOMATO" width={100} />
            <div className="country-lang flex gap-3">
                <CountrySelect />
                <LanguageSelect />
            </div>
        </div>
        <div className="links flex gap-3 justify-between items-start">
            <div className="link-col flex flex-col justify-start items-start">
                <h1 className='footer-links-title'>ABOUT ZOMATO</h1>
                <Link href="#" className='footer-link'>Who We are</Link>
                <Link href="#" className='footer-link'>Blog</Link>
                <Link href="#" className='footer-link'>Work With Us</Link>
                <Link href="#" className='footer-link'>Investor Relations</Link>
                <Link href="#" className='footer-link'>Report Fraud</Link>
                <Link href="#" className='footer-link'>Press Kit</Link>
                <Link href="#" className='footer-link'>Contact Us</Link>
            </div>
            <div className="link-col flex flex-col justify-start items-start">
                <h1 className='footer-links-title'>ZOMAVERSE</h1>
                <Link href="#" className='footer-link'>Zomato</Link>
                <Link href="#" className='footer-link'>Blinkit</Link>
                <Link href="#" className='footer-link'>Feeding India</Link>
                <Link href="#" className='footer-link'>Zomaland</Link>
            </div>
            <div className="link-col flex flex-col justify-start items-start">
                <h1 className='footer-links-title'>for restaurants</h1>
                <Link href="#" className='footer-link'>Partner With Us</Link>
                <Link href="#" className='footer-link'>Apps For You</Link>
            </div>
            <div className="link-col flex flex-col justify-start items-start">
                <h1 className='footer-links-title'>learn more</h1>
                <Link href="#" className='footer-link'>privacy</Link>
                <Link href="#" className='footer-link'>security</Link>
                <Link href="#" className='footer-link'>terms</Link>
                <Link href="#" className='footer-link'>sitemap</Link>
            </div>
            <div className="link-col flex flex-col">
                <h1 className="footer-links-title">social links</h1>
                <div className="socials flex justify-between items-start">
                    <AiFillLinkedin className='text-xl' />
                    <AiFillTwitterCircle className='text-xl' />
                    <AiFillYoutube className='text-xl' />
                    <AiFillFacebook className='text-xl' />
                    <AiFillInstagram className='text-xl' />
                </div>
                <div className="apps flex flex-col gap-2">
                    <Link href="#" className='text-center p-2 rounded-lg bg-slate-300'>App Store</Link>
                    <Link href="#" className='text-center p-2 rounded-lg bg-slate-300'>Play Store</Link>
                </div>
            </div>
        </div>

        <section className="terms-service">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.
        </section>
    </footer>
    </>
  )
}

export default Footer