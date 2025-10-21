import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { desc, p } from 'framer-motion/client';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.3, 0.75)}
    className='flex justify-center'>
      <Tilt options={{
        max: 35, 
        scale: 1, 
        speed: 400
      }} className="bg-tertiary p-4 rounded-2xl w-[280px] sm:w-[300px] md:w-[320px]">
        <div className='relative w-full h-[180px]'>
          <img 
            src={image} 
            alt={name} 
            className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open (source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img 
                  src={github} 
                  alt="github"
                  className='w-0.4 h-0.4 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-white font-bold text-[20px]'>{ name }</h3>
          <p className='mt-2 text-secondary text-[14px]'>{ description }</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} 
              className={`text-[14px] ${tag.color}`}>
                #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-[-40px]">
          <p className={`${styles.sectionSubText} text-center`}> What I have done so far</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>

        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}/>        
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")