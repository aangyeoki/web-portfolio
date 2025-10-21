import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: "16px 20px", 
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: "6px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden bg-white">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-contain p-1"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[18px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[13px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-3 list-disc ml-5 space-y-1">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[13px] pl-1 tracking-wide leading-snug"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-[-40px]"
      >
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Personal Experiences
        </h2>
      </motion.div>


      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
