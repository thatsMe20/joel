import React from "react";
import { motion } from "framer-motion";
import { achivementOne, achivementTwo, achivementThree } from "../../assets/index";
import ResumeCard from "./ResumeCard";
import ProjectsCard from '../projects/ProjectsCard';

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Certificate</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lead Developer of Shopee Poke, and TAR Recruitment System"
            subTitle="This certificate is awarded to Joel Abunales for his outstanding results and conduct in his
            professional field and also for being the lead Developer of Shopee Poke, and TAR Recruitment System
            Projects, under the BPO Services Division. This serves as proof of his competence and
            excellent application of industry standards and methods. This certificate is awarded on August 13, 2021"
            src={achivementTwo}
          />
          <ResumeCard
            title="Robotic Process Automate and Website Development"
            subTitle="This certificate is given to MR. Joel Abunales for being our resource speaker from our
            webinar entitled 'Robotic Process Automation and Website Development'
            for the DX Offshore Division for the Month of January.
            this certificate was awarded om January 21,2022."
            src={achivementOne}
          />
          <ResumeCard
            title="Robotic Process Automate Project Fumio"
            subTitle="This certificate is awarded to Joel Abunales for his great development work in Project Fumio:
            Automation of Suzuki CMS Reports. He is well appreciated by the BPO Services Division for his contribution 
            and positive attitude at work. It serves as a proof of his competence and excellent
            application of industry standards and methods.This certificate is awarded on December 10, 2021"
            src={achivementThree}
          />
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
