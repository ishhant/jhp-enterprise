import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Studio } from 'sanity';
import sanityConfig from '../sanity.config.js';
import { client, urlFor } from './sanityClient.js';
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
  ChevronDown,
  Mail,
  Phone,
  Globe,
  Send
} from 'lucide-react';
import './index.css';
import logoImg from './assets/logo.png';
import TempTransitionsDemo from './TempTransitionsDemo';

gsap.registerPlugin(ScrollTrigger);

const translations = {
  en: {
    nav: { home: 'Home', contact: 'Contact Us' },
    hero: {
      title: (
        <>
          <span className="hero-line-white">make india</span>
          <br />
          <span className="hero-line-gold">
            your next move
          </span>
        </>
      ),
      desc: `JHP Enterprise was built upon the foundation of our former affiliate—Korea Indo Traders Pvt. Ltd. established in 1968. Driven by our passion for consulting and marketing and our deep understanding of both Korean and Indian markets, we envisioned a company that would serve as a catalyst for businesses seeking to expand their reach and make a significant impact in the Indian market.`,
      cta: 'Discover our story',
    },
    about: {
      tag: 'ABOUT JHP',
      heading: (
        <>
          Rooted in Korea.
          <br />
          Focused on India.
        </>
      ),
      body: `JHP Enterprise traces its roots to Korea Indo Traders Pvt. Ltd., established in 1968. With decades of experience and a deep understanding of both Korean and Indian markets, we bring insight, connections and expertise to help businesses grow across borders.`,
      cta: 'Learn more',
      badge: 'BRIDGING MARKETS • BUILDING OPPORTUNITIES •',
    },
    services: {
      tag: 'WHAT WE DO',
      heading: (
        <>
          Comprehensive
          <br />
          solutions for your
          <br />
          growth journey.
        </>
      ),
      body: 'From market entry to long-term partnerships, we provide end-to-end support to help your business succeed in India.',
      cta: 'Explore all services',
      items: [
        { title: 'Market Entry & Expansion', desc: 'Navigate the Indian market with confidence and clarity.' },
        { title: 'Strategy & Consulting', desc: 'Turn insights into actionable business strategies.' },
        { title: 'Marketing & Brand', desc: 'Build a brand that resonates across cultures.' },
        { title: 'Business Development', desc: 'Create opportunities. Build lasting relationships.' },
        { title: 'Korea-India Partnership', desc: 'Connect businesses. Create mutual value.' },
        { title: 'Trade & Distribution', desc: 'Move your products further, faster, smarter.' },
      ],
    },
    impact: {
      tag: 'OUR IMPACT',
      heading: 'Proven results across global markets.',
      stats: [
        { number: '10+', label: 'Years shaping brands' },
        { number: '80+', label: 'Campaigns and projects' },
        { number: '600+', label: 'Content pieces produced' },
        { number: '3', label: 'Industry recognitions' },
      ],
    },
    markets: {
      tag: 'OUR MARKETS',
      heading: (
        <>
          Two markets.
          <br />
          One opportunity.
        </>
      ),
      body: 'We bridge Korea and India — connecting businesses, ideas and people for sustainable growth and shared success.',
      cta: 'Explore markets',
      items: [
        { name: 'Korea', details: 'Innovation. Technology. Global reach.' },
        { name: 'India', details: 'Talent. Scale. New possibilities.' },
        { name: 'Beyond Borders', details: 'Stronger together.' },
      ],
    },
    projects: {
      tag: 'OUR PORTFOLIO',
      heading: 'Some of Our Works',
      years: [
        {
          year: '2026',
          columns: [
            [
              { name: 'KOCCA India 2026 Business Briefing Event', featured: true },
              { name: 'Incorporation of PT SU Indonesia in India', featured: false },
              { name: 'Online & Offline Marketing for KOCCA India', featured: true },
              { name: 'KOCCA India K-Content Bizcon 2026 Event', featured: true },
            ],
            [
              { name: 'Healstem India CA Services', featured: false },
              { name: 'Online Marketing for Jeju Samdasoo', featured: false },
              { name: 'Digital Marketing for KOSME India', featured: false },
              { name: 'Support for Hyundai India Advertisement', featured: false },
              { name: 'Knowledge Building on Korean Aqua & Seafood Practices', featured: false },
            ]
          ]
        },
        {
          year: '2025',
          columns: [
            [
              { name: 'Hwasung Mobility India Consulting', featured: false },
              { name: 'Incorporation of Messe Esang India', featured: false },
              { name: 'Coordination for Hyundai Motor Branch Director\'s Visit to India', featured: true },
              { name: 'Samsung Care Plus Market Research', featured: false },
              { name: 'VIP Delhi Tour Protocol and Hospitality Services for Hyosung India', featured: true },
              { name: 'Brand Management for BANDO E-Commerce Platform', featured: false },
              { name: 'B2B & B2C Marketing for KOSME', featured: true },
            ],
            [
              { name: 'Gyeonggi Youth Training Program 2024', featured: true },
              { name: 'KOSME Katch Your Brand 2024', featured: true },
              { name: 'Legal Advisory for KOIPA', featured: false },
              { name: 'K-Content Expo in India', featured: true },
              { name: 'Legal Advisory for Kinexin', featured: false },
              { name: 'KOINDEX 2024', featured: true },
              { name: 'KOSME B2B Networking Seminar', featured: true },
              { name: 'Seoul My Soul, India', featured: true },
              { name: 'Identification of Counterfeit Goods for Products in India', featured: true },
              { name: 'Grand Opening of Dreamtech India', featured: true },
            ]
          ]
        },
        {
          year: '2024',
          columns: [
            [
              { name: 'IKS Semicon Consulting', featured: false },
              { name: 'Incorporation of Healstem India', featured: false },
              { name: 'Incorporation of MARS Korea (HMIM)', featured: false },
            ]
          ]
        },
        {
          year: '2023',
          columns: [
            [
              { name: 'Mumbai K-Town Festival India', featured: true },
              { name: 'Christmas Soiree, Leo\'s 621', featured: true },
              { name: 'Market Exposure for Lenovo in Korea', featured: false },
              { name: 'Market Exposure for iYura in Korea', featured: false },
              { name: 'New Delhi G-20 Leaders\' Summit', featured: true },
              { name: 'CJ Darcl & Tata MOU Signing', featured: true },
              { name: 'Conclave on Promotion of Sustainable Enterprises for Local Development', featured: true },
              { name: 'Market Exposure for J2LFA', featured: false },
              { name: 'Gyeonggi Youth Training Program 2023', featured: true },
            ]
          ]
        }
      ]
    },
    testimonials: [
      {
        id: '01',
        quote: '“JHP helped us understand the Indian market in a way no other partner could. Their insight, network and dedication made all the difference.”',
        author: 'Elena Martin',
        role: 'Chief Operating Officer, Consus Energy',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: '02',
        quote: '“Expanding to India was seamless with JHP. Their decades of local experience and cross-border strategic agility provided total confidence.”',
        author: 'Min-Jun Park',
        role: 'VP of Business Expansion, K-Tech Global',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: '03',
        quote: '“A truly essential bridge between Korean business standards and the vast scale of Indian market opportunities.”',
        author: 'Rajesh Sharma',
        role: 'Director of Global Partnerships, Indus Ventures',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      },
    ],
    contact: {
      tag: 'GET IN TOUCH',
      heading: (
        <>
          Let's Discuss
          <br />
          Your Next Move.
        </>
      ),
      body: "Ready to explore business expansion or partnership opportunities between Korea and India? Contact our consulting team today.",
      emailLabel: 'Email Us',
      phoneLabel: 'Call Us',
      globalLabel: 'Global Presence',
      globalVal: 'Seoul, South Korea & New Delhi, India',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. John Doe',
      emailLabelField: 'Email Address',
      emailPlaceholder: 'john@company.com',
      companyLabel: 'Company Name',
      companyPlaceholder: 'e.g. Enterprise Corp',
      msgLabel: 'Message',
      msgPlaceholder: 'Tell us about your project or growth goals...',
      sendBtn: 'Send Message',
      thankTitle: 'Thank you!',
      thankMsg: 'Your message has been sent. Our team will get back to you shortly.',
    },
    footer: {
      tagline: 'Bridging markets. Building opportunities.',
      navTitle: 'Navigation',
      marketsTitle: 'Markets',
      contactTitle: 'Contact',
      rights: '© 2026 JHP Enterprise. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
  },
  ko: {
    nav: { home: '홈', contact: '문의하기' },
    hero: {
      title: (
        <>
          <span className="hero-line-white">인도 시장</span>
          <br />
          <span className="hero-line-gold">
            당신의 다음 도약
          </span>
        </>
      ),
      desc: `JHP Enterprise는 1968년에 설립된 Korea Indo Traders Pvt. Ltd.의 유산을 바탕으로 설립되었습니다. 한국과 인도 시장에 대한 깊은 이해와 컨설팅 및 마케팅 열정을 바탕으로 인도 시장 확장을 희망하는 기업의 핵심 촉매제가 되고자 합니다.`,
      cta: '스토리 알아보기',
    },
    about: {
      tag: 'ABOUT JHP',
      heading: (
        <>
          한국에 뿌리를 두고.
          <br />
          인도를 향합니다.
        </>
      ),
      body: `JHP Enterprise는 1968년 설립된 Korea Indo Traders Pvt. Ltd.에 뿌리를 두고 있습니다. 수십 년간의 경험과 한국 및 인도 시장에 대한 깊은 이해를 바탕으로 국경을 넘어 기업의 성장을 돕습니다.`,
      cta: '자세히 보기',
      badge: '시장을 연결하다 • 기회를 창출하다 •',
    },
    services: {
      tag: 'WHAT WE DO',
      heading: (
        <>
          비즈니스 성장을 위한
          <br />
          포괄적인 솔루션.
        </>
      ),
      body: '시장 진출부터 장기적인 파트너십까지, 인도 시장 성공을 위한 엔드투엔드 지원을 제공합니다.',
      cta: '모든 서비스 보기',
      items: [
        { title: '시장 진출 및 확장', desc: '인도 시장을 명확하고 자신 있게 개척하세요.' },
        { title: '전략 및 컨설팅', desc: '통찰력을 실행 가능한 비즈니스 전략으로 전환합니다.' },
        { title: '마케팅 및 브랜딩', desc: '다양한 문화를 아우르는 브랜드를 구축합니다.' },
        { title: '비즈니스 개발', desc: '새로운 기회를 창출하고 지속 가능한 관계를 구축합니다.' },
        { title: '한-인도 파트너십', desc: '기업을 연결하고 상호 가치를 창출합니다.' },
        { title: '무역 및 유통', desc: '제품을 더 멀리, 더 빠르게, 더 스마트하게 유통하세요.' },
      ],
    },
    impact: {
      tag: 'OUR IMPACT',
      heading: '검증된 글로벌 비즈니스 성과.',
      stats: [
        { number: '10+', label: '브랜드 성장을 함께한 시간(년)' },
        { number: '80+', label: '성공적인 캠페인 및 프로젝트' },
        { number: '600+', label: '제작된 콘텐츠 및 미디어' },
        { number: '3', label: '업계 수상 및 공식 인정' },
      ],
    },
    markets: {
      tag: 'OUR MARKETS',
      heading: (
        <>
          두 개의 시장.
          <br />
          하나의 기회.
        </>
      ),
      body: '우리는 한국과 인도를 연결하며 지속 가능한 성장과 공동의 성공을 위해 비즈니스와 사람을 이어줍니다.',
      cta: '시장 탐색하기',
      items: [
        { name: '대한민국 (Korea)', details: '혁신. 첨단 기술. 글로벌 네트워크.' },
        { name: '인도 (India)', details: '풍부한 인재. 거대한 규모. 새로운 가능성.' },
        { name: '국경을 넘어 (Beyond Borders)', details: '함께할 때 더 강력해집니다.' },
      ],
    },
    projects: {
      tag: 'OUR PORTFOLIO',
      heading: '주요 사업 실적',
      years: [
        {
          year: '2026',
          columns: [
            [
              { name: 'KOCCA India 2026 비즈니스 브리핑 행사', featured: true },
              { name: 'PT SU Indonesia 인도 법인 설립', featured: false },
              { name: 'KOCCA India 온·오프라인 마케팅', featured: true },
              { name: 'KOCCA India K-Content Bizcon 2026 행사', featured: true },
            ],
            [
              { name: 'Healstem India CA 서비스', featured: false },
              { name: '제주 삼다수 온라인 마케팅', featured: false },
              { name: 'KOSME India 디지털 마케팅', featured: false },
              { name: '현대자동차 인도 광고 지원', featured: false },
              { name: 'Knowledge Building on Korean Aqua & Seafood Practices', featured: false },
            ]
          ]
        },
        {
          year: '2025',
          columns: [
            [
              { name: '화성 모빌리티 인도 컨설팅', featured: false },
              { name: 'Messe Esang 인도 법인 설립', featured: false },
              { name: '현대자동차 본부장 인도 방문 지원', featured: true },
              { name: '삼성 케어 플러스 시장 조사', featured: false },
              { name: 'VIP 델리 투어 의전 및 호스피탈리티 서비스', featured: true },
              { name: 'BANDO 이커머스 플랫폼 브랜드 관리', featured: false },
              { name: 'KOSME B2B & B2C 마케팅', featured: true },
            ],
            [
              { name: '경기 청년 사다리 프로그램 2024', featured: true },
              { name: 'KOSME Katch Your Brand 2024', featured: true },
              { name: 'Legal Advisory for KOIPA', featured: false },
              { name: 'K-Content Expo in India', featured: true },
              { name: 'Legal Advisory for Kinexin', featured: false },
              { name: 'KOINDEX 2024', featured: true },
              { name: 'KOSME B2B 네트워킹 세미나', featured: true },
              { name: 'Seoul My Soul, India', featured: true },
              { name: '인도 수출 제품 모조품 단속 및 식별', featured: true },
              { name: 'Grand Opening of Dreamtech India', featured: true },
            ]
          ]
        },
        {
          year: '2024',
          columns: [
            [
              { name: 'IKS Semicon 컨설팅', featured: false },
              { name: 'Healstem India 법인 설립', featured: false },
              { name: 'MARS Korea (HMIM) 법인 설립', featured: false },
            ]
          ]
        },
        {
          year: '2023',
          columns: [
            [
              { name: 'Mumbai K-Town Festival India', featured: true },
              { name: 'Christmas Soiree, Leo\'s 621', featured: true },
              { name: 'Lenovo 한국 시장 노출 마케팅', featured: false },
              { name: 'Market Exposure for iYura in Korea', featured: false },
              { name: '뉴델리 G-20 정상회의 지원', featured: true },
              { name: 'CJ Darcl & Tata MOU 체결', featured: true },
              { name: '지속 가능한 기업 육성 콘클라베', featured: true },
              { name: 'Market Exposure for J2LFA', featured: false },
              { name: 'Gyeonggi Youth Training Program 2023', featured: true },
            ]
          ]
        }
      ]
    },
    testimonials: [
      {
        id: '01',
        quote: '“JHP는 그 어떤 파트너보다 인도 시장을 깊이 있게 이해하도록 도와주었습니다. 그들의 통찰력과 네트워크가 성장 결과를 만들었습니다.”',
        author: 'Elena Martin',
        role: 'Consus Energy 최고운영책임자(COO)',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: '02',
        quote: '“JHP 덕분에 인도 시장 확장이 수월했습니다. 수십 년의 현지 경험과 전략적 민첩성이 완벽한 신뢰를 주었습니다.”',
        author: '박민준 (Min-Jun Park)',
        role: 'K-Tech Global 사업 expansion 부사장',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: '03',
        quote: '“한국 비즈니스 표준과 인도의 거대한 시장 기회를 연결하는 진정한 필수 가교 역할을 해줍니다.”',
        author: 'Rajesh Sharma',
        role: 'Indus Ventures 글로벌 파트너십 이사',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      },
    ],
    contact: {
      tag: 'GET IN TOUCH',
      heading: (
        <>
          다음 도약을
          <br />
          함께 논의하세요.
        </>
      ),
      body: '한국과 인도 간 비즈니스 확장 또는 파트너십 기회를 탐색할 준비가 되셨나요? 컨설팅 팀에 문의하세요.',
      emailLabel: '이메일 문의',
      phoneLabel: '전화 문의',
      globalLabel: '글로벌 거점',
      globalVal: '서울, 대한민국 & 뉴델리, 인도',
      nameLabel: '성함',
      namePlaceholder: '예: 홍길동',
      emailLabelField: '이메일 주소',
      emailPlaceholder: 'hong@company.com',
      companyLabel: '회사명',
      companyPlaceholder: '예: 엔터프라이즈 코리아',
      msgLabel: '문의 내용',
      msgPlaceholder: '귀사의 프로젝트 또는 성장 목표에 대해 알려주세요...',
      sendBtn: '메시지 전송',
      thankTitle: '감사합니다!',
      thankMsg: '메시지가 성공적으로 전달되었습니다. 빠른 시일 내에 담당자가 연락드리겠습니다.',
    },
    footer: {
      tagline: '시장을 연결하다. 기회를 창출하다.',
      navTitle: '바로가기',
      marketsTitle: '주요 시장',
      contactTitle: '문의하기',
      rights: '© 2026 JHP Enterprise. All rights reserved.',
      privacy: '개인정보처리방침',
    },
  },
};

const AnimatedCounter = ({ value, duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const match = String(value).match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (targetNumber === null) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * targetNumber));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(targetNumber);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated]);

  if (targetNumber === null) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const renderFormattedHeroTitle = (titleInput) => {
  if (React.isValidElement(titleInput)) {
    return titleInput;
  }
  if (typeof titleInput === 'string') {
    const trimmed = titleInput.trim();
    if (trimmed.toUpperCase().includes('MAKE INDIA')) {
      return (
        <>
          <span className="hero-line-white">make india</span>
          <br />
          <span className="hero-line-gold">
            your next move
          </span>
        </>
      );
    }
    return (
      <span className="hero-line-gold">{trimmed}</span>
    );
  }
  return titleInput;
};

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const isScrollingRef = useRef(false);

  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePortfolioTab, setActivePortfolioTab] = useState('2026');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cmsData, setCmsData] = useState(null);
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations.en;

  const mainSections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About JHP' },
    { id: 'services', label: 'Services' },
    { id: 'impact', label: 'Our Impact' },
    { id: 'markets', label: 'Our Markets' },
    { id: 'portfolio', label: 'Our Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const goToSectionIndex = (index) => {
    if (index < 0 || index >= mainSections.length || isScrollingRef.current) return;
    isScrollingRef.current = true;
    setCurrentSectionIndex(index);

    // Reset the target section's internal scroll to top
    setTimeout(() => {
      const targetSection = document.querySelectorAll('.snap-main-section')[index];
      if (targetSection) targetSection.scrollTop = 0;
    }, 50);

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 900);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/temp')) return;

    const handleWheel = (e) => {
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      // Find the currently active section element
      const activeSection = document.querySelector('.snap-main-section.is-active');
      if (!activeSection) {
        e.preventDefault();
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = activeSection;
      const isScrollable = scrollHeight > clientHeight + 2; // has overflow content
      const atTop = scrollTop <= 5;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 5;

      if (isScrollable) {
        // Section has overflow content — allow internal scrolling
        if (e.deltaY > 15 && atBottom) {
          // At bottom, scrolling down → go to next slide
          e.preventDefault();
          goToSectionIndex(currentSectionIndex + 1);
        } else if (e.deltaY < -15 && atTop) {
          // At top, scrolling up → go to previous slide
          e.preventDefault();
          goToSectionIndex(currentSectionIndex - 1);
        }
        // Otherwise let the browser handle internal scroll (don't preventDefault)
      } else {
        // Section fits in viewport — snap immediately
        e.preventDefault();
        if (e.deltaY > 15) {
          goToSectionIndex(currentSectionIndex + 1);
        } else if (e.deltaY < -15) {
          goToSectionIndex(currentSectionIndex - 1);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToSectionIndex(currentSectionIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSectionIndex(currentSectionIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSectionIndex]);

  useEffect(() => {
    const fetchContent = () => {
      client.fetch(`*[_type == "homepage"][0]`).then((data) => {
        if (data) setCmsData(data);
      }).catch(console.error);
    };

    fetchContent();

    const subscription = client.listen(`*[_type == "homepage"]`).subscribe(() => {
      fetchContent();
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.pathname.startsWith('/admin') || window.location.pathname.startsWith('/temp'))) return;

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0px) translate(-50%, -50%)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Trigger section-specific entrance animations when slide changes
    const activeSec = document.querySelectorAll('.snap-main-section')[currentSectionIndex];
    if (activeSec) {
      const headings = activeSec.querySelectorAll('.section-tag, .section-heading, .section-body');
      if (headings.length > 0) {
        gsap.fromTo(headings, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' });
      }

      const cards = activeSec.querySelectorAll('.service-card, .portfolio-card, .market-card, .contact-method-item');
      if (cards.length > 0) {
        gsap.fromTo(cards, { opacity: 0, y: 40, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, delay: 0.15, ease: 'power3.out' });
      }

      const stats = activeSec.querySelectorAll('.stat-item');
      if (stats.length > 0) {
        gsap.fromTo(stats, { opacity: 0, scale: 0.8, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2, ease: 'back.out(1.7)' });
      }

      const rows = activeSec.querySelectorAll('.market-row');
      if (rows.length > 0) {
        gsap.fromTo(rows, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.12, delay: 0.15, ease: 'power2.out' });
      }

      const sideCols = activeSec.querySelectorAll('.about-right, .contact-form-wrapper');
      if (sideCols.length > 0) {
        gsap.fromTo(sideCols, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      }
    }

    const sectionTags = document.querySelectorAll('.section-tag');
    sectionTags.forEach((tag) => tag.classList.add('active-tag'));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentSectionIndex]);

  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/admin')) {
    return <Studio config={sanityConfig} />;
  }

  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/temp')) {
    return <TempTransitionsDemo />;
  }

  const handleNextTestimonial = () => {
    const list = lang === 'ko' ? t.testimonials : (cmsData?.testimonialsGroup?.testimonialsList && cmsData.testimonialsGroup.testimonialsList.length > 0 ? cmsData.testimonialsGroup.testimonialsList : t.testimonials);
    setActiveTestimonial((prev) => (prev + 1) % list.length);
  };

  const handlePrevTestimonial = () => {
    const list = lang === 'ko' ? t.testimonials : (cmsData?.testimonialsGroup?.testimonialsList && cmsData.testimonialsGroup.testimonialsList.length > 0 ? cmsData.testimonialsGroup.testimonialsList : t.testimonials);
    setActiveTestimonial(
      (prev) => (prev - 1 + list.length) % list.length
    );
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderDownArrow = (nextIdx) => {
    return null; // Arrow removed as requested
  };

  return (
    <div className="site-wrapper">
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      ></div>

      {/* Side Dots Track */}
      <div className="side-dots-track">
        {mainSections.map((sec, idx) => (
          <button
            key={sec.id}
            className={`side-dot ${currentSectionIndex === idx ? 'active-dot' : ''}`}
            onClick={() => goToSectionIndex(idx)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title={sec.label}
          >
            <span className="dot-tooltip">{sec.label}</span>
          </button>
        ))}
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="brand-logo" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={logoImg} alt="JHP Enterprise Logo" className="header-logo-img" />
          </a>

          <div className="nav-links">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); goToSectionIndex(0); }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t.nav.home}
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); goToSectionIndex(1); }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              About JHP
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); goToSectionIndex(2); }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); goToSectionIndex(5); }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); goToSectionIndex(7); }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="lang-selector">
            <span
              className={`lang-btn ${lang === 'en' ? 'active-lang' : 'alt-lang'}`}
              onClick={() => setLang('en')}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              EN
            </span>
            <span className="divider">|</span>
            <span
              className={`lang-btn ${lang === 'ko' ? 'active-lang' : 'alt-lang'}`}
              onClick={() => setLang('ko')}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              한국어
            </span>
          </div>
        </div>
      </nav>

      {/* Main Snap Stage Container */}
      <div className="main-snap-stage effect-slide">
        <section id="home" className={`hero-section hero-no-image snap-main-section ${currentSectionIndex === 0 ? 'is-active' : currentSectionIndex > 0 ? 'is-past' : 'is-future'}`}>
          <div className="hero-container">
            <div className="hero-content centered-hero">
              <span className="hero-badge-tag">JHP ENTERPRISE • KOREA & INDIA</span>
              <h1 className="hero-title">
                {renderFormattedHeroTitle(lang === 'ko' ? t.hero.title : (cmsData?.heroGroup?.heroTitle || t.hero.title))}
              </h1>
              <p className="hero-desc">
                {lang === 'ko' ? t.hero.desc : (cmsData?.heroGroup?.heroDesc || cmsData?.heroDesc || t.hero.desc)}
              </p>
              <div className="hero-actions">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSectionIndex(1);
                  }}
                  className="cta-link hero-cta-btn"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {lang === 'ko' ? t.hero.cta : (cmsData?.heroGroup?.heroCtaText || t.hero.cta)} <ArrowRight className="icon-arrow" size={18} />
                </a>
              </div>
            </div>
          </div>
          {renderDownArrow(1)}
        </section>

        <section id="about" className={`about-section animate-section snap-main-section ${currentSectionIndex === 1 ? 'is-active' : currentSectionIndex > 1 ? 'is-past' : 'is-future'}`}>
          <div className="section-container grid-2">
            <div className="about-left">
              <span className="section-tag">{lang === 'ko' ? t.about.tag : (cmsData?.aboutGroup?.aboutTag || t.about.tag)}</span>
              <div className="reveal-mask">
                <h2 className="section-heading serif-heading reveal-text">
                  {lang === 'ko' ? t.about.heading : (cmsData?.aboutGroup?.aboutHeading || cmsData?.aboutHeading || t.about.heading)}
                </h2>
              </div>
              <p className="section-body">
                {lang === 'ko' ? t.about.body : (cmsData?.aboutGroup?.aboutBody || cmsData?.aboutBody || t.about.body)}
              </p>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  goToSectionIndex(2);
                }}
                className="cta-link dark-link"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {lang === 'ko' ? t.about.cta : (cmsData?.aboutGroup?.aboutCtaText || t.about.cta)} <ArrowRight className="icon-arrow" size={18} />
              </a>
            </div>

            <div className="about-right">
              <div className="image-card-container">
                <img
                  src={cmsData?.aboutGroup?.aboutImage ? urlFor(cmsData.aboutGroup.aboutImage).url() : (cmsData?.aboutImage ? urlFor(cmsData.aboutImage).url() : "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80")}
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
                        {lang === 'ko' ? t.about.badge : (cmsData?.aboutGroup?.badgeText || t.about.badge)}
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {renderDownArrow(2)}
        </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

        <section id="services" className={`services-section animate-section snap-main-section ${currentSectionIndex === 2 ? 'is-active' : currentSectionIndex > 2 ? 'is-past' : 'is-future'}`}>
          <div className="section-container">
            <div className="services-header grid-2">
              <div>
                <span className="section-tag">{lang === 'ko' ? t.services.tag : (cmsData?.servicesGroup?.servicesTag || t.services.tag)}</span>
                <div className="reveal-mask">
                  <h2 className="section-heading serif-heading reveal-text">
                    {lang === 'ko' ? t.services.heading : (cmsData?.servicesGroup?.servicesHeading || t.services.heading)}
                  </h2>
                </div>
              </div>
              <div className="services-header-right">
                <p className="section-body">
                  {lang === 'ko' ? t.services.body : (cmsData?.servicesGroup?.servicesBody || t.services.body)}
                </p>
                <a
                  href="#impact"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSectionIndex(3);
                  }}
                  className="cta-link dark-link"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {t.services.cta} <ArrowRight className="icon-arrow" size={18} />
                </a>
              </div>
            </div>

            <div className="services-grid">
              {(lang === 'ko'
                ? t.services.items
                : (cmsData?.servicesGroup?.servicesList && cmsData.servicesGroup.servicesList.length > 0
                  ? cmsData.servicesGroup.servicesList
                  : t.services.items)
              ).map((service, index) => {
                const ServiceIcons = [TrendingUp, Target, Megaphone, Handshake, Link2, Package];
                const IconComp = ServiceIcons[index % ServiceIcons.length];
                return (
                  <div className="service-card" key={index}>
                    <div className="service-icon-box">
                      <IconComp size={40} />
                    </div>
                    <div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-desc">{service.desc}</p>
                    </div>
                    <ArrowRight className="service-card-arrow" size={20} />
                  </div>
                );
              })}
            </div>
          </div>
          {renderDownArrow(3)}
        </section>

        <section id="impact" className={`impact-section animate-section snap-main-section ${currentSectionIndex === 3 ? 'is-active' : currentSectionIndex > 3 ? 'is-past' : 'is-future'}`}>
          <div className="section-container">
            <span className="section-tag">{lang === 'ko' ? t.impact.tag : (cmsData?.impactGroup?.impactTag || t.impact.tag)}</span>
            <div className="reveal-mask">
              <h2 className="impact-title serif-heading reveal-text">
                {lang === 'ko' ? t.impact.heading : (cmsData?.impactGroup?.impactHeading || t.impact.heading)}
              </h2>
            </div>

            <div className="impact-stats-grid">
              {(lang === 'ko'
                ? t.impact.stats
                : (cmsData?.impactGroup?.statsList && cmsData.impactGroup.statsList.length > 0
                  ? cmsData.impactGroup.statsList
                  : t.impact.stats)
              ).map((stat, index) => (
                <div className="stat-item" key={index}>
                  <div className="stat-number">
                    <AnimatedCounter value={stat.number} />
                  </div>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          {renderDownArrow(4)}
        </section>

        <section id="markets" className={`markets-section animate-section snap-main-section ${currentSectionIndex === 4 ? 'is-active' : currentSectionIndex > 4 ? 'is-past' : 'is-future'}`}>
        <div className="section-container grid-2">
          <div className="markets-left">
            <div className="dual-image-frame">
              <img
                src={cmsData?.marketsGroup?.marketsImage ? urlFor(cmsData.marketsGroup.marketsImage).url() : "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80"}
                alt="India & Korea Markets"
                className="markets-img"
              />
            </div>
          </div>

          <div className="markets-right">
            <span className="section-tag">{lang === 'ko' ? t.markets.tag : (cmsData?.marketsGroup?.marketsTag || t.markets.tag)}</span>
            <div className="reveal-mask">
              <h2 className="section-heading serif-heading reveal-text">
                {lang === 'ko' ? t.markets.heading : (cmsData?.marketsGroup?.marketsHeading || t.markets.heading)}
              </h2>
            </div>
            <p className="section-body">
              {lang === 'ko' ? t.markets.body : (cmsData?.marketsGroup?.marketsBody || t.markets.body)}
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
              {t.markets.cta} <ArrowRight className="icon-arrow" size={18} />
            </a>

            <div className="markets-list">
              {(lang === 'ko'
                ? t.markets.items
                : (cmsData?.marketsGroup?.marketsList && cmsData.marketsGroup.marketsList.length > 0
                  ? cmsData.marketsGroup.marketsList
                  : t.markets.items)
              ).map((m, index) => (
                <div className="market-row" key={index}>
                  <h4 className="market-name">{m.name}</h4>
                  <p className="market-details">{m.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



        <section id="portfolio" className={`projects-section animate-section snap-main-section ${currentSectionIndex === 5 ? 'is-active' : currentSectionIndex > 5 ? 'is-past' : 'is-future'}`}>
          <div className="section-container">
            <div className="portfolio-header-row">
              <div>
                <span className="section-tag">{t.projects.tag}</span>
                <div className="reveal-mask">
                  <h2 className="section-heading serif-heading reveal-text">
                    {t.projects.heading}
                  </h2>
                </div>
              </div>

              <div className="portfolio-tabs-wrapper">
                <button
                  className={`portfolio-tab-btn ${activePortfolioTab === 'ALL' ? 'active-tab' : ''}`}
                  onClick={() => setActivePortfolioTab('ALL')}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {lang === 'ko' ? '전체' : 'All Years'}
                </button>
                {t.projects.years.map((yObj) => (
                  <button
                    key={yObj.year}
                    className={`portfolio-tab-btn ${activePortfolioTab === yObj.year ? 'active-tab' : ''}`}
                    onClick={() => setActivePortfolioTab(yObj.year)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {yObj.year}
                  </button>
                ))}
              </div>
            </div>

            <div className="portfolio-content-area">
              {t.projects.years
                .filter((yObj) => activePortfolioTab === 'ALL' || activePortfolioTab === yObj.year)
                .map((yearObj) => {
                  const allItems = yearObj.columns.flat();
                  return (
                    <div key={yearObj.year} className="portfolio-year-section">
                      {activePortfolioTab === 'ALL' && (
                        <div className="portfolio-year-header-row">
                          <span className="year-title-badge">{yearObj.year}</span>
                          <div className="year-title-line"></div>
                        </div>
                      )}

                      <div className="portfolio-cards-grid">
                        {allItems.map((item, k) => (
                          <div
                            key={k}
                            className={`portfolio-card ${item.featured ? 'featured-card' : ''}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            <div className="portfolio-card-top">
                              <span className="card-year-pill">{yearObj.year}</span>
                            </div>
                            <h4 className="portfolio-card-name">{item.name}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          {renderDownArrow(6)}
        </section>

        <section id="testimonials" className={`testimonial-section animate-section snap-main-section ${currentSectionIndex === 6 ? 'is-active' : currentSectionIndex > 6 ? 'is-past' : 'is-future'}`}>
          <div className="section-container">
            {(() => {
              const list = lang === 'ko'
                ? t.testimonials
                : (cmsData?.testimonialsGroup?.testimonialsList && cmsData.testimonialsGroup.testimonialsList.length > 0
                  ? cmsData.testimonialsGroup.testimonialsList
                  : t.testimonials);
              const listLength = list.length;
              
              const getInitials = (name) => {
                if (!name) return 'JH';
                const parts = name.trim().split(' ');
                if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
                return name.substring(0, 2).toUpperCase();
              };

              const sectors = [
                lang === 'ko' ? '에너지 및 인프라' : 'Energy & Infrastructure',
                lang === 'ko' ? '테크 및 글로벌 확장' : 'Technology & Expansion',
                lang === 'ko' ? '벤처 캐피탈 및 무역' : 'Venture Capital & Trade'
              ];

              return (
                <>
                  <div className="testimonial-header-row">
                    <div>
                      <span className="section-tag">{lang === 'ko' ? '고객 후기' : 'TESTIMONIALS'}</span>
                      <h2 className="section-heading serif-heading">
                        {lang === 'ko' ? '파트너사들의 신뢰' : 'Trusted by Industry Leaders'}
                      </h2>
                    </div>
                    <p className="testimonial-subtitle">
                      {lang === 'ko' 
                        ? '한국과 인도 시장을 연결하며 이뤄낸 성과와 신뢰의 기록입니다.' 
                        : 'Real feedback from global executives who scaled across Korea and India with JHP Enterprise.'}
                    </p>
                  </div>

                  <div className="testimonial-cards-grid">
                    {list.map((item, idx) => {
                      const isSelected = (activeTestimonial % listLength) === idx;
                      const parts = item.role.includes(',') ? item.role.split(',') : [item.role, ''];
                      const roleTitle = parts[0].trim();
                      const companyName = parts[1] ? parts[1].trim() : '';

                      return (
                        <div
                          key={idx}
                          className={`testimonial-grid-card ${isSelected ? 'active-grid-card' : ''}`}
                          onClick={() => setActiveTestimonial(idx)}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        >
                          <div className="card-top">
                            <span className="sector-tag">{sectors[idx % sectors.length]}</span>
                            <div className="star-rating">★★★★★</div>
                          </div>

                          <div className="card-quote-wrapper">
                            <span className="inline-quote-mark">“</span>
                            <p className="card-quote-text serif-heading">
                              {item.quote.replace(/^[“"]|[”"]$/g, '')}
                            </p>
                          </div>

                          <div className="card-footer">
                            <div className="author-avatar-badge">
                              {getInitials(item.author)}
                            </div>
                            <div className="author-details">
                              <h4 className="author-name">{item.author}</h4>
                              {companyName && <p className="author-company">{companyName}</p>}
                              <p className="author-role-sub">{roleTitle}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="testimonial-bottom-bar">
                    <div className="testimonial-dots">
                      {list.map((_, idx) => (
                        <button
                          key={idx}
                          className={`dot-btn ${activeTestimonial % listLength === idx ? 'active-dot' : ''}`}
                          onClick={() => setActiveTestimonial(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <div className="carousel-controls">
                      <button
                        onClick={() => setActiveTestimonial((prev) => (prev - 1 + listLength) % listLength)}
                        className="carousel-btn"
                        aria-label="Previous Testimonial"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => setActiveTestimonial((prev) => (prev + 1) % listLength)}
                        className="carousel-btn"
                        aria-label="Next Testimonial"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
          {renderDownArrow(7)}
        </section>

        <section id="contact" className={`contact-section animate-section snap-main-section ${currentSectionIndex === 7 ? 'is-active' : currentSectionIndex > 7 ? 'is-past' : 'is-future'}`}>
        <div className="section-container grid-2">
          <div className="contact-info">
            <span className="section-tag">{t.contact.tag}</span>
            <div className="reveal-mask">
              <h2 className="section-heading serif-heading reveal-text">
                {t.contact.heading}
              </h2>
            </div>
            <p className="section-body">
              {t.contact.body}
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <Mail className="contact-icon" size={20} />
                <div>
                  <span className="contact-label">{t.contact.emailLabel}</span>
                  <p className="contact-val">{lang === 'ko' ? 'hello@jhpartners.co.in' : (cmsData?.contactGroup?.email || 'hello@jhpartners.co.in')}</p>
                </div>
              </div>

              <div className="contact-method-item">
                <Phone className="contact-icon" size={20} />
                <div>
                  <span className="contact-label">{t.contact.phoneLabel}</span>
                  <p className="contact-val">{lang === 'ko' ? '+91 123 456 7890' : (cmsData?.contactGroup?.phone || '+91 123 456 7890')}</p>
                </div>
              </div>

              <div className="contact-method-item">
                <Globe className="contact-icon" size={20} />
                <div>
                  <span className="contact-label">{t.contact.globalLabel}</span>
                  <p className="contact-val">{lang === 'ko' ? t.contact.globalVal : (cmsData?.contactGroup?.address || t.contact.globalVal)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="form-success">
                <h3 className="serif-heading">{t.contact.thankTitle}</h3>
                <p>{t.contact.thankMsg}</p>
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
                  <label htmlFor="name">{t.contact.nameLabel}</label>
                  <input type="text" id="name" required placeholder={t.contact.namePlaceholder} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t.contact.emailLabelField}</label>
                  <input type="email" id="email" required placeholder={t.contact.emailPlaceholder} />
                </div>

                <div className="form-group">
                  <label htmlFor="company">{t.contact.companyLabel}</label>
                  <input type="text" id="company" placeholder={t.contact.companyPlaceholder} />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t.contact.msgLabel}</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder={t.contact.msgPlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {t.contact.sendBtn} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer inside Contact Section */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-top grid-4">
              <div className="footer-brand">
                <a href="#" className="brand-logo footer-logo">
                  <img src={logoImg} alt="JHP Enterprise Logo" className="header-logo-img" />
                </a>
                <p className="footer-tagline">
                  {t.footer.tagline}
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
                <h4 className="footer-col-title">{t.footer.navTitle}</h4>
                <ul>
                  <li><a href="#home">{t.nav.home}</a></li>
                  <li><a href="#about">About JHP</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">{t.nav.contact}</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-col-title">{t.footer.marketsTitle}</h4>
                <ul>
                  <li><a href="#markets">Korea Market</a></li>
                  <li><a href="#markets">India Expansion</a></li>
                  <li><a href="#impact">Our Impact</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-col-title">{t.footer.contactTitle}</h4>
                <p className="footer-info">hello@jhpartners.co.in</p>
                <p className="footer-info">+91 123 456 7890</p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>{t.footer.rights}</p>
              <div className="legal-links">
                <a href="#">{t.footer.privacy}</a>
                <span>|</span>
                <a href="#">{t.footer.terms}</a>
              </div>
            </div>
          </div>
        </footer>
      </section>
      </div>
    </div>
  );
}

export default App;
