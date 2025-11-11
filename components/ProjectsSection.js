import React from "react";
import Image from "next/image";

const ProjectsSection = () => {
  const getYouTubeEmbedUrl = (url) => {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([^&?%]{11})(?:[?&][^\s]*)*$/;
    const match = url.match(regExp);
    return match && match[1]
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&controls=0`
      : null;
  };

  const isLocalVideo = (url) => {
    return (
      url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg")
    );
  };

  const projects = [
    {
      title: "Pré-Postagem MagnoJet",
      description:
        "Esta plataforma foi desenvolvida para a empresa MagnoJet e tem como objetivo realizar a pré-postagem através das APIs oficiais dos Correios, oferecendo um fluxo simples, seguro e eficiente para geração de PLPs, etiquetas e integração logística.",
      image: "/videos/magnojet.mp4",
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
    {
      title: "felipeparaizo.com.br",
      description:
        "Este projeto esta sendo desenvolvido com o objetivo de criar um clone da plataforma TabNews, uma rede social voltada para tecnologia e programação. Além de replicar as funcionalidades dessa plataforma, o projeto também tem como principal objetivo ser um portfólio pessoal.",
      image: "/videos/felipeparaizo.mp4",
      technologies: [
        "JavaScript",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "CI/CD",
        "Jest",
      ],
      githubUrl: "https://github.com/Fparaiz0/felipeparaizo.com.br",
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
          {projects.map((project, index) => {
            const youtubeEmbedUrl = getYouTubeEmbedUrl(project.image);
            const isVideoFile = isLocalVideo(project.image);
            const isVideoContent = youtubeEmbedUrl || isVideoFile;

            return (
              <div
                key={index}
                className={`project-card ${project.featured ? "featured" : ""}`}
              >
                <div className="project-media-container">
                  {youtubeEmbedUrl ? (
                    <div className="video-wrapper">
                      <iframe
                        src={youtubeEmbedUrl}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="project-video"
                      ></iframe>
                    </div>
                  ) : isVideoFile ? (
                    <div className="video-wrapper">
                      <video
                        src={project.image}
                        title={project.title}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="project-video"
                      >
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  )}

                  {!isVideoContent && (
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
                  )}

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
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .projects {
          padding: 4rem 0;
          background: rgba(5, 20, 15, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2.5rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .project-card {
          background: rgba(10, 31, 24, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(206, 241, 123, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          height: fit-content;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(206, 241, 123, 0.3);
          box-shadow:
            0 15px 30px rgba(8, 71, 52, 0.3),
            0 8px 20px rgba(206, 241, 123, 0.1);
        }

        .project-card.featured {
          border-color: rgba(206, 241, 123, 0.4);
          box-shadow:
            0 20px 40px rgba(8, 71, 52, 0.4),
            0 12px 25px rgba(206, 241, 123, 0.15);
        }

        .project-media-container {
          position: relative;
          overflow: hidden;

          width: 100%;
          padding-bottom: 56.25%;
          height: 0;

          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .project-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .project-video,
        .video-wrapper iframe {
          width: 100%;
          height: 100%;
          object-fit: contain;
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
          width: 45px;
          height: 45px;
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
          top: 0.8rem;
          right: 0.8rem;
          background: linear-gradient(
            135deg,
            var(--accent-lime),
            var(--secondary-mint)
          );
          color: var(--primary-green);
          padding: 0.4rem 0.8rem;
          border-radius: 16px;
          font-size: 0.75rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(206, 241, 123, 0.3);
          z-index: 10;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-header {
          margin-bottom: 1.25rem;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent-lime);
          margin-bottom: 0.75rem;
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
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 0;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(206, 241, 123, 0.1);
          color: var(--accent-lime);
          padding: 0.35rem 0.75rem;
          border-radius: 10px;
          font-size: 0.75rem;
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
          padding: 0.75rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 1.5rem;
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
            padding: 0 1rem;
          }

          .project-content {
            padding: 1.25rem;
          }

          .project-actions {
            flex-direction: column;
          }

          .project-actions .btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .project-content {
            padding: 1rem;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .project-description {
            font-size: 0.85rem;
          }

          .featured-badge {
            top: 0.6rem;
            right: 0.6rem;
            padding: 0.3rem 0.6rem;
            font-size: 0.7rem;
          }
        }

        @media (max-width: 360px) {
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
