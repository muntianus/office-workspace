import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags }) => {
  return (
    <div className="card bg-light border-0 h-100">
      <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code"></i></div>
        <h2 className="fs-4 fw-bold">{title}</h2>
        <p className="mb-0">{description}</p>
        <hr className="my-3" />
        <div>
          {tags.map(tag => (
            <span key={tag} className="badge bg-secondary me-2">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
