import { motion } from 'framer-motion';
import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';
import Carousel from './Carousel';
import { me } from '../assets';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { certificates } from '../constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col lg:flex-row flex-wrap items-center justify-between">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          {/* NAMA */}
          <h1 className={`${styles.heroHeadText} text-white`}>Hi! I'm <span className='text-[#915eff]'>Angie</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Web Developer, Data and AI Explorer. <br className='sm:block hidden'/>Passionate in transforming curiosity into solutions and meaningful insights.</p>
          <div className="flex flex-row items-center gap-10 mt-4">
            {/* ICONS */}
            <a
              href="https://www.linkedin.com/in/vincentia-angelica-boone/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915eff] transition-colors duration-300 text-[22px]">
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/aangyeoki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915eff] transition-colors duration-300 text-[22px]">
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/yourinstagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915eff] transition-colors duration-300 text-[22px]">
              <FaInstagram />
            </a>
          </div>
          {/* <div className="mt-6 w-full flex justify-center">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-[50%]"> */}
              <Carousel />
            {/* </div>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center lg:justify-end items-center w-full h-full">
        <img
          src={me}
          alt="me"
          className='w-[200px] sm:w-[300px] md:w-[400px] lg:w-[460px] xl:w-[460px] object-contain rounded-2xl mt-[300px] m:mt-[420px] md:mt-[440px] lg:mt-0'
          // className="w-[360px] md:w-[420px] lg:w-[460px] object-contain rounded-2xl translate-y-[40px] mr-6"
        />
      </div>
    </section>
  )
}

export default Hero