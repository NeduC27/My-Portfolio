import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

function Footer() {
  return (
    <div className=' pt-20'>
      <footer className="bg-gradient-to-r from-gray-800 to-blue-400 md:bg-gradient-to-r md:from-gray-800 md:to-green-600 lg:bg-gradient-to-r lg:from-gray-800 lg:to-pink-400  w-full py-[25px]">

        <div className='flex flex-col items-center px-5 space-y-[20px] md:flex-row md:justify-between md:items-center md:space-x-10 md:px-10'>
          
            <div>
                
              <h1 
                className='font-extrabold text-lg lg:text-2xl underline decoration-pink-500 text-white md:text-2xl'
                >
                Nedu.C
              </h1>

              <p className='md:text-[17px] lg:text-[19px] text-white mt-2'>Front-End developer based in Nigeria, specializing in web and
              <span className='text-black md:text-green-200 lg:text-pink-500'>  software development.</span>.</p>
            
              <p className="font-semibold text-white">Looking for a front-end developer? <a href="/contact-me" className="text-black underline">Let's work together!</a></p>

            </div>    

            <div className="flex flex-col space-y-2 text-white">
                <a href="/" className="hover:text-gray-700">Home</a>
                <a href="/about-me" className="hover:text-gray-700">About</a>
                <a href="/project" className="hover:text-gray-700">Projects</a>
                <a href="/skill" className="hover:text-gray-700">Skill</a>
                <a href="/contact-me" className="hover:text-gray-700">Contact</a>
            </div>


            <div>
              <div className='flex space-x-[10px] cursor-pointer  text-[20px] text-white md:text-2xl lg:text-3xl'>
                  <a href="https://www.instagram.com/chineduhilary/"><FaInstagram className='hover:text-gray-500'/></a>
                  <a href="https://x.com/chinedu43144462/"><FaXTwitter className='hover:text-gray-500'/></a>
                  <a href="https://www.linkedin.com/in/chinedu-hilary-80653a335/"><FaLinkedin className='hover:text-gray-500'/></a>
                  <a href="https://github.com/NeduC27"><FaGithub className='hover:text-gray-500'/></a>
                  <a href="http://mailto:chineduhilary80@gmail.com"><MdOutlineAttachEmail className='hover:text-gray-500'/></a>
              </div>

              <div className='flex space-x-2 text-white mt-2 md:flex-col lg:flex-row'>
                <p>{'\u00A9'}{new Date().getFullYear()} Nedu.C</p>
                <div className='bg-white w-[2px] h-[20px] md:hidden lg:flex'></div>
                <p>All Rights Reserved.</p>
              </div>
            </div>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer;
