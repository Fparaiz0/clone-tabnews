import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(100, prev + Math.random() * 15);
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const loadingTexts = [
      "Inicializando portfólio...",
      "Carregando experiências...",
      "Preparando projetos...",
      "Quase pronto...",
    ];

    if (progress < 100) {
      const currentString = loadingTexts[currentIndex];

      if (currentText.length < currentString.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText("");
          setCurrentIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentIndex, progress]);

  return (
    <div className="loading-screen">
      {" "}
      <div className="loader">
        {" "}
        <div className="loading-background">
          <div className="floating-orb orb-1"></div>{" "}
          <div className="floating-orb orb-2"></div>{" "}
          <div className="floating-orb orb-3"></div>{" "}
        </div>{" "}
        <div className="loader-content">
          <div className="logo-container">
            <div className="logo">FP</div>{" "}
            <div className="logo-glow"></div>{" "}
          </div>{" "}
          <div className="loading-text">
            {currentText || "Inicial"} <span className="cursor">|</span>{" "}
          </div>{" "}
          <div className="progress-container">
            {" "}
            <div className="progress-bar">
              {" "}
              <div className="progress-fill" style={{ width: `${progress}%` }}>
                <div className="progress-shine"></div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="progress-percentage">
              {Math.min(100, Math.round(progress))}%{" "}
            </div>{" "}
          </div>{" "}
          <div className="loading-dots">
            <div className="dot"></div> <div className="dot"></div>{" "}
            <div className="dot"></div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <style jsx>{`
        /* DEFINIÇÃO DAS VARIÁVEIS CSS */
        .loading-screen {
          /* Cores e Fundo */
          --darker: #0c1c16;
          --primary-green: #2ecc71;
          --primary-green-light: #58d68d;
          --accent-lime: #ceff78;
          --accent-lime-dark: #b8cc6b;
          --secondary-mint: #e0f8cf;

          /* Resto do estilo da tela de carregamento */
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--darker) 0%, #05140f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          font-family: "Inter", sans-serif;
        }

        .loading-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }
        /* ... (Restante do seu CSS) ... */

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(
            135deg,
            var(--primary-green),
            var(--primary-green-light)
          );
          top: 20%;
          left: 10%;
          animation-name: float-1;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(
            135deg,
            var(--accent-lime),
            var(--accent-lime-dark)
          );
          top: 60%;
          right: 15%;
          animation-name: float-2;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: linear-gradient(
            135deg,
            var(--secondary-mint),
            var(--secondary-mint-light)
          );
          bottom: 20%;
          left: 20%;
          animation-name: float-3;
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -30px) scale(1.1);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-15px, 20px) scale(1.05);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10px, 15px) scale(1.1);
          }
        }

        .loader-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .logo-container {
          position: relative;
          display: inline-block;
          margin-bottom: 3rem;
        }

        .logo {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(
            135deg,
            var(--accent-lime),
            var(--secondary-mint)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
          animation: logo-pulse 2s ease-in-out infinite;
        }

        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          background: linear-gradient(
            135deg,
            var(--accent-lime),
            var(--secondary-mint)
          );
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.3;
          z-index: 1;
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes logo-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .loading-text {
          font-size: 1.2rem;
          color: var(--secondary-mint);
          margin-bottom: 2.5rem;
          min-height: 1.8rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .cursor {
          animation: blink 1s infinite;
          color: var(--accent-lime);
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .progress-container {
          width: 300px;
          margin: 0 auto 2.5rem;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(206, 237, 178, 0.1);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          margin-bottom: 1rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--primary-green),
            var(--accent-lime)
          );
          border-radius: 10px;
          position: relative;
          transition: width 0.3s ease;
          box-shadow: 0 0 20px rgba(206, 241, 123, 0.3);
        }

        .progress-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shine 2s ease-in-out infinite;
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .progress-percentage {
          font-size: 0.9rem;
          color: var(--secondary-mint);
          font-weight: 600;
          text-align: center;
        }

        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-lime);
          animation: dot-bounce 1.4s ease-in-out infinite both;
        }

        .dot:nth-child(1) {
          animation-delay: -0.32s;
        }
        .dot:nth-child(2) {
          animation-delay: -0.16s;
        }
        .dot:nth-child(3) {
          animation-delay: 0s;
        }

        @keyframes dot-bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .logo {
            font-size: 3rem;
          }

          .logo-glow {
            width: 100px;
            height: 100px;
          }

          .progress-container {
            width: 250px;
          }

          .loading-text {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .logo {
            font-size: 2.5rem;
          }

          .logo-glow {
            width: 80px;
            height: 80px;
          }

          .progress-container {
            width: 200px;
          }

          .loading-text {
            font-size: 1rem;
          }
        }
      `}</style>{" "}
    </div>
  );
};

export default LoadingScreen;
