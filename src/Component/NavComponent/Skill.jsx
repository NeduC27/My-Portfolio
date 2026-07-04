import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaLaravel, FaDatabase, FaGitAlt, FaFigma, FaBug, FaCheckCircle, FaClipboardList, FaSearch } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiTypescript, SiRedux } from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Laravel", icon: <FaLaravel />, color: "text-red-500" },
      { name: "Database (SQL/NoSQL)", icon: <FaDatabase />, color: "text-yellow-500" },
      { name: "RESTful APIs", icon: <FaHtml5 />, color: "text-orange-500" },
    ]
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-orange-600" },
      { name: "Figma", icon: <FaFigma />, color: "text-pink-500" },
      { name: "Vite", icon: <SiVite />, color: "text-purple-400" },
      { name: "Project Management", icon: <FaJs />, color: "text-blue-400" },
    ]
  },
  {
    title: "QA & Testing",
    skills: [
      { name: "Bug Tracking", icon: <FaBug />, color: "text-red-400" },
      { name: "Test Case Design", icon: <FaClipboardList />, color: "text-green-400" },
      { name: "Manual Testing", icon: <FaSearch />, color: "text-yellow-400" },
      { name: "Quality Assurance", icon: <FaCheckCircle />, color: "text-emerald-400" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

function Skill() {
  return (
    <section className="skills py-24 blueprint-grid min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Technical <span className="text-blue-500">Arsenal</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive set of technologies and methodologies I use to build 
            world-class digital products.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 border-t-4 border-t-blue-600"
            >
              <h3 className="text-xl font-black mb-8 text-white uppercase tracking-widest text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {["Agile Delivery", "Stakeholder Management", "UX Strategy", "Technical Leadership", "QA & Software Testing"].map((soft, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{soft}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;
