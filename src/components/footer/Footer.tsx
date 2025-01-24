import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
          <div className="px-4 pt-16 bg-slate-950">
            <div className="text-center mb-8">
              <div className="text-2xl font-bold text-white ">
                Got a Project? Lets talk!
              </div>
              <br/>
              <Link href="tel:+254795522373" className="w-32 p-3 transition duration-300 hover:shadow-lg bg-sky-400 text-center rounded">
              Get in touch
            </Link>
            </div>
            <div className="pt-5 pb-10 border-t lg:flex-row text-center">
              <p className="text-sm text-gray-600 text-white">
              &copy; {new Date().getFullYear()} Violet Auko, All Rights Reserved
              </p>
            </div>
          </div>
        );
      };

export default Footer