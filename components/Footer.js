import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Felipe Paraizo. Todos os direitos
          reservados.
        </p>
        <div className="footer-links">
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--dark);
          padding: 2rem 0;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--gray);
          font-size: 0.9rem;
        }

        .footer .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          color: var(--gray);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--primary);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
