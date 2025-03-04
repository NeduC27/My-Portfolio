import React from 'react'

function Skill() {
  return (
    <>
    
      <h2 className="text-[25px] mt-11 text-indigo-500 underline md:text-green-500 lg:text-pink-500 text-center">My Skills</h2>
      <div>
        <section className="skills px-6 text-black text-center md:text-left">
          <div className="container mx-auto">
              
            <p className="text-lg mt-4 text-black text-center">
              As a passionate Front-End Developer, I specialize in crafting responsive, dynamic, and user-friendly web applications.  
              Here are the technologies and tools I work with:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                
              {/* Frontend Skills */}
              <div className="bg-gradient-to-r from-gray-800 to-indigo-500 md:bg-gradient-to-r md:from-gray-800 md:to-green-400 lg:bg-gradient-to-r lg:from-gray-800 lg:to-pink-400  p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white">Front-End</h3>
                <ul className="mt-2 space-y-2 text-white">
                  <li>⚡ React.js</li>
                  <li>⚡ JavaScript (ES6+)</li>
                  <li>⚡ HTML5 & CSS3</li>
                  <li>⚡ Tailwind CSS</li>
                </ul>
              </div>

              {/* API & Integrations */}
              <div className="bg-gradient-to-r from-gray-800 to-indigo-500 md:bg-gradient-to-r md:from-gray-800 md:to-green-400 lg:bg-gradient-to-r lg:from-gray-800 lg:to-pink-400 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white">API & Integrations</h3>
                <ul className="mt-2 space-y-2 text-white">
                  <li>⚡ RESTful APIs</li>
                  <li>⚡ Axios & Fetch</li>
                  <li>⚡ Third-Party API Integration</li>
                </ul>
              </div>

              {/* Tools & Version Control */}
              <div className="bg-gradient-to-r from-gray-800 to-indigo-500 md:bg-gradient-to-r md:from-gray-800 md:to-green-400 lg:bg-gradient-to-r lg:from-gray-800 lg:to-pink-400 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white">Tools & Version Control</h3>
                <ul className="mt-2 space-y-2 text-white">
                  <li>⚡ Git & GitHub</li>
                  <li>⚡ Vite</li>
                  <li>⚡ VS Code</li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="bg-gradient-to-r from-gray-800 to-indigo-500 md:bg-gradient-to-r md:from-gray-800 md:to-green-400 lg:bg-gradient-to-r lg:from-gray-800 lg:to-pink-400  p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white">Soft Skills</h3>
                <ul className="mt-2 space-y-2 text-white">
                  <li>⚡ Problem-Solving</li>
                  <li>⚡ Team Collaboration</li>
                  <li>⚡ Communication</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Skill
