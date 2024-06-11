import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Recruitment for HR (Dynamic Website)"
          des="The recruitment team's goal is to locate and employ competent applicants 
          to cover unfilled roles in the company. This entails being aware of the staffing 
          requirements of different teams or departments and making sure that openings 
          are filled promptly to support business operations."
          src={projectOne}
        />
        <ProjectsCard
          title="Shoppee Poke (Send Bulk Email & SMS) Dynamic System"
          des="The Shoppee poke was created to track every user's action and send mass emails and messages to the customers."
          src={projectTwo}
        />
        <ProjectsCard
      
          des="HRIS, which stands for Human Resource Information System, 
          is a software solution used by organizations to manage and streamline 
          various human resource functions and processes. It serves as a 
          centralized database for storing employee information"
          src={projectThree}
        />
        <ProjectsCard
          title="BPO Automation for Invoice"
          des="Confidential"
          src={projectFour}
        />
        <ProjectsCard
          title="DX Infohub(Dynamic Website)"
          des="BPO Infohub was created to update teams for upcoming events. 
          And for new hires to read important documents also to see all team members."
          src={projectFive}
        />
        <ProjectsCard
          title="Zonta (Dynamic Website)"
          des="Zonta International is a global organization dedicated to empowering women 
          through service and advocacy. Founded in 1919 in Buffalo, New York, Zonta aims 
          to improve the legal, political, economic, educational, health, and professional 
          status of women worldwide."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects