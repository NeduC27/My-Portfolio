import "./index.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Component/NavComponent/Home";
import AboutMe from "./Component/NavComponent/AboutMe";
import Project from "./Component/NavComponent/Project";
import Skill from "./Component/NavComponent/Skill";
import ContactMe from "./Component/NavComponent/ContactMe";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import PropTypes from 'prop-types';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageWrapper>
          
            <Home />
         

          </PageWrapper>
        }
      />
      <Route
        path="/about-me"
        element={
          <PageWrapper>
          <AboutMe />
          </PageWrapper>
        }
      />
      <Route
        path="/project"
        element={
          <PageWrapper>
          <Project />
          </PageWrapper>
        }
      />
      <Route
        path="/skill"
        element={
          <PageWrapper>
          <Skill />
          </PageWrapper>
        }
      />
      <Route
        path="/contact-me"
        element={
          <PageWrapper>
          <ContactMe />
          </PageWrapper>
        }
      />
    </Routes>
    </AnimatePresence>
  );
}


   const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
); 
PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-950 selection:bg-blue-500/30">
        <Nav />
        <main className="flex-grow pt-20 md:pt-24">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
