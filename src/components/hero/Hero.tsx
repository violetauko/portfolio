"use client";

import React from 'react'
import Link from "next/link";
import img6 from "../../assets/images/img6.png"
import Image from 'next/image';

const Hero = () => {
  return (
    <div id="home">
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 font-poppins">
          <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-sky-400 rounded-full">
                Software engineer
              </p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Hi, Im Violet Auko
              <span className="inline-block text-sky-400">
                A Web developer
              </span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
            I’m a dedicated frontend developer with a keen eye for detail and a strong foundation in quality assurance. I specialize in building intuitive, responsive, and visually appealing user interfaces that enhance the user experience
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="tel:+254795522373" className="w-32 p-2 transition duration-300 hover:shadow-lg bg-sky-400 text-center rounded text-white">
              Contact me
            </Link>
          </div>
            </div>
          </div>
          <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
            <Image
              className="object-cover lg:h-full h-56 rounded-full sm:h-96 bg-sky-100"
              src={img6}
              alt=""
            />
          </div>
        </div>
        </div>
      );
    };

export default Hero