"use client"

import { useState, useEffect } from "react"
import "./App.css"

export default function Laman() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Check for system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(prefersDark)

    // Apply dark mode class if needed
    if (prefersDark) {
      document.documentElement.classList.add("dark")
    }

    // Hide splash screen after animation
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <>
      {/* Japanese-inspired splash screen */}
      {showSplash && (
        <div className="splash-screen">
          <div className="splash-content">
            <div className="ink-reveal">
              <span className="japanese-character">ポ</span>
              <span className="japanese-character">ー</span>
              <span className="japanese-character">ト</span>
              <span className="japanese-character">フ</span>
              <span className="japanese-character">ォ</span>
              <span className="japanese-character">リ</span>
              <span className="japanese-character">オ</span>
            </div>
            <div className="ink-brush"></div>
          </div>
        </div>
      )}

      <div className="portfolio-wrapper">
        {/* Japanese pattern overlay */}
        <div className="japanese-pattern"></div>

        {/* Floating elements */}
        <div className="floating-elements">
          <span className="floating-element">和</span>
          <span className="floating-element">美</span>
          <span className="floating-element">技</span>
          <span className="floating-element">術</span>
        </div>

        {/* Cherry blossoms */}
        <div className="cherry-blossoms">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`blossom blossom-${i + 1}`}>
              🌸
            </div>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
  onClick={toggleDarkMode}
  className="dark-mode-toggle"
  aria-label="Toggle dark mode"
>
  <div className="toggle-wrapper">
    <img
      src="/day-night-sun-moon-cycle-svgrepo-com.svg"
      alt="Toggle theme"
      className={`icon ${darkMode ? "rotate" : ""}`}
    />
  </div>
</button>

        <div className="content-container">
          <header className="header">
            <div className="japanese-seal">
              <span>匠</span>
            </div>
            <h1 className="title">
              Ivan <span className="highlight">Guerrero</span>
            </h1>
            <h2 className="subtitle">Front-End Developer</h2>

            <div className="social-links">
              {/* GitHub Icon */}
              <a
                href="https://github.com/mavzee"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/ivan-guerrero-398469328/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Mail Icon */}
              <a href="mailto:ivanguerrero042403@gmail.com" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>

              {/* Resume Button */}
              <a href="/resume.pdf" download>
              <button className="resume-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Resume
              </button>
            </a>
            </div>
          </header>

          <section className="section">
            <div className="section-decoration">
              <div className="brush-stroke"></div>
            </div>
            <h3 className="section-title">About</h3>
            <p className="section-text">
              I work as an IT Specialist at Hyacinth Holding, 
              where I apply my technical skills to support systems, 
              improve workflows, and contribute to efficient digital solutions. 
              Im continuously learning new technologies to expand my capabilities in both development and IT operations.
            </p>
            <div className="button-group">
              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
              <a href="#projects" className="button button-primary">
                View Projects
              </a>
            </div>
          </section>

          <section className="section">
            <div className="section-decoration">
              <div className="brush-stroke"></div>
            </div>
            <h3 className="section-title">Skills & Expertise</h3>
            <div className="skills-list">
              {[
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "React.js",
                "Automation",
                "App script",
                "Responsive Design",
                "UI/UX Design",
                "Git & GitHub",
                
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <div className="section-decoration">
              <div className="brush-stroke"></div>
            </div>
            <h3 className="section-title">Projects</h3>

            <div className="projects-grid">
              <div className="project-card">
                <div className="project-content">
                  <div className="project-stamp">作品</div>
                  <h4 className="project-title">Pokemon App</h4>
                  <p className="project-description">
                  Pokémon Battle Arena is a sleek and interactive app where you can explore a dynamic Pokédex, build your ultimate team, and simulate thrilling Pokémon battles. Track stats, manage your team, and relive the classic strategy of Pokémon with a modern game-inspired interface.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/mavzee/pokemon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="https://pokenard.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-content">
                  <div className="project-stamp">作品</div>
                  <h4 className="project-title">Sci Cal</h4>
                  <p className="project-description">
                  SciCal is a powerful and intuitive scientific calculator app designed for students, engineers, and professionals. Perform advanced mathematical functions with ease, including trigonometry, logarithms, exponentials, and memory operations—all in a sleek, user-friendly interface.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/mavzee/scical"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="https://ivanard.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-content">
                  <div className="project-stamp">作品</div>
                  <h4 className="project-title">Educational & Cultural Tour Blog</h4>
                  <p className="project-description">
                  In one unforgettable week, we traveled across Luzon—uncovering the nation’s rich history, learning from its modern institutions, and experiencing its diverse culture firsthand. From the walled city of Intramuros to the cool heights of Baguio, each day gave us a new lens to view the Philippines with pride and curiosity.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/mavzee/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="https://blogniayban.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-content">
                  <div className="project-stamp">作品</div>
                  <h4 className="project-title">Social Media Adolescent Addiction </h4>
                  <p className="project-description">
                    Complete the short-form complaint style questionnaire based on the court filing questions
                    for Social Media Adolescent Addiction / Personal Injury.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://davidgrossmanandassociates.com/social-media-claim-form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="https://davidgrossmanandassociates.com/social-media-claim-form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="career" className="section">
            <div className="section-decoration">
              <div className="brush-stroke"></div>
            </div>
            <h3 className="section-title">Career Goals</h3>
            <p className="section-text">
              My goal is to become a Senior Frontend Developer, contributing to innovative projects that push the
              boundaries of web development. I aspire to mentor junior developers and share my knowledge with the tech
              community.
            </p>
            <div className="japanese-quote">
              <p>"継続は力なり" - Continuity is power</p>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="section-decoration">
              <div className="brush-stroke"></div>
            </div>
            <h3 className="section-title">Let's Connect</h3>
            <p className="section-text">
              If you're looking for a dedicated and creative front-end developer, I'd love to hear from you! Let's
              collaborate and build something amazing together.
            </p>
            <div className="button-group">
              <a href="mailto:ivanguerrero042403@.com" className="button button-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-guerrero-398469328/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://blogniayban.netlify.app/"  // or your actual blog path
                className="button button-secondary"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  viewBox="0 0 16 16"
                  style={{ marginRight: '8px' }}
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                Blog
              </a>
            </div>
          </section>

          <footer className="footer">
            <div className="japanese-pattern-footer"></div>
            <div className="footer-content">
              <p>© {new Date().getFullYear()} Ivan Guerrero</p>
              <p className="japanese-text">ありがとうございます</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}