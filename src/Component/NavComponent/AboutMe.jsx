import React from 'react'
import Nedu from '/src/assets/Images/Nedu.jpg'

function AboutMe() {
  return (
    <div>
  
      <section className="about-me px-6 py-11 text-white text-center md:text-left">
        <h2 className=" text-[25px] lg:text-[32px] text-center text-indigo-500 md:text-green-500 lg:text-pink-500 underline">About Me</h2>
        <div className="container px-10 flex flex-col lg:flex-row items-center space-y-5 md:space-y-6 lg:space-x-10">
      
          {/* Profile Image (Optional) */}
          <img src={Nedu} alt="Chinedu Hilary" 
          className="w-56 h-60 mt-11 md:w-72 md:h-80 rounded-full shover:scale-108 border-2 border-indigo-400 md:border-green-400 lg:border-pink-400"/>

          {/* Text Content */}
          <div className="">
            
            <p className="text-lg mt-4 leading-relaxed text-black">
              Hi, I'm <span className="font-bold text-indigo-700  md:text-green-700 lg:text-pink-600">Chinedu Hilary</span>, a passionate <span className="text-indigo-700 md:text-green-700 lg:text-pink-600">Front-End Developer</span> based in Nigeria.  
              With a background in <span className="text-green-800">Architecture</span>, I bring a unique perspective to web design, combining aesthetics with functionality.
            </p>

            <p className="text-lg mt-4 leading-relaxed text-black">
              My expertise includes <span className="text-indigo-700  md:text-green-700 lg:text-pink-600">React.js, TailwindCSS, JavaScript, HTML, CSS, API Integrations</span>, and modern web technologies. I love crafting smooth user experiences and responsive, pixel-perfect designs.
            </p>

            <p className="text-lg mt-4 leading-relaxed text-black">
              When I'm not coding, I'm exploring ew design trends, learning new technologies**, or improving my problem-solving skills.
            </p>

            <p className="text-lg mt-4 leading-relaxed text-black">
              I'm currently open to <span className="text-indigo-700  md:text-green-700 lg:text-pink-600">freelance projects, collaborations, and full-time opportunities</span>. Let's build something amazing together! 🚀
            </p>

            {/* Call to Action */}
            <div className="mt-14">
              <a href="/contact-me" className=
              "bg-gradient-to-r from-gray-800 to-indigo-500  hover:text-black md:bg-gradient-to-r md:from-gray-800 md:to-green-400 lg:bg-gradient-to-r lg:from-gray-800 lg:to-pink-400 text-white px-6 py-3 rounded-lg">
                Let's Connect
              </a>
            </div>
          </div>

        </div>
    </section>

    </div>
  )
}

export default AboutMe;
