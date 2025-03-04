import React from 'react'
import Nedu2 from '/src/assets/Images/Nedu2 (11).png'


function Home() {
  return (
    <div>

      <div className='flex flex-col lg:flex-row px-10 md:flex gap-10 lg:px-16 pt-[50px] md:pt-[75px] md:text-center lg:text-start lg:pt-[100px]'>
        <div className='flex flex-col gap-11 w-64 text-center md:w-[600px]'>
          <h2 className='text-[30px] font-bold md:text-center md:text-[40px] lg:text-[50px]'><span className='text-indigo-400 md:text-green-700 lg:text-pink-500'>Welcome</span> to my portfolio website</h2>
          <p className='md:text-[20px] lg:text-[25px]'>Hello, I am Nedu. A FrontEnd Developer. Here I am presenting my project and services. 
          <span className='text-indigo-400 md:text-green-700 lg:text-pink-500'>  Let's explore</span>.</p>
          
          <div className='space-x-[10px] space-y-4 mx-auto'>
            <button className='border-none rounded-full py-2 text-white cursor-pointer hover:bg-indigo-200 hover:text-black px-[30px] bg-indigo-400 md:bg-green-700 lg:bg-pink-500'><a href="/contact-me">Contact Me</a></button>
            <button className='border-none rounded-full py-2 text-white cursor-pointer hover:bg-indigo-200 hover:text-black px-[30px] bg-indigo-400 md:bg-green-700 lg:bg-pink-500'>
              <a href="https://drive.google.com/file/d/1AgOJ94TxLoIEDy89RLT1RpKg6pXPqnLH/view?usp=sharing">Resume</a></button>
          </div>
        </div>

        <div className=' mx-auto'>
          <img src={Nedu2} alt="" className='mt-11 hover:scale-108 border-2 border-indigo-400 md:border-green-400 lg:border-pink-400 rounded-[300px] w-[260px] h-[300px] lg:w-[330px] lg:h-[370px]'/>
        </div>
      </div>
    </div>
  )
}

export default Home;
