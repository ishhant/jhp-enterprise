import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, ArrowDown, ChevronsDown, Mouse, Sparkles, Compass } from 'lucide-react';
import './TempTransitionsDemo.css';

export default function TempTransitionsDemo() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [arrowStyle, setArrowStyle] = useState('pulsing'); // 8 options
  const [transitionEffect, setTransitionEffect] = useState('slide'); // 8 options
  const isScrollingRef = useRef(false);

  const sectionsData = [
    {
      id: 'sec-hero',
      tag: 'SECTION 01 • HERO',
      title: 'Make India Your Next Move',
      desc: 'Deep Navy background (#0A1728). Scroll 1 tick or click the down arrow button below to test transitions.',
      bg: '#0A1728',
      text: '#FFFFFF',
      type: 'dark'
    },
    {
      id: 'sec-about',
      tag: 'SECTION 02 • ABOUT & IMPACT',
      title: 'Bridging Markets & Building Legacy',
      desc: 'Warm White background (#FBF9F5). Change the Snap Effect or Arrow Style from the top control bar!',
      bg: '#FBF9F5',
      text: '#1A1A1A',
      type: 'light'
    },
    {
      id: 'sec-services',
      tag: 'SECTION 03 • SERVICES & MARKETS',
      title: 'Strategic Consulting & Brand Growth',
      desc: 'Warm Gold background (#EFE8DB). Test the 8 different arrow designs below.',
      bg: '#EFE8DB',
      text: '#1A1A1A',
      type: 'gold'
    },
    {
      id: 'sec-portfolio',
      tag: 'SECTION 04 • PORTFOLIO & CONTACT',
      title: 'Proven Works & Global Reach',
      desc: 'Warm White background (#FBF9F5). Final section of the interactive scroll snap playground.',
      bg: '#FBF9F5',
      text: '#1A1A1A',
      type: 'light'
    }
  ];

  const totalSections = sectionsData.length;

  const goToSection = (index) => {
    if (index < 0 || index >= totalSections || isScrollingRef.current) return;
    isScrollingRef.current = true;
    setCurrentSectionIndex(index);
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 950);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrollingRef.current) return;

      if (e.deltaY > 15) {
        goToSection(currentSectionIndex + 1);
      } else if (e.deltaY < -15) {
        goToSection(currentSectionIndex - 1);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToSection(currentSectionIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSection(currentSectionIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSectionIndex]);

  return (
    <div className="snap-demo-page">
      {/* Top Control Bar */}
      <div className="snap-navbar">
        <div className="snap-nav-left">
          <span className="snap-badge">1-SCROLL SNAP LAB</span>
          <h2>JHP Section Jump & Down-Arrow Playground</h2>
        </div>

        <div className="snap-options-group">
          {/* Arrow Style Selector */}
          <div className="option-picker">
            <span className="picker-label">Arrow Style (8):</span>
            <select
              className="picker-select"
              value={arrowStyle}
              onChange={(e) => setArrowStyle(e.target.value)}
            >
              <option value="pulsing">1. Gold Pulse Circle</option>
              <option value="minimal">2. Minimal Line Pill</option>
              <option value="glass">3. Glassmorphic Ring</option>
              <option value="magnetic">4. Magnetic Expanding Border</option>
              <option value="trail">5. Vertical Light Trail</option>
              <option value="hexagon">6. Glowing Gold Hexagon</option>
              <option value="mouse">7. Luxury Mouse Wheel Icon</option>
              <option value="ripple">8. Radiating Wave Ripple</option>
            </select>
          </div>

          {/* Transition Effect Selector */}
          <div className="option-picker">
            <span className="picker-label">Snap Effect (8):</span>
            <select
              className="picker-select"
              value={transitionEffect}
              onChange={(e) => setTransitionEffect(e.target.value)}
            >
              <option value="slide">1. Vertical Slide</option>
              <option value="fade">2. Morph Fade</option>
              <option value="zoom">3. Scale Zoom</option>
              <option value="curtain">4. Curtain Overlay Wipe</option>
              <option value="flip">5. 3D Perspective Flip</option>
              <option value="parallax">6. Dual Split Parallax</option>
              <option value="elastic">7. Elastic Spring Bounce</option>
              <option value="horizontal">8. Side Slide Curtain</option>
            </select>
          </div>

          <a href="/" className="snap-back-btn">← Back to Main Site</a>
        </div>
      </div>

      {/* Side Dots Track */}
      <div className="side-dots-track">
        {sectionsData.map((sec, idx) => (
          <button
            key={sec.id}
            className={`side-dot ${currentSectionIndex === idx ? 'active-dot' : ''}`}
            onClick={() => goToSection(idx)}
            title={`Go to ${sec.tag}`}
          >
            <span className="dot-tooltip">{sec.tag}</span>
          </button>
        ))}
      </div>

      {/* Main Snap Stage Container */}
      <div className={`snap-stage effect-${transitionEffect}`}>
        {sectionsData.map((sec, idx) => {
          const isActive = currentSectionIndex === idx;
          const isPast = currentSectionIndex > idx;
          const isFuture = currentSectionIndex < idx;

          return (
            <section
              key={sec.id}
              className={`snap-section ${isActive ? 'is-active' : isPast ? 'is-past' : 'is-future'}`}
              style={{ backgroundColor: sec.bg, color: sec.text }}
            >
              <div className="section-inner-content">
                <span className={`snap-section-tag tag-${sec.type}`}>{sec.tag}</span>
                <h1 className="snap-section-title">{sec.title}</h1>
                <p className="snap-section-desc">{sec.desc}</p>
                <div className="snap-hint-box">
                  <span>Scroll mouse wheel 1 notch OR click the arrow below</span>
                </div>
              </div>

              {/* Down Arrow Buttons Showcase */}
              {idx < totalSections - 1 && (
                <div className="scroll-down-container">
                  {/* Style 1: Pulsing Gold Circle */}
                  {arrowStyle === 'pulsing' && (
                    <button
                      className="down-arrow-btn arrow-pulsing"
                      onClick={() => goToSection(idx + 1)}
                    >
                      <ChevronDown className="bouncing-icon" size={24} />
                    </button>
                  )}

                  {/* Style 2: Minimal Line Pill */}
                  {arrowStyle === 'minimal' && (
                    <button
                      className="down-arrow-btn arrow-minimal"
                      onClick={() => goToSection(idx + 1)}
                    >
                      <span className="minimal-text">EXPLORE NEXT</span>
                      <ArrowDown className="sliding-icon" size={16} />
                    </button>
                  )}

                  {/* Style 3: Glassmorphic Ring */}
                  {arrowStyle === 'glass' && (
                    <button
                      className="down-arrow-btn arrow-glass"
                      onClick={() => goToSection(idx + 1)}
                    >
                      <div className="glass-ring">
                        <ChevronDown size={22} />
                      </div>
                    </button>
                  )}

                  {/* Style 4: Magnetic Expanding Border */}
                  {arrowStyle === 'magnetic' && (
                    <button
                      className="down-arrow-btn arrow-magnetic"
                      onClick={() => goToSection(idx + 1)}
                    >
                      <span className="magnetic-border"></span>
                      <ChevronsDown size={20} className="magnetic-icon" />
                    </button>
                  )}

                  {/* Style 5: Vertical Light Trail */}
                  {arrowStyle === 'trail' && (
                    <button
                      className="down-arrow-btn arrow-trail"
                      onClick={() => goToSection(idx + 1)}
                    >
                      <span className="trail-line">
                        <span className="trail-dot"></span>
                      </span>
                      <span className="trail-text">SCROLL</span>
                    </button>
                  )}

                  {/* Style 6: Glowing Gold Hexagon */}
                  {arrowStyle === 'hexagon' && (
                    <button
                      className="down-arrow-btn arrow-hexagon"
                      onClick={() => goToSection(idx + 1)}
                    >
                      <div className="hex-shape">
                        <ChevronDown size={20} />
                      </div>
                    </button>
                  )}

                  {/* Style 7: Luxury Mouse Wheel Icon */}
                  {arrowStyle === 'mouse' && (
                    <button
                      className="down-arrow-btn arrow-mouse"
                      onClick={() => goToSection(idx + 1)}
                    >
                      <div className="mouse-housing">
                        <span className="mouse-wheel"></span>
                      </div>
                      <ChevronDown size={14} className="mouse-arrow" />
                    </button>
                  )}

                  {/* Style 8: Radiating Wave Ripple */}
                  {arrowStyle === 'ripple' && (
                    <button
                      className="down-arrow-btn arrow-ripple"
                      onClick={() => goToSection(idx + 1)}
                    >
                      <span className="ripple-wave wave1"></span>
                      <span className="ripple-wave wave2"></span>
                      <ChevronDown size={22} className="ripple-icon" />
                    </button>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
