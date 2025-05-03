import React from 'react'
import { FaEnvelope } from "react-icons/fa";
 


function ContactMe() {
  return (
    <div>

    <section className="contact py-12 text-white text-center mt-12">
      <div className="container mx-auto px-6">
        
        <h2 className="text-3xl underline text-indigo-500  md:text-green-700 lg:text-pink-500">Get in Touch</h2>
        <p className="text-lg text-black mt-2">
          I'm open to freelance work, collaborations, or full-time opportunities.  
          Feel free to send a message, and let's build something amazing together!
        </p>

        {/* Contact Form */}
        <form className="mt-8 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 bg-gray-700 rounded"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 bg-gray-700 rounded"/>
          <textarea placeholder="Your Message" className="w-full p-3 h-32 mb-4 bg-gray-700 rounded"></textarea>
          <button className=" bg-indigo-500  md:bg-green-700 lg:bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600  transition">
            Send Message
          </button>
        </form>

        {/* Contact Info & Socials */}
        <div className="mt-8 text-lg">
          <p className='text-black'>Email: <a href="mailto:chineduhilary80@gmail.com" className="text-black hover:underline">chineduhilary80@gmail.com</a></p>
          <p className='text-black'>Location: Nigeria</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-2xl mt-6">
          <a href="mailto:chineduhilary80@gmail.com" className="text-gray-400 hover:text-red-500"><FaEnvelope /></a>
        </div>

      </div>
    </section>

    </div>
  )
}

export default ContactMe;
