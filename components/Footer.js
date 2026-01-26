import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 - {new Date().getFullYear()} Felipe Paraizo</p>
        <nav className="footer-links">
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
          <Link href="/status">Status</Link>
        </nav>
      </div>

      <style jsx>{`
        .footer {
          padding: 2rem 0;
          text-align: center;
          color: var(--light);
          font-size: 1rem;
          position: relative;
          z-index: 20;
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

        .footer-links :global(a) {
          color: var(--light);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links :global(a:hover) {
          color: var(--primary);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
