import React, { useState, useEffect } from 'react';
import { Code, Mail, Linkedin, Server, Database, FileCode, CheckCircle, ChevronDown, Terminal, Zap, Shield, Menu, X, Sun, Moon } from 'lucide-react';
import profileImg from './assets/sathish-profile-image.jpeg';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  useEffect(() => {
    setAnimateHero(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Theme colors
  const colors = theme === 'dark' ? {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    cardBg: 'rgba(255, 255, 255, 0.03)',
    cardBorder: 'rgba(255, 255, 255, 0.1)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textTertiary: 'rgba(255, 255, 255, 0.5)',
    navBg: 'rgba(15, 12, 41, 0.95)',
    sectionBg: 'rgba(0, 0, 0, 0.2)',
    skillBarBg: 'rgba(255, 255, 255, 0.1)',
  } : {
    primary: '#2563eb',
    secondary: '#7c3aed',
    accent: '#db2777',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 50%, #fce7f3 100%)',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    cardBorder: 'rgba(0, 0, 0, 0.1)',
    textPrimary: '#1f2937',
    textSecondary: 'rgba(0, 0, 0, 0.7)',
    textTertiary: 'rgba(0, 0, 0, 0.5)',
    navBg: 'rgba(255, 255, 255, 0.95)',
    sectionBg: 'rgba(0, 0, 0, 0.03)',
    skillBarBg: 'rgba(0, 0, 0, 0.1)',
  };

  const skills = {
    frontend: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript ES6', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Bootstrap', level: 85 }
    ],
    backend: [
      { name: 'Java 8/11', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring MVC', level: 80 },
      { name: 'Spring Security', level: 80 },
      { name: 'Hibernate/JPA', level: 85 }
    ],
    database: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Redis', level: 70 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Maven', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Swagger', level: 80 }
    ]
  };

  const projects = [
    {
      title: 'Billing Management System',
      description: 'Full-stack billing application with customer management, product inventory, and automated invoice generation.',
      tech: ['Spring Boot', 'React.js', 'MySQL', 'Hibernate', 'REST APIs', 'Swagger'],
      features: [
        'Architected MVC-based application with layered architecture',
        'Designed normalized database with 8+ tables and indexing strategies',
        'Built 15+ RESTful API endpoints with comprehensive error handling',
        'Optimized complex JOIN queries reducing execution time by 40%',
        'Integrated React frontend with Axios for seamless API consumption'
      ],
      icon: FileCode,
      metrics: '40% faster queries • 15+ API endpoints • 10K+ records'
    },
    {
      title: 'Task Management Application',
      description: 'Secure task management system with JWT authentication and role-based access control.',
      tech: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'Spring Security', 'React Router'],
      features: [
        'Implemented JWT-based authentication with Spring Security',
        'Built role-based access control (RBAC) supporting multiple user roles',
        'Complete CRUD operations with service-repository layer separation',
        'Dynamic React SPA with React Hooks (useState, useEffect, useContext)',
        'Established Git workflow with feature branching and code reviews'
      ],
      icon: Shield,
      metrics: 'JWT Auth • RBAC • Reusable Components'
    }
  ];

  const education = [
    {
      degree: 'Java Full Stack Development Certification',
      institution: 'Login360, Chennai',
      period: 'August 2024 – March 2025',
      type: 'Training & Certification',
      highlights: [
        'Completed intensive 7-month program covering Spring Boot microservices, React.js development, RESTful API design',
        'Gained hands-on experience with MySQL optimization and production deployment practices',
        'Built multiple full-stack applications with real-world architecture patterns and Agile methodologies'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Sri Amaravathi College of Arts & Science, Karur',
      period: 'October 2021 – March 2024',
      type: 'Graduation'
    }
  ];

  return (
    <div style={{ 
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      background: colors.background,
      minHeight: '100vh',
      color: colors.textPrimary,
      transition: 'all 0.3s ease'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
        }

        .glow-card {
          background: ${colors.cardBg};
          backdrop-filter: blur(10px);
          border: 1px solid ${colors.cardBorder};
          transition: all 0.3s ease;
        }

        .glow-card:hover {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 1)'};
          border-color: ${colors.primary}80;
          transform: translateY(-5px);
          box-shadow: 0 10px 40px ${colors.primary}33;
        }

        .skill-bar {
          position: relative;
          height: 8px;
          background: ${colors.skillBarBg};
          border-radius: 20px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
          border-radius: 20px;
          transition: width 1s ease-out;
          box-shadow: 0 0 10px ${colors.primary}80;
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .tech-tag {
          background: ${colors.primary}1A;
          border: 1px solid ${colors.primary}4D;
          color: ${colors.primary};
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: ${colors.primary}33;
          border-color: ${colors.primary}80;
          transform: scale(1.05);
        }

        .gradient-text {
          background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-link-custom {
          color: ${colors.textSecondary};
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .nav-link-custom:hover {
          color: ${colors.textPrimary};
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
        }

        .nav-link-custom.active {
          color: ${colors.primary};
          background: ${colors.primary}1A;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
          border-radius: 2px;
        }

        .btn-primary-custom {
          background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
          border: none;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px ${colors.primary}4D;
          color: white;
        }

        .btn-primary-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px ${colors.primary}66;
        }

        .icon-box {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .profile-img {
          width: 230px;
          height: 230px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid ${colors.primary}4D;
          box-shadow: 0 10px 40px ${colors.primary}4D;
          transition: all 0.3s ease;
        }

        .profile-img:hover {
          border-color: ${colors.primary}99;
          box-shadow: 0 15px 50px ${colors.primary}80;
          transform: scale(1.05);
        }

        .brand-logo {
          white-space: nowrap;
        }

        .nav-header {
          gap: 1.5rem;
        }

        .hero-actions .btn {
          min-width: 180px;
        }

        .metrics-badge {
          background: #10b98114;
          border: 1px solid #10b9814D;
          color: #10b981;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-block;
          margin-top: 1rem;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: ${mobileMenuOpen ? '0' : '-100%'};
          width: 70%;
          max-width: 300px;
          height: 100vh;
          background: ${colors.navBg};
          backdrop-filter: blur(10px);
          transition: right 0.3s ease;
          z-index: 1001;
          padding: 5rem 2rem 2rem 2rem;
          box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          opacity: ${mobileMenuOpen ? '1' : '0'};
          pointer-events: ${mobileMenuOpen ? 'all' : 'none'};
          transition: opacity 0.3s ease;
          z-index: 1000;
        }

        .hamburger {
          display: none;
          cursor: pointer;
          background: none;
          border: none;
          color: ${colors.textPrimary};
          padding: 8px;
        }

        .theme-toggle {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          border: 1px solid ${colors.cardBorder};
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: ${colors.textPrimary};
        }

        .theme-toggle:hover {
          background: ${colors.primary}1A;
          border-color: ${colors.primary}4D;
          transform: rotate(180deg);
        }

        @media (max-width: 991px) {
          .hamburger {
            display: block !important;
          }

          .desktop-menu {
            display: none !important;
          }

          .section-title {
            font-size: 2rem;
          }

          .profile-img {
            width: 180px;
            height: 180px;
          }

          h1 {
            font-size: 2.5rem !important;
          }

          h2 {
            font-size: 1.5rem !important;
          }
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 1.75rem;
          }

          h1 {
            font-size: 2rem !important;
          }

          h2 {
            font-size: 1.25rem !important;
          }

          p {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 575px) {
          .section-title {
            font-size: 1.5rem;
          }

          .brand-logo {
            font-size: 1.2rem;
          }

          .nav-header {
            gap: 0.75rem;
          }

          .theme-toggle {
            width: 38px;
            height: 38px;
          }

          .hamburger {
            padding: 4px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-actions .btn {
            width: 100%;
            text-align: center;
          }

          .profile-img {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <button 
          onClick={toggleMobileMenu}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: colors.textPrimary,
            padding: '8px'
          }}
        >
          <X size={28} />
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['home', 'about', 'skills', 'projects', 'education', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-link-custom ${activeSection === section ? 'active' : ''}`}
              style={{ 
                background: 'none', 
                border: 'none',
                cursor: 'pointer',
                textTransform: 'capitalize',
                textAlign: 'left',
                fontSize: '1.1rem',
                width: '100%'
              }}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: isScrolled ? colors.navBg : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? `1px solid ${colors.cardBorder}` : 'none',
        transition: 'all 0.3s ease',
        padding: '1rem 0'
      }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center nav-header">
            <div 
              className="gradient-text brand-logo"
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: '800',
                fontFamily: '"JetBrains Mono", monospace'
              }}
            >
              &lt;SR /&gt;
            </div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu d-flex align-items-center gap-3">
              <div className="d-flex gap-1">
                {['home', 'about', 'skills', 'projects', 'education', 'contact'].map(section => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`nav-link-custom ${activeSection === section ? 'active' : ''}`}
                    style={{ 
                      background: 'none', 
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {section}
                  </button>
                ))}
              </div>
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="d-flex align-items-center gap-3">
              <button className="theme-toggle d-lg-none" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="hamburger" onClick={toggleMobileMenu}>
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: theme === 'dark' ? 0.1 : 0.05,
          background: `radial-gradient(circle at 20% 50%, ${colors.primary}4D 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${colors.secondary}4D 0%, transparent 50%)`
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className={animateHero ? 'fade-in-up stagger-1' : ''} style={{ opacity: 0 }}>
                <div style={{ 
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '1rem',
                  color: colors.primary,
                  marginBottom: '1rem'
                }}>
                  <Terminal size={20} style={{ display: 'inline', marginRight: '8px' }} />
                  Hello, I'm
                </div>
              </div>
              <h1 className={animateHero ? 'fade-in-up stagger-2' : ''} style={{ 
                fontSize: '4rem', 
                fontWeight: '900',
                marginBottom: '1rem',
                lineHeight: '1.1',
                opacity: 0
              }}>
                <span className="gradient-text">Sathish R</span>
              </h1>
              <h2 className={animateHero ? 'fade-in-up stagger-3' : ''} style={{ 
                fontSize: '2rem', 
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: colors.textPrimary,
                opacity: 0
              }}>
                Java Full Stack Developer
              </h2>
              <p className={animateHero ? 'fade-in-up stagger-4' : ''} style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: colors.textSecondary,
                marginBottom: '2rem',
                maxWidth: '600px',
                opacity: 0
              }}>
                Results-driven developer with proven expertise in building scalable web applications using 
                <strong> Spring Boot</strong>, <strong>React.js</strong>, and <strong>MySQL</strong>. 
                Experienced in designing REST APIs, optimizing database performance, and implementing 
                full-stack solutions from concept to deployment.
              </p>
              <div 
                className={`${animateHero ? 'fade-in-up stagger-4 ' : ''}hero-actions`} 
                style={{ 
                  display: 'flex', 
                  gap: '1rem',
                  opacity: 0,
                  flexWrap: 'wrap'
                }}
              >
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-primary-custom"
                >
                  Get In Touch
                </button>
                <a
                  href="/Sathish-R-Resume.pdf"
                  download="Sathish-R-Resume.pdf"
                  className="btn"
                  style={{
                    background: 'transparent',
                    border: `2px solid ${colors.secondary}80`,
                    color: colors.secondary,
                    padding: '12px 30px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${colors.secondary}1A`;
                    e.target.style.borderColor = colors.secondary;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = `${colors.secondary}80`;
                  }}
                >
                  Download Resume
                </a>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="btn"
                  style={{
                    background: 'transparent',
                    border: `2px solid ${colors.primary}80`,
                    color: colors.primary,
                    padding: '12px 30px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${colors.primary}1A`;
                    e.target.style.borderColor = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = `${colors.primary}80`;
                  }}
                >
                  View Projects
                </button>
              </div>
              <div className={animateHero ? 'fade-in-up stagger-4' : ''} style={{ 
                display: 'flex',
                gap: '1rem',
                marginTop: '2rem',
                opacity: 0
              }}>
                <a href="mailto:sathishsr974@gmail.com" style={{ 
                  color: colors.textSecondary,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = colors.primary}
                onMouseLeave={(e) => e.target.style.color = colors.textSecondary}
                >
                  <Mail size={24} />
                </a>
                <a href="https://linkedin.com/in/sathishsr974" target="_blank" rel="noopener noreferrer" style={{ 
                  color: colors.textSecondary,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = colors.primary}
                onMouseLeave={(e) => e.target.style.color = colors.textSecondary}
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="text-center">
                <img 
                    src={profileImg}
                  alt="Sathish R - Profile Picture" 
                  className="profile-img floating"
                />
                <div style={{ 
                  marginTop: '2rem',
                  background: `linear-gradient(135deg, ${colors.primary}1A, ${colors.secondary}1A)`,
                  borderRadius: '20px',
                  padding: '2rem',
                  border: `1px solid ${colors.cardBorder}`,
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: colors.textPrimary }}>Core Competencies</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                    {['RESTful APIs', 'Microservices', 'Database Optimization', 'TDD', 'CI/CD', 'Agile/Scrum'].map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer'
        }}
        onClick={() => scrollToSection('about')}
        className="pulse"
        >
          <ChevronDown size={32} style={{ color: colors.textTertiary }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '100px 0 100px 0', background: colors.sectionBg }}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="row mt-5">
            <div className="col-lg-8">
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: colors.textSecondary,
                marginBottom: '1.5rem'
              }}>
                I'm a results-driven Java Full Stack Developer with proven expertise in building scalable web 
                applications. My experience spans designing REST APIs, optimizing database performance, and 
                implementing full-stack solutions from concept to deployment.
              </p>
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: colors.textSecondary,
                marginBottom: '1.5rem'
              }}>
                With a strong foundation in object-oriented programming, microservices architecture, and agile 
                development practices, I'm passionate about writing clean, maintainable code and continuously 
                learning new technologies to enhance my skill set.
              </p>
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: colors.textSecondary
              }}>
                I'm seeking a junior developer role where I can contribute technical skills and drive innovation 
                in a collaborative team environment.
              </p>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="glow-card" style={{ 
                padding: '2rem',
                borderRadius: '15px'
              }}>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: colors.textPrimary }}>Quick Facts</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <div style={{ color: colors.primary, fontWeight: '600', marginBottom: '0.25rem' }}>Location</div>
                    <div style={{ color: colors.textSecondary }}>Chennai, India</div>
                  </div>
                  <div>
                    <div style={{ color: colors.primary, fontWeight: '600', marginBottom: '0.25rem' }}>Experience</div>
                    <div style={{ color: colors.textSecondary }}>Junior Developer with Portfolio</div>
                  </div>
                  <div>
                    <div style={{ color: colors.primary, fontWeight: '600', marginBottom: '0.25rem' }}>Focus</div>
                    <div style={{ color: colors.textSecondary }}>Full Stack Development</div>
                  </div>
                  <div>
                    <div style={{ color: colors.primary, fontWeight: '600', marginBottom: '0.25rem' }}>Methodologies</div>
                    <div style={{ color: colors.textSecondary }}>Agile/Scrum, TDD, CI/CD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: colors.textSecondary,
            marginBottom: '3rem'
          }}>
            Comprehensive expertise across modern full-stack technologies
          </p>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="glow-card" style={{ padding: '2rem', borderRadius: '15px', height: '100%' }}>
                <div className="icon-box">
                  <Code size={28} />
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Frontend Development</h4>
                {skills.frontend.map((skill, idx) => (
                  <div key={idx} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      <span style={{ color: '#3b82f6' }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="glow-card" style={{ padding: '2rem', borderRadius: '15px', height: '100%' }}>
                <div className="icon-box">
                  <Server size={28} />
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Backend Development</h4>
                {skills.backend.map((skill, idx) => (
                  <div key={idx} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      <span style={{ color: '#3b82f6' }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="glow-card" style={{ padding: '2rem', borderRadius: '15px', height: '100%' }}>
                <div className="icon-box">
                  <Database size={28} />
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Database & Data</h4>
                {skills.database.map((skill, idx) => (
                  <div key={idx} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      <span style={{ color: '#3b82f6' }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="glow-card" style={{ padding: '2rem', borderRadius: '15px', height: '100%' }}>
                <div className="icon-box">
                  <Zap size={28} />
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Tools & DevOps</h4>
                {skills.tools.map((skill, idx) => (
                  <div key={idx} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      <span style={{ color: '#3b82f6' }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '100px 0', background: colors.sectionBg }}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: colors.textSecondary,
            marginBottom: '3rem'
          }}>
            Real-world applications showcasing full-stack development expertise and measurable results
          </p>
          <div className="row g-4">
            {projects.map((project, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="glow-card" style={{ 
                  padding: '2rem',
                  borderRadius: '15px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ 
                    width: '60px',
                    height: '60px',
                    background: `${colors.primary}1A`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <project.icon size={28} style={{ color: colors.primary }} />
                  </div>
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700', color: colors.textPrimary }}>
                    {project.title}
                  </h4>
                  <p style={{ 
                    color: colors.textSecondary,
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    {project.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ 
                      fontSize: '0.9rem',
                      color: colors.primary,
                      marginBottom: '1rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Key Achievements
                    </h5>
                    <ul style={{ 
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} style={{ 
                          marginBottom: '0.75rem',
                          display: 'flex',
                          alignItems: 'start',
                          color: colors.textSecondary
                        }}>
                          <CheckCircle size={16} style={{ 
                            color: '#10b981',
                            marginRight: '0.75rem',
                            marginTop: '3px',
                            flexShrink: 0
                          }} />
                          <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.metrics && (
                    <div className="metrics-badge">
                      <strong>Impact:</strong> {project.metrics}
                    </div>
                  )}
                  <div style={{ 
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title">Education & Training</h2>
          <div className="row mt-5">
            <div className="col-12">
              {education.map((edu, idx) => (
                <div key={idx} className="glow-card" style={{ 
                  padding: '2rem',
                  borderRadius: '15px',
                  marginBottom: '1.5rem'
                }}>
                  <div className="row align-items-start">
                    <div className="col-lg-3">
                      <div style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        display: 'inline-block',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{ color: '#3b82f6', fontWeight: '600', fontSize: '0.9rem' }}>
                          {edu.type}
                        </span>
                      </div>
                      <div style={{ 
                        color: colors.textTertiary,
                        fontSize: '0.9rem',
                        fontFamily: '"JetBrains Mono", monospace'
                      }}>
                        {edu.period}
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <h4 style={{ 
                        fontSize: '1.4rem',
                        marginBottom: '0.5rem',
                        fontWeight: '700'
                      }}>
                        {edu.degree}
                      </h4>
                      <p style={{ 
                        color: colors.textSecondary,
                        marginBottom: edu.highlights ? '1rem' : '0'
                      }}>
                        {edu.institution}
                      </p>
                      {edu.highlights && (
                        <ul style={{ 
                          listStyle: 'none',
                          padding: 0,
                          margin: 0
                        }}>
                          {edu.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} style={{ 
                              marginBottom: '0.5rem',
                              display: 'flex',
                              alignItems: 'start',
                              color: colors.textSecondary
                            }}>
                              <span style={{ color: '#3b82f6', marginRight: '0.75rem' }}>▸</span>
                              <span style={{ fontSize: '0.95rem' }}>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '100px 0', background: colors.sectionBg }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Let's Connect</h2>
            <p style={{ 
              fontSize: '1.2rem',
              color: colors.textSecondary,
              marginBottom: '3rem',
              lineHeight: '1.8'
            }}>
              I'm actively seeking opportunities as a Junior Java Full Stack Developer. 
              Let's discuss how I can contribute to your team and drive innovation!
            </p>
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <div className="glow-card" style={{ padding: '2rem', borderRadius: '15px', height: '100%' }}>
                  <Mail size={32} style={{ color: colors.primary, marginBottom: '1rem' }} />
                  <h5 style={{ marginBottom: '0.5rem', color: colors.textPrimary }}>Email</h5>
                  <a href="mailto:sathishsr974@gmail.com" style={{ 
                    color: colors.textSecondary,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    wordBreak: 'break-all'
                  }}>
                    sathishsr974@gmail.com
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="glow-card" style={{ padding: '2rem', borderRadius: '15px', height: '100%' }}>
                  <Linkedin size={32} style={{ color: colors.primary, marginBottom: '1rem' }} />
                  <h5 style={{ marginBottom: '0.5rem', color: colors.textPrimary }}>LinkedIn</h5>
                  <a href="https://linkedin.com/in/sathishsr974" target="_blank" rel="noopener noreferrer" style={{ 
                    color: colors.textSecondary,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    wordBreak: 'break-all'
                  }}>
                    linkedin.com/in/sathishsr974
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="glow-card" style={{ padding: '2rem', borderRadius: '15px', height: '100%' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: colors.primary, marginBottom: '1rem' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <h5 style={{ marginBottom: '0.5rem', color: colors.textPrimary }}>Phone</h5>
                  <a href="tel:+919080549736" style={{ 
                    color: colors.textSecondary,
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}>
                    +91 90805 49736
                  </a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '3rem' }}>
              <a href="mailto:sathishsr974@gmail.com" className="btn btn-primary-custom" style={{ fontSize: '1.1rem', textDecoration: 'none' }}>
                Send Me a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '2rem 0',
        borderTop: `1px solid ${colors.cardBorder}`,
        background: theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.5)'
      }}>
        <div className="container">
          <div className="text-center">
            <p style={{ 
              margin: 0,
              color: colors.textTertiary,
              fontSize: '0.9rem'
            }}>
              © 2025 Sathish R. Built with React.js & Bootstrap
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
