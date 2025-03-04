import React, {useState} from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'


function Nav() {
  const [menuClick, setMenuClick] = useState(false);

  const toggle = () => {
    setMenuClick((prev) => !prev)
  };

  const toggleX = () => {
    setMenuClick(false)
  }

  const content =  <aside>

  <ul 
    className='md:hidden flex flex-col text-bold fixed text-sm  mt-0 ml-0 bg-black border-2 border-pink-500  text-white p-[10px] items-center gap-[5px]'>
    <li><a href="http://">About Me</a></li>
    <li><a href="http://">Project</a></li>
    <li><a href="http://">Skill</a></li>
    <li><a href="http://">Contact Me</a></li>
  </ul>    
     
  </aside> 

  return (
    <nav 
     className='flex justify-between items-center px-10 md:px-12 lg:px-14
     xl:px-16 lg:pt-[20px] pt-[17px]'>

      <h1 
        className='font-bold text-2xl lg:text-3xl lg:text-purple-800 text-blue-600 underline decoration-pink-500 md:text-black md:text-2xl'>
        Nedu.C
      </h1>

      <div>
        <ul 
         className='hidden gap-[38px] text-[18px] text-black font-bold md:flex md:text-[15px]
         lg:text-[19px] xl:text-[21px]'>
          <li className='md:hover:text-2xl md:hover:underline  md:decoration-green-700 lg:decoration-pink-500'><Link to='/'>Home</Link></li>
          <div className='w-[3px] h-[40px] md:bg-green-700 lg:bg-pink-500'></div>
          <li className='md:hover:text-2xl md:hover:underline  md:decoration-green-700 lg:decoration-pink-500'><Link to='/about-me'>About Me</Link></li>
          <div className='w-[3px] h-[40px] md:bg-green-700 lg:bg-pink-500'></div>
          <li className='md:hover:text-2xl md:hover:underline  md:decoration-green-700 lg:decoration-pink-500'><Link to='/project'>Project</Link></li>
          <div className='w-[3px] h-[40px] md:bg-green-700 lg:bg-pink-500'></div>
          <li className='md:hover:text-2xl md:hover:underline  md:decoration-green-700 lg:decoration-pink-500'><Link to='/skill'>Skill</Link></li>
        </ul>
      </div>

      
      <aside className='md:hidden'>
      
       {menuClick &&
         <ul 
            className='md:hidden flex flex-col text-bold fixed text-sm font-bold top-20 right-0 
              bottom-0 p-[10px] items-center gap-[5px]'>
            
            <li className='hover:underline decoration-pink-500'><a href="/">Home</a></li>
            <li className='hover:underline decoration-pink-500'><a href="about-me/">About Me</a></li>
            <li className='hover:underline decoration-pink-500'><a href="/project">Project</a></li>
            <li className='hover:underline decoration-pink-500'><a href="/skill">Skill</a></li>
          </ul>    
        }
      </aside>

      <div className='md:hidden text-xl'>
        {menuClick ? 
        (<FaTimes onClick={toggleX}/>)
        :
        (<RiMenu2Fill onClick={toggle}/>) 
      }
      </div>
    </nav>
  )
}

export default Nav;

/*

Breakpoint prefix	Minimum width	CSS
sm	40rem (640px)	@media (width >= 40rem) { ... }
md	48rem (768px)	@media (width >= 48rem) { ... }
lg	64rem (1024px)	@media (width >= 64rem) { ... }
xl	80rem (1280px)	@media (width >= 80rem) { ... }
2xl	96rem (1536px)	@media (width >= 96rem) { ... }
 */