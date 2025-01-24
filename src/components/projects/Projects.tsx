import React from 'react'
import Image from 'next/image';
import proj1 from "../../assets/images/proj1.png"
import proj2 from "../../assets/images/proj2.png"
import proj3 from "../../assets/images/proj3.png"
import proj4 from "../../assets/images/proj4.png"


const Projects = () => {
  return (
    <div id='projects'>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="text-center">
            <p className="font-medium text-sky-400 dark:text-blue-400">Projects</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">View some of my Projects</h1>

            <p className="mt-3 mb-8 text-gray-500 dark:text-gray-400">Explore some of the projects I’ve built, showcasing my expertise in web development</p>
        </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-2 sm:row-gap-6 sm:grid-cols-2">
              <a href="https://violetauko.github.io/online-schools/" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={proj3}
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white uppercase">
                      E-learning
                    </p>
                  </div>
                </div>
              </a>
              <a href="https://violetauko.github.io/ohore-glass-mart/" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={proj2}
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white uppercase">
                      Glass Mart
                    </p>
                  </div>
                </div>
              </a>
              <a href="https://violetauko.github.io/dream-cars-app/" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={proj1}
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white uppercase">
                    Car website
                    </p>
                  </div>
                </div>
              </a>
              <a href="https://github.com/violetauko/QuinsWeb" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={proj4}
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white uppercase">
                      Quins website
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          </div>
        );
      };

export default Projects