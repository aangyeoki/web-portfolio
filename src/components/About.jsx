import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { p, title } from 'framer-motion/client';
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[135px] sm:w-[165px] md:w-[175px] lg:w-[185px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,}}
          className="bg-tertiary rounded-[15px] py-5 px-4 min-h-[185px] flex justify-evenly items-center flex-col"
>
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
          <h3 className="text-white text-[12px] font-semibold text-center leading-tight">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Vincentia&nbsp;Angelica&nbsp;Boone</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        A 5th-semester CS student at BINUS University with experience 
        and a deep passion for Web Development, Data, and AI. 
        I explore everything from analytics, data mining, and big data 
        to predictive modeling, then bring these ideas to life through 
        web development, connecting data insights with real-world applications. 
        I see data as a reflection of life: unpredictable, fascinating, and 
        full of curiosity. Curiosity drives us to seek meaning, and 
        every uncertainty is an opportunity to discover something new.
      </motion.p>

      <div className="mt-10 mb-16 flex flex-wrap justify-center gap-4 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");