"use client"
import React, { useState } from "react";
import ProgressBar from "../circularProgressbar/ProgressBar";

const Skills = () => {
  const [activeSection, setActiveSection] = useState("skills"); 

  const skills = [
    { skill: "HTML", percentage: 100 },
    { skill: "CSS", percentage: 97 },
    { skill: "JavaScript", percentage: 90 },
    { skill: "React", percentage: 80 },
    { skill: "Angular", percentage: 70 },
    { skill: "Tailwind", percentage: 90 },
    { skill: "Nextjs", percentage: 75 },
  ];

  const experiences = [
    { role: "Angular developer", duration: "Dec 2022 - Dec 2024", company: "Tridens technology",description:"Tridens is an innovative charging, billing, and revenue management platform and a converged EV charging management software for Charge Point Operators (CPOs) and E-Mobility Service Providers (EMSPs) that efficiently manage charging." },
    { role: "Software Intern", duration: "Sept 2022 - Nov 2022", company: "Stemscence ltd",description: "It is an educational platform that offers additional learning resources such as revision materials. It allows users to create their own schools, hire teachers, and provide knowledge, while enabling educators to earn extra income."},
    { role: "Quality Assurance", duration: "Nov 2020 - Nov 2022", company: "Copia kenya",description: "A fast-growing e-commerce platform enabling affordable access to goods and services for underserved communities in Kenya."},
    { role: "Software Intern", duration: "May 2022 - oct 2022", company: "Servehunt ltd",description:"It is a platform that helps users connect with service providers for a variety of needs, facilitating seamless interactions between those seeking services and those offering them, ensuring that help is easily accessible wherever it's required." },
    { role: "QA Intern", duration: "Jan 2022 - April 2022", company: "Copia kenya" ,description:"A fast-growing e-commerce platform enabling affordable access to goods and services for underserved communities in Kenya."},
  ];

  return (
    <div id='skills'>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-100">
      <div className="text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-sky-400 uppercase rounded-full bg-teal-accent-400">
          Skills and experiences
          </p>
        </div>
      <h2 className="text-3xl font-bold text-center mb-10">Creative and professional skills and experience on few areas</h2>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveSection("skills")}
          className={`px-6 py-2 text-black rounded-lg ${
            activeSection === "skills" ? "bg-sky-400" : "outline outline-sky-400"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveSection("experiences")}
          className={`px-6 py-2 text-black rounded-lg ${
            activeSection === "experiences" ? "bg-sky-400" : "outline outline-sky-400"
          }`}
        >
          Experiences
        </button>
      </div>

      {activeSection === "skills" && (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-4xl mx-auto">
          {skills.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <ProgressBar percentage={item.percentage} />
              <p className="mt-4 text-lg font-medium">{item.skill}</p>
            </div>
          ))}
        </div>
      )}

      {activeSection === "experiences" && (
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className=""
            >
              
            <div className="duration-300 transform bg-white border-l-4 border-sky-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <div className="flex justify-between">
            <h6 className="mb-2 leading-5">{experience.duration}</h6>
            <p className="text-gray-700">{experience.role}</p>
            </div>
              <p className="font-semibold text-sky-400">{experience.company}</p>
            <p className="text-sm text-gray-900">
              {experience.description}
            </p>
          </div>
        </div>
        </div>
            
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default Skills;
