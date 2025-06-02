import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4" onClick={onClose}>
      <div 
        className="bg-primary rounded-lg shadow-xl overflow-hidden w-full max-w-lg max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <button 
          className="absolute top-4 right-4 text-tertiary hover:text-secondary z-10"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="p-6 overflow-y-auto h-full">
          <h3 className="heading text-secondary !mt-0">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-sm text-secondary bg-secondary/10 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-tertiary mb-6">{project.details}</p>

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              View on GitHub →
            </a>
          )}
          {/* Optional: Add image or more details here */}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal; 