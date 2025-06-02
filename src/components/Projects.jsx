import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import ProjectDetailModal from './ProjectDetailModal';

const ProjectCard = ({ title, description, technologies, image, link, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-primary/50 rounded-lg overflow-hidden border border-tertiary/20 hover:border-secondary/50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {/* Optional: Add project image here if available */}
      {/* <img src={image} alt={title} className="w-full h-48 object-cover" /> */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-secondary">{title}</h3>
        <p className="text-tertiary mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm text-secondary bg-secondary/10 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* We will handle the view project link in the modal */}
        {/* <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-secondary/80 transition-colors"
        >
          View Project →
        </a> */}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Assistant IA pour l'Éducation Mathématique - EMSI Casablanca (2024)",
      description: "Assistant pédagogique intelligent pour élèves en Sciences Mathématiques. Traitement de +13 000 exercices avec réponses en LaTeX. Déployé sur GPU cloud (Vast.ai).",
      technologies: ["Flask", "Python", "React", "Tailwind CSS", "LLaMA 3.2", "FAISS", "RAG"],
      image: "/project1.jpg", // Placeholder, update with actual image if available
      link: "#", // Original link, not used for card anymore
      details: "This project involved building an intelligent educational assistant leveraging AI models to help students with math problems. It processes a large dataset of exercises and generates detailed solutions, including LaTeX formatting for mathematical expressions. The application was deployed on a GPU cloud platform for efficient processing.", // Creative detail
      githubLink: "https://github.com/elkoualiilyas/allo_mathy_devoloppement" // Placeholder GitHub link
    },
    {
      title: "BAWABATI - Portail Web Sécurisé (2024)",
      description: "Plateforme web pour gestion d'accès et rôles (admin/user) avec authentification, tableau de bord, et API RESTful.",
      technologies: ["Django", "React.js", "Tailwind CSS", "MySQL"],
      image: "/project2.jpg", // Placeholder, update with actual image if available
      link: "#", // Original link, not used for card anymore
      details: "BAWABATI is a secure web portal designed for managing user access and roles. It features a robust authentication system, admin and user dashboards with different permissions, and a well-defined RESTful API for data interaction. Built with Django and React.js for a scalable and maintainable architecture.", // Creative detail
      githubLink: "https://github.com/elkoualiilyas/educational_system" // Placeholder GitHub link
    },
    {
      title: "Kouali-S - Interface Vendeurs/Acheteurs/Livreurs (2024)",
      description: "Interface responsive avec tableaux de bord personnalisés. Inclut visualisation via Chart.js et un admin sécurisé.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/project3.jpg", // Placeholder, update with actual image if available
      link: "https://kouali-s.vercel.app/",
      details: "Kouali-S provides a multi-role interface for sellers, buyers, and delivery personnel. It includes personalized dashboards for each user type, data visualization using Chart.js for insights, and a secure admin panel for management. The frontend is built using standard web technologies (HTML, CSS, JS, Bootstrap) for broad compatibility.", // Creative detail
      githubLink: " https://elkoualiilyas.github.io/kouali-s/" // Placeholder GitHub link (if you have one for the source code) or keep it if the link is to a live demo
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              onClick={() => handleProjectClick(project)} 
            />
          ))}
        </div>
      </div>
      <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};

export default Projects; 