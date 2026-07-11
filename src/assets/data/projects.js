import Ecommerce from '../Images/Ecommerce.jpg'
import ChatApp from '../Images/ChatApp.jpg'
import Deexoption from '../Images/Deexoption.jpg'
import Ajohybrid from '../Images/Ajohybrid.jpg'
import AjohybridCoop from '../Images/AjohybridCoop.jpg'
import foodInventory from '../Images/foodInventory.jpg'


export const projects = [
  {
    id: 1,
    title: "Swift Wear E-Commerce",
    category: "Web Application",
    description: "A high-performance e-commerce platform built with React and Tailwind, featuring complex state management and seamless Stripe checkout integration.",
    tech: ["React", "TailwindCSS", "Stripe API", "Redux"],
    link: "https://swift-wear-e-commerce-site.vercel.app/",
    image: Ecommerce, 
  },
  {
    id: 2,
    title: "Real-Time Chat Engine",
    category: "Fullstack",
    description: "Architected a low-latency chat application utilizing Firebase for real-time data sync and Tailwind for a sleek, responsive UI.",
    tech: ["React", "Firebase", "TailwindCSS", "Context API"],
    link: "https://nedu-chat-app.vercel.app/",
    image: ChatApp,
  },
  {
    id: 3,
    title: "DeexOptions | AI-Powered Trading Platform",
    category: "Fintech",
    description: "A sophisticated fintech platform delivering AI-driven automated trading signals, real-time market data, and portfolio analytics. Features live price feeds, trade execution dashboards, risk management tools, and a sleek dark-mode UI engineered for professional traders.",
    tech: ["React", "TailwindCSS", "Trading API", "AI/ML", "Real-Time Data"],
    link: "https://www.deexoptions.com",
    image: Deexoption,
  },
  {
    id: 4,
    title: "Cooperative Member App",
    category: "Web Application",
    description: "A comprehensive member portal for cooperative societies, featuring dashboards, transactions, and profile management.",
    tech: ["React", "Node.js", "TailwindCSS"],
    link: "https://app.ajohybrid.com",
    image: Ajohybrid,
  },
  {
    id: 5,
    title: "Cooperative Admin App",
    category: "Web Application",
    description: "An administrative dashboard for managing cooperative societies, including user management, loan approvals, and reporting.",
    tech: ["React", "Node.js", "TailwindCSS", "Admin Dashboard"],
    link: "https://coop.ajohybrid.com",
    image: AjohybridCoop,
  },
  {
    id: 6,
    title: "Cafeteria Food Inventory System",
    category: "Fullstack",
    description: "A full-stack cafeteria management platform with dual role-based access — Admins manage inventory (add, edit, update stock, delete items), oversee food categories, and audit system logs with timestamp tracking. Buyers browse available meals, search by name, and place orders through a real-time cart. Built with Nigerian Naira (₦) pricing and a clean SPA interface.",
    tech: ["React", "Node.js", "REST API", "Role-Based Auth", "Vercel"],
    link: "https://fullstack-frontend-food-i-nventory.vercel.app/",
    image: foodInventory,
  },
];