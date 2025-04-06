import React from 'react'
import { CalendarDays } from 'lucide-react'
import './work.css'
import { motion } from 'framer-motion'
function Work() {
  return (
        
        
     <div style={{backgroundColor:"#001433"}} className='py-10'> 
        <motion.h1 
        
           class="text-center text-5xl  text-white py-6 ">Education
        </motion.h1>
            <motion.div 
             
            className='flex  justify-center flex-wrap max-w-210'>
                <div className=' content w-[500px] text-white p-5 m-7 '>
                  <div className='flex text-teal-300'>
                         <CalendarDays />
                         <p className='ms-3'>2018</p>
                  </div>
                      <p className='text-2xl my-5'>SSC</p>
                      <p className='text-xl'>I completed my Secondary School Certificate (SSC) from Balaji Convent School Butibori. During this crucial phase of my education, I achieved an immpressive <p className=' inline text-teal-300'>score of 74.80% </p> </p>
                </div> 

                <div className=' w-[500px] text-white p-5 m-7 '>
                <div className='flex  text-teal-300'>
                         <CalendarDays />
                         <p className='ms-3'>2019-2020</p>
                  </div>
                      <p className='text-2xl my-5'>HSC</p>
                      <p className='text-xl'>I completed my Higher Secondary School Certificate (HSSC) from Balaji Junior college Butibori, where I achieved <p className=' inline text-teal-300'> score of 62.31% </p></p>
                </div> 

                <div className=' w-[500px] text-white  p-5 m-7 '>
                  <div className='flex  text-teal-300'>
                         <CalendarDays />
                         <p className='ms-3'>2020-2023</p>
                  </div>
                      <p className='text-2xl my-5'>Bachelors Degree - RTMN University</p>
                      <p className='text-xl'>I earned my Bachelor's degree in Bachelors of Computer Application from City Premier College. Reflecting my dedication to learning and excelling in my field of study.<p className=' inline text-teal-300'> score of 56.31% </p></p>
                </div> 

                <div className=' w-[500px] text-white  p-5 m-7'>
                    <div className='flex  text-teal-300'>
                         <CalendarDays />
                         <p className='ms-3'>2023-2025</p>
                    </div>
                      <p className='text-2xl my-5'>HSC</p>
                      <p className='text-xl'>74%</p>
                </div> 
           </motion.div>         
    </div>
  
  )
}

export default Work