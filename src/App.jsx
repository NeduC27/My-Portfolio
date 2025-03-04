import React from 'react'
import './index.css'
import backgroundImage from './assets/Images/Milky.jpg';
import { HashRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/NavComponent/Home';
import AboutMe from './Component/NavComponent/AboutMe';
import Project from './Component/NavComponent/Project';
import Skill from './Component/NavComponent/Skill';
import ContactMe from './Component/NavComponent/ContactMe';
import Nav from './Component/Nav';
import Footer from './Component/Footer';

function App() {


  return (
   <HashRouter>
    <div className='flex flex-col pt-11 bg-cover min-h-screen' style={{backgroundImage: `url(${backgroundImage})`}}>
      <Nav/>

      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-me' element={<AboutMe/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/skill' element={<Skill/>}/>
          <Route path='/contact-me' element={<ContactMe/>}/>
        </Routes>
      </div>

      <Footer/>
    </div>
   </HashRouter>
  )
}

export default App;
