"use client";

import React from 'react'
import img6 from "../../assets/images/img6.png"
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div id='about'>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div>
          <Image
            className="object-cover h-56 rounded sm:h-96"
            src={img6}
            alt="Content Illustration"
          />
        </div>
        <div className="flex flex-col justify-cent">
          <div className="max-w-xl mb-6">
          <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-sky-400 uppercase rounded-full bg-teal-accent-400">
                  About me
                </p>
              </div>
            <h3 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             Passionate software engineer
            </h3>
            <p className="text-base text-gray-700 md:text-lg">
            Software development is more than just a career; it’s an opportunity to create meaningful solutions that make life easier for others. I love tackling challenges that push my limits and collaborating with others to bring innovative ideas to life.
            </p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};
export default AboutMe