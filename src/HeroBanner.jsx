import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroBanner.css';

const HeroBanner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set dynamic viewport height
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Cherry blossom animation
    const createBlossom = () => {
      if (window.innerWidth < 480) return;
      
      const blossom = document.createElement('div');
      blossom.className = 'cherry-blossom';
      
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 5 + 5;
      const delay = Math.random() * 5;
      const size = Math.random() * 15 + 5;
      const opacity = Math.random() * 0.5 + 0.5;
      
      blossom.style.left = `${left}vw`;
      blossom.style.width = `${size}px`;
      blossom.style.height = `${size}px`;
      blossom.style.animationDuration = `${animationDuration}s`;
      blossom.style.animationDelay = `${delay}s`;
      blossom.style.opacity = opacity;
      
      document.querySelector('.hero-container').appendChild(blossom);
      
      setTimeout(() => blossom.remove(), animationDuration * 1000);
    };

    // Initialize
    setVh();
    const blossomInterval = setInterval(createBlossom, 300);

    // Event listeners
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setVh);
    }

    return () => {
      clearInterval(blossomInterval);
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setVh);
      }
    };
  }, []);

  const handleButtonClick = () => {
    navigate('/laman');
  };

  return (
    <div className="hero-container">
      {/* Decorative elements */}
      <div className="torii-gate left"></div>
      <div className="torii-gate right"></div>
      
      <div className="floating-kanji">和</div>
      <div className="floating-kanji">美</div>
      <div className="floating-kanji">技</div>
      
      {/* Main content */}
      <div className="hero-content">
        <div className="japanese-decoration left">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        
        <div className="main-content">
          <h1 className="title">
            <span className="en">Ivan Guerrero</span>
            <span className="jp">イヴァン・ゲレーロ</span>
          </h1>
          <h2 className="subtitle">Developer</h2>
          <div className="japanese-theme">
            <div className="kanji">開発者</div>
            <div className="translation">(Developer)</div>
          </div>
          <button className="cta-button" onClick={handleButtonClick}>
            <span>View My Work</span>
            <div className="button-decoration"></div>
          </button>
        </div>
        
        <div className="japanese-decoration right">
          <div className="line"></div>
          <div className="circle"></div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#d4a76a"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#d4a76a"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#d4a76a"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;