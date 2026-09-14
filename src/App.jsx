import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp,
  Target,
  Megaphone,
  Handshake,
  Link2,
  Package,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Globe,
  Send
} from 'lucide-react';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: '01',
    quote:
      '“JHP helped us understand the Indian market in a way no other partner could. Their insight, network and dedication made all the difference.”',
    author: 'Elena Martin',
    role: 'Chief Operating Officer, Consus Energy',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '02',
    quote:
      '“Expanding to India was seamless with JHP. Their decades of local experience and cross-border strategic agility provided total confidence.”',
    author: 'Min-Jun Park',
    role: 'VP of Business Expansion, K-Tech Global',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '03',
    quote:
      '“A truly essential bridge between Korean business standards and the vast scale of Indian market opportunities.”',
    author: 'Rajesh Sharma',
    role: 'Director of Global Partnerships, Indus Ventures',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  },
];

function App() {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // 1. Hardware Accelerated Custom Cursor
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0px) translate(-50%, -50%)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 2. Hero Load Animation Sequence
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .fromTo('.navbar', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      .fromTo('.hero-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.4')
      .fromTo('.hero-desc', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      .fromTo('.hero-actions', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-image-clip', { scale: 1.15, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }, '-=1');

    // 3. Section Divider Line Animations
    const dividerLines = document.querySelectorAll('.divider-line');
    dividerLines.forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: line,
            start: 'top 88%',
          },
        }
      );
    });

    // 4. Reveal Text Mask Animations
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach((text) => {
      gsap.fromTo(
        text,
        { y: '115%' },
        {
          y: '0%',
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 90%',
          },
        }
      );
    });

    // 5. Section Tags Line Expansion
    const sectionTags = document.querySelectorAll('.section-tag');
    sectionTags.forEach((tag) => {
      ScrollTrigger.create({
        trigger: tag,
        start: 'top 88%',
        onEnter: () => tag.classList.add('active-tag'),
      });
    });

    // 6. Section Card Transitions
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
          },
        }
      );
    });

    // 7. Services Grid Stagger Animation
    gsap.fromTo(
      '.service-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 82%',
        },
      }
    );

    // 8. Impact Stats Stagger & Scale
    gsap.fromTo(
      '.stat-item',
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '.impact-stats-grid',
          start: 'top 85%',
        },
      }
    );

    // 9. Markets Section List Rows
    gsap.fromTo(
      '.market-row',
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.markets-list',
          start: 'top 85%',
        },
      }
    );

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      ></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="brand-logo" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <span className="logo-badge">jhp</span>
            <span className="logo-text">ENTERPRISE</span>
          </a>

          <div className="nav-links">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Home
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Contact Us
            </a>
          </div>

          <div className="lang-selector">
            <span className="active-lang">EN</span>
            <span className="divider">|</span>
            <span className="alt-lang">한국어</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              MAKE INDIA
              <br />
              YOUR NEXT
              <br />
              <span className="italic-serif">MOVE</span> —
            </h1>
            <p className="hero-desc">
              JHP Enterprise was built upon the foundation of our former affiliate—
              Korea Indo Traders Pvt. Ltd. established in 1968. Driven by our passion
              for consulting and marketing and our deep understanding of both
              Korean and Indian markets, we envisioned a company that would serve
              as a catalyst for businesses seeking to expand their reach and make
              a significant impact in the Indian market.
            </p>
            <div className="hero-actions">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="cta-link"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Discover our story <ArrowRight className="icon-arrow" size={18} />
              </a>
            </div>
          </div>

          <div className="hero-media-wrapper">
            <div className="hero-image-clip">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Architecture City Skyline"
                className="hero-img"
              />
            </div>
            <div className="scroll-indicator">
              <span className="scroll-line"></span>
              <span className="scroll-text">SCROLL DOWN</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT JHP SECTION */}
      <section id="about" className="about-section animate-section">
        <div className="section-container grid-2">
          <div className="about-left">
            <span className="section-tag">ABOUT JHP</span>
            <div className="reveal-mask">
              <h2 className="section-heading serif-heading reveal-text">
                Rooted in Korea.
                <br />
                Focused on India.
              </h2>
            </div>
            <p className="section-body">
              JHP Enterprise traces its roots to Korea Indo Traders Pvt. Ltd.,
              established in 1968. With decades of experience and a deep
              understanding of both Korean and Indian markets, we bring
              insight, connections and expertise to help businesses grow across
              borders.
            </p>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="cta-link dark-link"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Learn more <ArrowRight className="icon-arrow" size={18} />
            </a>
          </div>

          <div className="about-right">
            <div className="image-card-container">
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80"
                alt="Korea India Business Flags & Partnership"
                className="about-img"
              />
              <div className="circular-badge">
                <svg viewBox="0 0 100 100" width="120" height="120">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text fontSize="9.5" fontWeight="500" letterSpacing="1.2" fill="#0B1A2C">
                    <textPath href="#circlePath">
                      BRIDGING MARKETS • BUILDING OPPORTUNITIES •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER LINE */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* WHAT WE DO / SERVICES */}
      <section id="services" className="services-section animate-section">
        <div className="section-container">
          <div className="services-header grid-2">
            <div>
              <span className="section-tag">WHAT WE DO</span>
              <div className="reveal-mask">
                <h2 className="section-heading serif-heading reveal-text">
                  Comprehensive
                  <br />
                  solutions for your
                  <br />
                  growth journey.
                </h2>
              </div>
            </div>
            <div className="services-header-right">
              <p className="section-body">
                From market entry to long-term partnerships, we provide
                end-to-end support to help your business succeed in India.
              </p>
              <a
                href="#impact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('impact');
                }}
                className="cta-link dark-link"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Explore all services <ArrowRight className="icon-arrow" size={18} />
              </a>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-box">
                <TrendingUp size={40} />
              </div>
              <div>
                <h3 className="service-title">Market Entry & Expansion</h3>
                <p className="service-desc">
                  Navigate the Indian market with confidence and clarity.
                </p>
              </div>
              <ArrowRight className="service-card-arrow" size={20} />
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <Target size={40} />
              </div>
              <div>
                <h3 className="service-title">Strategy & Consulting</h3>
                <p className="service-desc">
                  Turn insights into actionable business strategies.
                </p>
              </div>
              <ArrowRight className="service-card-arrow" size={20} />
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <Megaphone size={40} />
              </div>
              <div>
                <h3 className="service-title">Marketing & Brand</h3>
                <p className="service-desc">
                  Build a brand that resonates across cultures.
                </p>
              </div>
              <ArrowRight className="service-card-arrow" size={20} />
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <Handshake size={40} />
              </div>
              <div>
                <h3 className="service-title">Business Development</h3>
                <p className="service-desc">
                  Create opportunities. Build lasting relationships.
                </p>
              </div>
              <ArrowRight className="service-card-arrow" size={20} />
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <Link2 size={40} />
              </div>
              <div>
                <h3 className="service-title">Korea-India Partnership</h3>
                <p className="service-desc">
                  Connect businesses. Create mutual value.
                </p>
              </div>
              <ArrowRight className="service-card-arrow" size={20} />
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <Package size={40} />
              </div>
              <div>
                <h3 className="service-title">Trade & Distribution</h3>
                <p className="service-desc">
                  Move your products further, faster, smarter.
                </p>
              </div>
              <ArrowRight className="service-card-arrow" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* OUR IMPACT / STATS BANNER */}
      <section id="impact" className="impact-section animate-section">
        <div className="section-container">
          <span className="section-tag light-tag">OUR IMPACT</span>
          <div className="reveal-mask">
            <h2 className="impact-title serif-heading reveal-text">
              A bridge between Korea and India.
            </h2>
          </div>

          <div className="impact-stats-grid">
            <div className="stat-item">
              <div className="stat-number">1968</div>
              <p className="stat-label">Our foundation and legacy</p>
            </div>

            <div className="stat-item">
              <div className="stat-number">Korea + India</div>
              <p className="stat-label">Two markets. One network.</p>
            </div>

            <div className="stat-item">
              <div className="stat-number">Long-term partnerships</div>
              <p className="stat-label">Trusted by businesses across industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER LINE */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* OUR MARKETS SECTION */}
      <section id="markets" className="markets-section animate-section">
        <div className="section-container grid-2">
          <div className="markets-left">
            <div className="dual-image-frame">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80"
                alt="India & Korea Markets"
                className="markets-img"
              />
            </div>
          </div>

          <div className="markets-right">
            <span className="section-tag">OUR MARKETS</span>
            <div className="reveal-mask">
              <h2 className="section-heading serif-heading reveal-text">
                Two markets.
                <br />
                One opportunity.
              </h2>
            </div>
            <p className="section-body">
              We bridge Korea and India — connecting businesses, ideas and people
              for sustainable growth and shared success.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="cta-link dark-link mb-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Explore markets <ArrowRight className="icon-arrow" size={18} />
            </a>

            <div className="markets-list">
              <div className="market-row">
                <h4 className="market-name">Korea</h4>
                <p className="market-details">Innovation. Technology. Global reach.</p>
              </div>

              <div className="market-row">
                <h4 className="market-name">India</h4>
                <p className="market-details">Talent. Scale. New possibilities.</p>
              </div>

              <div className="market-row">
                <h4 className="market-name">Beyond Borders</h4>
                <p className="market-details">Stronger together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER LINE */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* TESTIMONIAL CAROUSEL SECTION */}
      <section className="testimonial-section animate-section">
        <div className="testimonial-container grid-2">
          <div className="testimonial-content">
            <div className="quote-mark">“</div>
            <p className="testimonial-quote serif-heading">
              {testimonials[activeTestimonial].quote}
            </p>
            <div className="testimonial-author-block">
              <p className="author-name">— {testimonials[activeTestimonial].author}</p>
              <p className="author-role">{testimonials[activeTestimonial].role}</p>
            </div>
          </div>

          <div className="testimonial-side">
            <div className="portrait-wrapper">
              <img
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].author}
                className="portrait-img"
              />
            </div>

            <div className="carousel-controls">
              <button
                onClick={handlePrevTestimonial}
                className="carousel-btn"
                aria-label="Previous Testimonial"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="carousel-btn"
                aria-label="Next Testimonial"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ChevronRight size={20} />
              </button>
              <span className="carousel-counter">
                {testimonials[activeTestimonial].id} / 0{testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER LINE */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* CONTACT US SECTION */}
      <section id="contact" className="contact-section animate-section">
        <div className="section-container grid-2">
          <div className="contact-info">
            <span className="section-tag">GET IN TOUCH</span>
            <div className="reveal-mask">
              <h2 className="section-heading serif-heading reveal-text">
                Let's Discuss
                <br />
                Your Next Move.
              </h2>
            </div>
            <p className="section-body">
              Ready to explore business expansion or partnership opportunities between Korea and India? Contact our consulting team today.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <Mail className="contact-icon" size={20} />
                <div>
                  <span className="contact-label">Email Us</span>
                  <p className="contact-val">hello@jhpartners.co.in</p>
                </div>
              </div>

              <div className="contact-method-item">
                <Phone className="contact-icon" size={20} />
                <div>
                  <span className="contact-label">Call Us</span>
                  <p className="contact-val">+91 123 456 7890</p>
                </div>
              </div>

              <div className="contact-method-item">
                <Globe className="contact-icon" size={20} />
                <div>
                  <span className="contact-label">Global Presence</span>
                  <p className="contact-val">Seoul, South Korea & New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="form-success">
                <h3 className="serif-heading">Thank you!</h3>
                <p>Your message has been sent. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required placeholder="e.g. John Doe" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required placeholder="john@company.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" placeholder="e.g. Enterprise Corp" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Tell us about your project or growth goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top grid-4">
            <div className="footer-brand">
              <a href="#" className="brand-logo footer-logo">
                <span className="logo-badge">jhp</span>
                <span className="logo-text">ENTERPRISE</span>
              </a>
              <p className="footer-tagline">
                Bridging markets. Building opportunities.
              </p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About JHP</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Markets</h4>
              <ul>
                <li><a href="#markets">Korea Market</a></li>
                <li><a href="#markets">India Expansion</a></li>
                <li><a href="#impact">Our Impact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Contact</h4>
              <p className="footer-info">hello@jhpartners.co.in</p>
              <p className="footer-info">+91 123 456 7890</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 JHP Enterprise. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
