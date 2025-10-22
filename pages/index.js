import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    experience: experienceRef,
    contact: contactRef,
  };

  const scrollToSection = (section) => {
    if (sectionRefs[section] && sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        homeRef.current &&
        scrollPosition >= homeRef.current.offsetTop &&
        (!aboutRef.current || scrollPosition < aboutRef.current.offsetTop)
      ) {
        setActiveSection("home");
      } else if (
        aboutRef.current &&
        scrollPosition >= aboutRef.current.offsetTop &&
        (!projectsRef.current || scrollPosition < projectsRef.current.offsetTop)
      ) {
        setActiveSection("about");
      } else if (
        projectsRef.current &&
        scrollPosition >= projectsRef.current.offsetTop &&
        (!experienceRef.current ||
          scrollPosition < experienceRef.current.offsetTop)
      ) {
        setActiveSection("projects");
      } else if (
        experienceRef.current &&
        scrollPosition >= experienceRef.current.offsetTop &&
        (!contactRef.current || scrollPosition < contactRef.current.offsetTop)
      ) {
        setActiveSection("experience");
      } else if (
        contactRef.current &&
        scrollPosition >= contactRef.current.offsetTop
      ) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [homeRef, aboutRef, projectsRef, experienceRef, contactRef]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="portfolio">
      <Head>
        <title>Felipe Paraizo | Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Desenvolvedor Full Stack especializado em React, Next.js e Node.js. Criando soluções digitais inovadoras e de alto desempenho."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main className="main-content">
        <HeroSection ref={homeRef} />
        <AboutSection ref={aboutRef} />
        <ProjectsSection ref={projectsRef} />
        <ExperienceSection ref={experienceRef} />
        <ContactSection ref={contactRef} />
      </main>

      <Footer />

      <style jsx global>{`
        :root {
          /* Nova paleta de cores baseada no DesignShala */
          --primary-green: #084734;
          --primary-green-dark: #063626;
          --primary-green-light: #0a5942;
          --accent-lime: #cef17b;
          --accent-lime-dark: #b8d46a;
          --accent-lime-light: #e0f7a4;
          --secondary-mint: #ceedb2;
          --secondary-mint-dark: #b4d49a;
          --secondary-mint-light: #e2f4d0;

          /* Cores neutras adaptadas */
          --dark: #0a1f18;
          --darker: #05140f;
          --light: #f8faf9;
          --gray: #94a39c;
          --gray-light: #e2e8e5;
          --gray-dark: #64746b;
          --success: #10b981;

          /* Mantendo algumas cores para consistência */
          --primary: var(--primary-green);
          --primary-dark: var(--primary-green-dark);
          --primary-light: var(--primary-green-light);
          --accent: var(--accent-lime);
          --secondary: var(--secondary-mint);

          /* Variáveis de design */
          --border-radius: 12px;
          --shadow-sm: 0 1px 2px 0 rgba(4, 71, 52, 0.05);
          --shadow:
            0 4px 6px -1px rgba(4, 71, 52, 0.1),
            0 2px 4px -1px rgba(4, 71, 52, 0.06);
          --shadow-lg:
            0 10px 15px -3px rgba(4, 71, 52, 0.1),
            0 4px 6px -2px rgba(4, 71, 52, 0.05);
          --shadow-xl:
            0 20px 25px -5px rgba(4, 71, 52, 0.1),
            0 10px 10px -5px rgba(4, 71, 52, 0.04);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          font-size: 16px;
        }

        body {
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            sans-serif;
          line-height: 1.6;
          color: var(--light);
          background: var(--darker);
          overflow-x: hidden;
          min-height: 100vh;
        }

        /* Estrutura principal */
        .portfolio {
          min-height: 100vh;
          position: relative;
          background: linear-gradient(
            135deg,
            var(--darker) 0%,
            var(--dark) 50%,
            var(--darker) 100%
          );
        }

        .main-content {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* NOVO BACKGROUND COM AS CORES DO DESIGNSHALA */
        .portfolio::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background:
            /* Gradientes principais com a nova paleta */
            radial-gradient(
              circle at 15% 50%,
              rgba(8, 71, 52, 0.15) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(206, 241, 123, 0.08) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 50% 80%,
              rgba(206, 237, 178, 0.05) 0%,
              transparent 50%
            ),
            /* Texturas sutis adicionais */
              radial-gradient(
                circle at 70% 20%,
                rgba(10, 89, 66, 0.1) 0%,
                transparent 40%
              ),
            radial-gradient(
              circle at 30% 70%,
              rgba(184, 212, 106, 0.06) 0%,
              transparent 40%
            );
          z-index: 0;
          pointer-events: none;
        }

        /* Efeito de partículas sutis */
        .portfolio::after {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(
              circle at 25% 25%,
              rgba(206, 241, 123, 0.1) 2px,
              transparent 2px
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(206, 237, 178, 0.08) 1px,
              transparent 1px
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(8, 71, 52, 0.05) 3px,
              transparent 3px
            );
          background-size:
            50px 50px,
            30px 30px,
            80px 80px;
          z-index: 0;
          pointer-events: none;
          opacity: 0.4;
          animation: floatParticles 20s ease-in-out infinite;
        }

        @keyframes floatParticles {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        /* Garantindo que o conteúdo fique acima do background */
        .main-content > * {
          position: relative;
          z-index: 2;
        }

        ::selection {
          background: var(--accent-lime);
          color: var(--primary-green);
        }

        /* Container principal */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* SEÇÕES - ESPAÇAMENTO HIERARQUIZADO */

        /* Hero tem espaçamento maior */
        .hero-section {
          padding: 8rem 0 6rem 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        /* Seções principais */
        .main-section {
          padding: 5rem 0;
        }

        /* Seções secundárias */
        .secondary-section {
          padding: 4rem 0;
        }

        /* Seção de contato menor */
        .contact-section {
          padding: 3rem 0;
        }

        /* Títulos das seções - COM NOVAS CORES */
        .section-title {
          font-size: 2.75rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(
            135deg,
            var(--accent-lime) 0%,
            var(--secondary-mint) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          line-height: 1.2;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(
            90deg,
            var(--accent-lime),
            var(--primary-green)
          );
          border-radius: 2px;
        }

        /* Subtítulos */
        .section-subtitle {
          font-size: 1.25rem;
          color: var(--gray-light);
          text-align: center;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* Grid e layouts */
        .grid-container {
          display: grid;
          gap: 2rem;
          margin-top: 2rem;
        }

        .grid-2 {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .grid-3 {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        /* Cards - COM NOVAS CORES */
        .card {
          background: rgba(10, 31, 24, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(206, 241, 123, 0.1);
          border-radius: var(--border-radius);
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--accent-lime),
            transparent
          );
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: rgba(206, 241, 123, 0.3);
          box-shadow:
            0 10px 30px rgba(8, 71, 52, 0.2),
            0 5px 15px rgba(206, 241, 123, 0.1);
        }

        .card-small {
          padding: 1.5rem;
        }

        .card-large {
          padding: 2.5rem;
        }

        .card-header {
          margin-bottom: 1.5rem;
        }

        .card-body {
          margin-bottom: 1.5rem;
        }

        .card-footer {
          margin-top: auto;
        }

        /* Botões - COM NOVAS CORES */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
          text-align: center;
          min-width: 140px;
        }

        .btn-small {
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
          min-width: 120px;
        }

        .btn-large {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          min-width: 160px;
        }

        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .btn:hover::before {
          left: 100%;
        }

        .btn-primary {
          background: linear-gradient(
            135deg,
            var(--primary-green),
            var(--primary-green-dark)
          );
          color: var(--light);
          box-shadow: var(--shadow-lg);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-xl);
          background: linear-gradient(
            135deg,
            var(--primary-green-light),
            var(--primary-green)
          );
        }

        .btn-secondary {
          background: transparent;
          color: var(--accent-lime);
          border: 2px solid var(--accent-lime);
        }

        .btn-secondary:hover {
          background: rgba(206, 241, 123, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(206, 241, 123, 0.2);
        }

        /* Listas */
        .list {
          list-style: none;
          margin: 1.5rem 0;
        }

        .list-item {
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(206, 237, 178, 0.1);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .list-item:last-child {
          border-bottom: none;
        }

        /* Textos e parágrafos */
        .text-lead {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--secondary-mint);
          margin-bottom: 1.5rem;
        }

        .text-body {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--gray-light);
          margin-bottom: 1rem;
        }

        .text-small {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--gray);
        }

        /* RESPONSIVIDADE */

        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }

          .hero-section {
            padding: 6rem 0 4rem 0;
            min-height: auto;
          }

          .main-section {
            padding: 3rem 0;
          }

          .secondary-section {
            padding: 2.5rem 0;
          }

          .contact-section {
            padding: 2rem 0;
          }

          .section-title {
            font-size: 2.25rem;
            margin-bottom: 2rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .grid-container {
            gap: 1.5rem;
            margin-top: 1.5rem;
          }

          .card {
            padding: 1.5rem;
          }

          .card-large {
            padding: 2rem;
          }

          /* Background mais simples para mobile */
          .portfolio::before {
            background:
              radial-gradient(
                circle at 10% 20%,
                rgba(8, 71, 52, 0.15) 0%,
                transparent 40%
              ),
              radial-gradient(
                circle at 90% 20%,
                rgba(206, 241, 123, 0.08) 0%,
                transparent 40%
              );
          }

          .portfolio::after {
            opacity: 0.2;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .hero-section {
            padding: 5rem 0 3rem 0;
          }

          .main-section {
            padding: 2.5rem 0;
          }

          .secondary-section {
            padding: 2rem 0;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .card {
            padding: 1.25rem;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Utilitários de espaçamento */
        .mb-1 {
          margin-bottom: 0.5rem;
        }
        .mb-2 {
          margin-bottom: 1rem;
        }
        .mb-3 {
          margin-bottom: 1.5rem;
        }
        .mb-4 {
          margin-bottom: 2rem;
        }
        .mb-5 {
          margin-bottom: 3rem;
        }

        .mt-1 {
          margin-top: 0.5rem;
        }
        .mt-2 {
          margin-top: 1rem;
        }
        .mt-3 {
          margin-top: 1.5rem;
        }
        .mt-4 {
          margin-top: 2rem;
        }
        .mt-5 {
          margin-top: 3rem;
        }

        .py-1 {
          padding: 0.5rem 0;
        }
        .py-2 {
          padding: 1rem 0;
        }
        .py-3 {
          padding: 1.5rem 0;
        }
        .py-4 {
          padding: 2rem 0;
        }
        .py-5 {
          padding: 3rem 0;
        }
      `}</style>
    </div>
  );
}
