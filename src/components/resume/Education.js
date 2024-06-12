import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <EducationCard
            title="BS in Information Technology"
            subTitle="Access Computer College (2014 - 2018)"
            des="The program covers various areas of IT, including software development, networking, database management, web development, and information security."
          />

        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>  
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <EducationCard
            title="Sr. RPA Developer & Sr. Fullstack Developer"
            subTitle="Robotic Process Automation & Fullstack Developer - (2019 - Present)"
            result="transcosmos Asia Philippines"
            des="I automate repetitive, rule-based tasks such as data entry, form processing, and routine calculations. This reduces the workload on clients and minimizes errors.
            and Developed a web-based for prospective employees (TAR & HR Website), a team portfolio (Team Infohub), Emailing and sending bulk 
            messages (Shoppee Poke) and DTR concerning external personnel"
          />
          <EducationCard
            title="Freelancer"
            subTitle="Apple Developer Team - (2023)"
            result="Philippines"
            des="Update front-end development and improve some features.
            Created an Client and product management (Lands Upholstery Shop & Raianseeir Team)"
          />
          <EducationCard
            title="Jr. Web Developer"
            subTitle="Fullstack Developer - ( 2018- 2019)"
            result="DIGITS inc."
            des="Create test strategies and reliable quality assessment criteria to determine whether the program satisfies the required standards. Verify that test results reflect what was anticipated, 
            then perform quality assurance and system debugging."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
