import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p>
                Sou um desenvolvedor full stack apaixonado por criar soluções
                digitais que fazem a diferença. Com background em Análise e
                Desenvolvimento de Sistema pela PUC-PR e 1 ano de experiência no
                mercado, especializei-me em desenvolver aplicações web modernas,
                escaláveis e de alto desempenho.
              </p>
              <p>
                Minha abordagem combina expertise técnica com compreensão de
                negócios, garantindo que cada projeto não apenas atenda aos
                requisitos técnicos, mas também impulsione o crescimento e o
                sucesso dos clientes.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <div className="detail-label">Nome:</div>
                <div className="detail-value">Felipe Paraizo de Oliveira</div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Email:</div>
                <div className="detail-value">fparaizo3@gmail.com</div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Localização:</div>
                <div className="detail-value">Ibaiti, Brasil</div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-title">Frontend</h3>
                <div className="skills-list">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">BootStrap</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="skill-title">Backend</h3>
                <div className="skills-list">
                  <span className="skill-tag">Php</span>
                  <span className="skill-tag">Laravel 12</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">SQLite</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="skill-title">DevOps</h3>
                <div className="skills-list">
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Composer</span>
                  <span className="skill-tag">PostMan</span>
                  <span className="skill-tag">Micro-Serviços</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 5rem 0;
          background: var(--background);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          color: var(--text-primary);
          margin-bottom: 3rem;
          position: relative;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -0.75rem;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(
            135deg,
            var(--primary-blue),
            var(--primary-blue-light)
          );
          border-radius: 2px;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: start;
        }

        .about-intro p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.7;
          text-align: justify;
        }

        .about-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin: 2.5rem 0;
          padding: 2rem;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 12px;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .detail-label {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .detail-value {
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 500;
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--success) !important;
          font-weight: 600;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--success);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2rem;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          height: fit-content;
        }

        .skill-title {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 600;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .skill-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(
            135deg,
            var(--primary-blue),
            var(--primary-blue-light)
          );
          border-radius: 1px;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .skill-tag {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: var(--primary-blue-light);
          padding: 0.6rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: default;
        }

        .skill-tag:hover {
          transform: translateY(-1px);
          background: rgba(59, 130, 246, 0.15);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .about-content {
            gap: 3rem;
          }

          .about-details {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            padding: 1.5rem;
          }

          .skills-grid {
            padding: 1.5rem;
            gap: 1.75rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .about {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1.5rem;
          }

          .section-title {
            font-size: 2.25rem;
            margin-bottom: 2.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-intro p {
            font-size: 1.05rem;
            margin-bottom: 1.25rem;
            text-align: left;
          }

          .about-details {
            margin: 2rem 0;
            padding: 1.5rem;
            gap: 1rem;
          }

          .skills-grid {
            padding: 1.5rem;
            gap: 1.5rem;
          }

          .skill-title {
            font-size: 1.1rem;
            margin-bottom: 0.875rem;
          }

          .skills-list {
            gap: 0.5rem;
          }

          .skill-tag {
            padding: 0.5rem 0.875rem;
            font-size: 0.8rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .about {
            padding: 3rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .about-intro p {
            font-size: 1rem;
            line-height: 1.6;
          }

          .about-details {
            padding: 1.25rem;
            margin: 1.5rem 0;
          }

          .skills-grid {
            padding: 1.25rem;
            gap: 1.25rem;
          }

          .skill-tag {
            padding: 0.5rem 0.75rem;
            font-size: 0.78rem;
          }

          .skills-list {
            gap: 0.4rem;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 360px) {
          .about-details {
            grid-template-columns: 1fr;
          }

          .skills-list {
            justify-content: center;
          }

          .skill-tag {
            flex: 1;
            min-width: calc(50% - 0.4rem);
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
