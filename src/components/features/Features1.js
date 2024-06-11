import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe, FaRobot, FaSearch } from "react-icons/fa";
import { SiProgress, SiMicrosoftexcel} from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Front-end Developer"
          des="i'm responsible for implementing the visual and interactive elements of a website 
          or web application. They work closely with web designers and back-end developers to bring 
          the design and functionality of a website to life."
          icon={<SiProgress />}
        />
        <Card
          title="Back-end Developer"
          des="I'm responsible for building and maintaining the server-side logic, databases, 
          and infrastructure of web applications. I work closely with front-end developers 
          to ensure the seamless functioning of web applications."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="i'm responsible to optimization the process of improving a website's visibility and 
          ranking on search engine results pages (SERPs) to increase organic (non-paid) traffic."
          icon={<FaSearch />}
        />
        <Card
          title="Robotic Process Automation"
          des="I'm responsible to automate repetitive, rule-based tasks and processes within organizations and
          to execute tasks such as data entry, data extraction, report generation, and more."
          icon={<FaRobot />}
        />
        <Card
          title="Macro"
          des="I'm resposible to automate repetitive tasks, perform complex calculations, 
          and manipulate data within Excel workbooks."
          icon={<SiMicrosoftexcel />}
        />
        <Card
          title="Hosting Websites"
          des="Aim to provide a reliable, fast, secure, and manageable environment for web 
          applications. By focusing on Performance, Security, Ease of Management 
          and Support and Assistance."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features