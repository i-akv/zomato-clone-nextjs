import Nav from "../header/Nav"
import Image from "next/image"
import SearchBar from "./SearchBar"
import ZomatoImgWhite from './../../assets/ZomatoImgWhite.png'

import './Hero.css'

const Hero = () => {
  return (
    <div className="hero bg-slate-400">
        <Nav />
        <section className="main-hero flex flex-col justify-start items-center">
            <Image src={ZomatoImgWhite} alt="ZOMATO" width={500} />
            <p className="tagline">Discover the best food & drinks in <b>Delhi NCR</b></p>
            <SearchBar />
        </section>
    </div>
  )
}

export default Hero