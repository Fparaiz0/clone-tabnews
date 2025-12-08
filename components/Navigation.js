import React from "react";

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">Felipe Paraizo</a>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Início
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projetos
          </a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>
            Experiência
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contato
          </a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-btn">
            Contratar
          </a>
          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(5, 20, 15, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(206, 241, 123, 0.1);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo a {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--light);
          text-decoration: none;
          background: linear-gradient(
            135deg,
            var(--accent-lime),
            var(--secondary-mint)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
        }

        .nav-logo a:hover {
          transform: translateY(-1px);
          background: linear-gradient(
            135deg,
            var(--secondary-mint),
            var(--accent-lime)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-menu a {
          color: var(--gray-light);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-menu a:hover {
          color: var(--accent-lime);
          transform: translateY(-1px);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-btn {
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: linear-gradient(
            135deg,
            var(--primary-green),
            var(--primary-green-dark)
          );
          color: var(--light);
          border: none;
          box-shadow: 0 4px 15px rgba(8, 71, 52, 0.3);
        }

        .nav-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(8, 71, 52, 0.4);
          background: linear-gradient(
            135deg,
            var(--primary-green-light),
            var(--primary-green)
          );
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          width: 24px;
          height: 18px;
          position: relative;
          padding: 0;
        }

        .menu-toggle span {
          display: block;
          height: 2px;
          width: 100%;
          background: var(--accent-lime);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
          border-radius: 1px;
        }

        .menu-toggle span:nth-child(1) {
          transform: translateY(0);
        }

        .menu-toggle span:nth-child(2) {
          transform: translateY(6px);
        }

        .menu-toggle span:nth-child(3) {
          transform: translateY(12px);
        }

        .menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .menu-toggle.active span:nth-child(2) {
          opacity: 0;
          transform: translateX(-10px);
        }

        .menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        @media (max-width: 768px) {
          .navigation {
            display: none;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .nav-container {
            padding: 1rem 1.5rem;
          }

          .nav-menu {
            gap: 1.5rem;
          }

          .nav-menu a {
            font-size: 0.9rem;
          }

          .nav-btn {
            padding: 0.625rem 1.25rem;
            font-size: 0.85rem;
          }
        }

        @media (min-width: 769px) {
          .menu-toggle {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .navigation {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .navigation {
            display: none;
          }
        }

        @media (max-width: 360px) {
          .navigation {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
