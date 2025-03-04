import React from 'react'

function Project() {
  return (
    <div>
      <section className="projects px-6 py-12 text-white">
  <div className="container mx-auto">
    
    <h2 className="text-[19px]  md:text-2xl underline text-indigo-400 md:text-green-700 lg:text-pink-500 text-center">My Projects</h2>
    <p className="text-lg text-black text-center mt-2">
      Here are some of the projects I've worked on, showcasing my expertise in React.js, TailwindCSS, API Integration, and Front-End Development.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      
      {/* Project 1 */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <img src="/images/project1.png" alt="Project 1" className="rounded-lg"/>
        <h3 className="text-xl font-bold mt-4">E-Commerce Website</h3>
        <p className="text-gray-300 mt-2">
          A fully responsive e-commerce platform built with React.js, TailwindCSS, and Stripe API for seamless checkout.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="https://myecommerceapp.com" className="text-indigo-400 hover:underline">Live Demo</a>
          <a href="https://github.com/yourgithub/ecommerce-app" className="text-pink-400 hover:underline">GitHub</a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <img src="" alt="Project 2" className="rounded-lg"/>
        <h3 className="text-xl font-bold mt-4">Real-Time Chat App</h3>
        <p className="text-gray-300 mt-2">
          A chat application with real-time messaging using Firebase and TailwindCSS.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="https://mychatapp.com" className="text-indigo-400 hover:underline">Live Demo</a>
          <a href="https://github.com/yourgithub/chat-app" className="text-pink-400 hover:underline">GitHub</a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <img src="/images/project3.png" alt="Project 3" className="rounded-lg"/>
        <h3 className="text-xl font-bold mt-4">Portfolio Website</h3>
        <p className="text-gray-300 mt-2">
          My personal portfolio website built with React.js, Vite, and TailwindCSS to showcase my skills and projects.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="https://myportfolio.com" className="text-indigo-400 hover:underline">Live Demo</a>
          <a href="https://github.com/yourgithub/portfolio" className="text-pink-400 hover:underline">GitHub</a>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Project;
