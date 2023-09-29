// import Nav from "../header/Nav"
import Image from "next/image"
import SearchBar from "./SearchBar"
import ZomatoImgWhite from './../../assets/ZomatoImgWhite.png'

import './Hero.css'

const Hero = () => {
  return (
    <div className="hero h-[80vh] lg:h-[90vh] flex justify-center items-center w-full lg:px-[20vw]">
        <section className="main-hero  flex flex-col justify-center items-center w-full">
            <Image src={ZomatoImgWhite} alt="ZOMATO" width={0} height={0} className="w-[70%] md:w-[80%] lg:w-[50%]" />
            <p className="tagline text-white w-[70%] text-[1.2rem] md:text-[2rem] md:w-[90%] text-center">Discover the best food & drinks in <b>Delhi NCR</b></p>
            <SearchBar />
        </section>
    </div>
  )
}

export default Hero