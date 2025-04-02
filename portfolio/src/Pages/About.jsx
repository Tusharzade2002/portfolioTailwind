import React from 'react'
import logo from '../assets/WhatsApp  Image 2025-03-17 at 12.05.43 PM.jpeg'
function About() {
  return (
    <div style={{backgroundColor:"#042c30"}}>
        <h1 class="text-center font-black text-5xl py-5 ">About </h1>
        <div class=" flex flex-col items-center md:flex-row md:space-x-12 md:ms-5 ">
          <div>
            <img class="w-60 h-40" src={logo} alt="..." 
            className="object-cover mb-8 rounded w-72 h-80 md:mb-0 md-8"/>
          </div>
          <div class="flex-1">
            <p className="mb-8 text-lg text-center p-3">
              {" "}
              I am a passionate front-end developer with a focus on building
              modern and responsive web applications. With a Strong foundation
              in front-end technologies , I strive to create seamless and
              efficient user experience.
            </p>
            <div className="space-y-4 md:mx-4 md:my-3">
              <div className="flex items-center  flex-col md:flex-row ">
                <label htmlFor="htmlandcss" className=" text-center ">
                  <p>HTML & CSS</p>
                </label>
                <div className=" ms-5 grow bg-gray-800 rounded-full h-2.5 w-60 sm:w-80 ">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                     transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
            </div>

      <div>
              
            <div className="space-y-4 md:mx-4 md:my-3">
              <div className="flex items-center flex-col md:flex-row">
                <label htmlFor="htmlandcss" className=" text-center">
                 <p class="text-center"> React Js</p>
                </label>
                <div className=" ms-5 grow bg-gray-800 rounded-full h-2.5 w-60 sm:w-80 ">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                     transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="space-y-4 md:mx-4 md:my-3">
              <div className="flex items-center flex-col  md:flex-row">
                <label htmlFor="htmlandcss" className=" text-center">
                 <p class="block mx-auto"> JavaScript</p>
                </label>
                <div className="  grow bg-gray-800 rounded-full h-2.5 w-60 sm:w-80 ">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                                     transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>
            </div>
    
      </div>      
            <div className='flex flex-col  justify-around mt-12 text-center md:flex-row me-3'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    3+
                                </h3>
                                <p> Months Of Experience </p>
                            </div>



                            <div>
                                <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    2+
                                </h3>
                                <p> Project Completed </p>
                            </div>

                     
                           <div>
                            <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                1+
                            </h3>
                            <p> Happy Clients</p>
                             </div>
                        </div>
          </div>
          </div>
          </div>
  )
}

export default About