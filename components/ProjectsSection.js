import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pré-Postagem MagnoJet",
      description:
        "Esta plataforma foi desenvolvida para a empresa MagnoJet e tem como objetivo realizar a pré-postagem através das APIs oficiais dos Correios, oferecendo um fluxo simples, seguro e eficiente para geração de PLPs, etiquetas e integração logística.",
      image:
        "https://github.com/user-attachments/assets/a08ce511-de74-4edc-a364-52ed6cb1e96c",
      technologies: [
        "Laravel 12",
        "Php",
        "MySQL",
        "Compose",
        "Tailwind CSS",
        "Node.js",
      ],
      githubUrl: "https://github.com/Fparaiz0/prepostagem_magnojet",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos Destacados</h2>
        <p className="section-subtitle">
          Soluções inovadoras desenvolvidas com as melhores tecnologias do
          mercado
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      className="project-link github"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver código no GitHub"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span>⭐ Destaque</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Código</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          padding: 5rem 0;
          background: rgba(5, 20, 15, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .project-card {
          background: rgba(10, 31, 24, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(206, 241, 123, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(206, 241, 123, 0.3);
          box-shadow:
            0 20px 40px rgba(8, 71, 52, 0.3),
            0 10px 25px rgba(206, 241, 123, 0.1);
        }

        .project-card.featured {
          border-color: rgba(206, 241, 123, 0.4);
          box-shadow:
            0 25px 50px rgba(8, 71, 52, 0.4),
            0 15px 30px rgba(206, 241, 123, 0.15);
        }

        .project-image-container {
          position: relative;
          overflow: hidden;
          height: 300px;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(8, 71, 52, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-lime);
          color: var(--primary-green);
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .project-link:hover {
          transform: scale(1.1);
          background: transparent;
          border-color: var(--accent-lime);
          color: var(--accent-lime);
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(
            135deg,
            var(--accent-lime),
            var(--secondary-mint)
          );
          color: var(--primary-green);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(206, 241, 123, 0.3);
        }

        .project-content {
          padding: 2rem;
        }

        .project-header {
          margin-bottom: 1.5rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-lime);
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .project-card.featured .project-title {
          background: linear-gradient(
            135deg,
            var(--accent-lime),
            var(--secondary-mint)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-description {
          color: var(--secondary-mint);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          background: rgba(206, 241, 123, 0.1);
          color: var(--accent-lime);
          padding: 0.4rem 0.9rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(206, 241, 123, 0.2);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(206, 241, 123, 0.2);
          transform: translateY(-1px);
        }

        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .project-actions .btn {
          flex: 1;
          padding: 0.875rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .projects {
            padding: 3rem 0;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .project-image-container {
            height: 200px;
          }

          .project-content {
            padding: 1.5rem;
          }

          .project-actions {
            flex-direction: column;
          }

          .project-actions .btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .project-card {
            margin: 0 0.5rem;
          }

          .project-content {
            padding: 1.25rem;
          }

          .project-title {
            font-size: 1.3rem;
          }

          .project-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
