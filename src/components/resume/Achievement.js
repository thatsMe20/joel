import React from 'react'
import Title from '../layouts/Title'
import { motion } from "framer-motion";
import { achivementOne, achivementTwo, achivementThree } from "../../assets/index";
import AchievementCard from './AchievementCard';
//import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
    <section
      id="Achievement"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <AchievementCard
          title="Lead Developer of Shopee Poke, and TAR Recruitment System"
          des="This certificate is awarded to Joel Abunales for his outstanding results and conduct in his
            professional field and also for being the lead Developer of Shopee Poke, and TAR Recruitment System
            Projects, under the BPO Services Division. This serves as proof of his competence and
            excellent application of industry standards and methods. This certificate is awarded on August 13, 2021"
          src={achivementTwo}
        />
        <AchievementCard
          title="Robotic Process Automate and Website Development"
          des="This certificate is given to MR. Joel Abunales for being our resource speaker from our
            webinar entitled 'Robotic Process Automation and Website Development'
            for the DX Offshore Division for the Month of January.
            this certificate was awarded om January 21,2022."
          src={achivementOne}
        />
        <AchievementCard
          title="Robotic Process Automate Project Fumio"
          des="This certificate is awarded to Joel Abunales for his great development work in Project Fumio:
             Automation of Suzuki CMS Reports. He is well appreciated by the BPO Services Division for his contribution 
             and positive attitude at work. It serves as a proof of his competence and excellent
             application of industry standards and methods.This certificate is awarded on December 10, 2021"
          src={achivementThree}
        />
      </div>
    </section>
    </motion.div>
  );
}

export default Achievement;
