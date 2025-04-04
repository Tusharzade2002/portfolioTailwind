import React from 'react'
import imgs from '../assets/pexels-fauxels-3184418.jpg'
import img1 from '../assets/pexels-helenalopes-711009.jpg'
import img3 from '../assets/pexels-divinetechygirl-1181400.jpg'
function Work() {
  return (
        
        
     <div style={{backgroundColor:"#001433"}}> 
        <h1 class="text-center font-black text-5xl py-5 text-teal-300">Education</h1>
                <div class="flex flex-col md:flex-row md:mx-10 ">
                       <div class="bg-gray-800 m-4 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                             <img class=" "  src={imgs} alt="..."/>
                             <span class="m-5 text-xl font-medium ">Study Website</span>
                             <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus minima velit. Eligendi harum debitis, laudantium illo optio repudiandae minus magnam. Neque pariatur beatae, fugit reprehenderit obcaecati at commodi sint.</p>
                             <div class="ms-5 my-5 w-40  text-center text-rose-300 border-2 border-rose-400 rounded-xl  hover:text-rose-400">View Projects</div>
                       </div>
                       <div class="bg-gray-800 m-4 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                             <img  className="h-160" src={img1} alt="..."/>
                             <span class="m-5 text-xl font-medium ">Study Website</span>
                             <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus minima velit. Eligendi harum debitis, laudantium illo optio repudiandae minus magnam. Neque pariatur beatae, fugit reprehenderit obcaecati at commodi sint.</p>
                             <div class="ms-5 my-5 w-40  text-center text-rose-300 border-2 border-rose-400 rounded-xl  hover:text-rose-400">View Projects</div>
                       </div>
                       <div class="bg-gray-800 m-4 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105
                       ">
                             <img src={img3} alt="..."/>
                             <span class="m-5 text-xl font-medium ">Study Website</span>
                             <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus minima velit. Eligendi harum debitis, laudantium illo optio repudiandae minus magnam. Neque pariatur beatae, fugit reprehenderit obcaecati at commodi sint.</p>
                             <div class="ms-5 my-5 w-40  text-center text-rose-300 border-2 border-rose-400 rounded-xl hover:text-rose-400">View Projects</div>
                       </div>
                </div>           
    </div>
  
  )
}

export default Work