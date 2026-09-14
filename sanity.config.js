import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'jhp-enterprise',
  title: 'JHP Enterprise CMS',
  projectId: 'jf8d77mn',
  dataset: 'production',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'homepage',
        title: 'Full Website Content Editor',
        type: 'document',
        initialValue: {
          heroGroup: {
            heroTitle: 'MAKE INDIA YOUR NEXT MOVE —',
            heroDesc: 'JHP Enterprise was built upon the foundation of our former affiliate—Korea Indo Traders Pvt. Ltd. established in 1968. Driven by our passion for consulting and marketing and our deep understanding of both Korean and Indian markets, we envisioned a company that would serve as a catalyst for businesses seeking to expand their reach and make a significant impact in the Indian market.',
            heroCtaText: 'Discover our story',
          },
          aboutGroup: {
            aboutTag: 'ABOUT JHP',
            aboutHeading: 'Rooted in Korea. Focused on India.',
            aboutBody: 'JHP Enterprise traces its roots to Korea Indo Traders Pvt. Ltd., established in 1968. With decades of experience and a deep understanding of both Korean and Indian markets, we bring insight, connections and expertise to help businesses grow across borders.',
            aboutCtaText: 'Learn more',
            badgeText: 'BRIDGING MARKETS • BUILDING OPPORTUNITIES •',
          },
          servicesGroup: {
            servicesTag: 'WHAT WE DO',
            servicesHeading: 'Comprehensive solutions for your growth journey.',
            servicesBody: 'From market entry to long-term partnerships, we provide end-to-end support to help your business succeed in India.',
            servicesList: [
              { title: 'Market Entry & Expansion', desc: 'Navigate the Indian market with confidence and clarity.' },
              { title: 'Strategy & Consulting', desc: 'Turn insights into actionable business strategies.' },
              { title: 'Marketing & Brand', desc: 'Build a brand that resonates across cultures.' },
              { title: 'Business Development', desc: 'Create opportunities. Build lasting relationships.' },
              { title: 'Korea-India Partnership', desc: 'Connect businesses. Create mutual value.' },
              { title: 'Trade & Distribution', desc: 'Move your products further, faster, smarter.' },
            ],
          },
          impactGroup: {
            impactTag: 'OUR IMPACT',
            impactHeading: 'A bridge between Korea and India.',
            statsList: [
              { number: '1968', label: 'Our foundation and legacy' },
              { number: 'Korea + India', label: 'Two markets. One network.' },
              { number: 'Long-term partnerships', label: 'Trusted by businesses across industries.' },
            ],
          },
          marketsGroup: {
            marketsTag: 'OUR MARKETS',
            marketsHeading: 'Two markets. One opportunity.',
            marketsBody: 'We bridge Korea and India — connecting businesses, ideas and people for sustainable growth and shared success.',
            marketsList: [
              { name: 'Korea', details: 'Innovation. Technology. Global reach.' },
              { name: 'India', details: 'Talent. Scale. New possibilities.' },
              { name: 'Beyond Borders', details: 'Stronger together.' },
            ],
          },
          testimonialsGroup: {
            testimonialsList: [
              {
                quote: '“JHP helped us understand the Indian market in a way no other partner could. Their insight, network and dedication made all the difference.”',
                author: 'Elena Martin',
                role: 'Chief Operating Officer, Consus Energy',
              },
              {
                quote: '“Expanding to India was seamless with JHP. Their decades of local experience and cross-border strategic agility provided total confidence.”',
                author: 'Min-Jun Park',
                role: 'VP of Business Expansion, K-Tech Global',
              },
              {
                quote: '“A truly essential bridge between Korean business standards and the vast scale of Indian market opportunities.”',
                author: 'Rajesh Sharma',
                role: 'Director of Global Partnerships, Indus Ventures',
              },
            ],
          },
          contactGroup: {
            email: 'hello@jhpartners.co.in',
            phone: '+91 123 456 7890',
            address: 'Seoul, South Korea & New Delhi, India',
          },
        },
        fields: [
          // 1. HERO SECTION
          {
            name: 'heroGroup',
            title: '1. Hero Section (Header)',
            type: 'object',
            fields: [
              { name: 'heroTitle', title: 'Main Headline', type: 'string', initialValue: 'MAKE INDIA YOUR NEXT MOVE —' },
              { name: 'heroDesc', title: 'Subtitle Description', type: 'text' },
              { name: 'heroCtaText', title: 'Button Text', type: 'string', initialValue: 'Discover our story' },
              { name: 'heroImage', title: 'Hero Main Image', type: 'image', options: { hotspot: true } },
            ],
          },
          // 2. ABOUT SECTION
          {
            name: 'aboutGroup',
            title: '2. About JHP Section',
            type: 'object',
            fields: [
              { name: 'aboutTag', title: 'Section Tag Line', type: 'string', initialValue: 'ABOUT JHP' },
              { name: 'aboutHeading', title: 'Section Heading', type: 'string', initialValue: 'Rooted in Korea. Focused on India.' },
              { name: 'aboutBody', title: 'Main Paragraph Text', type: 'text' },
              { name: 'aboutCtaText', title: 'Button Text', type: 'string', initialValue: 'Learn more' },
              { name: 'aboutImage', title: 'About Section Image', type: 'image', options: { hotspot: true } },
              { name: 'badgeText', title: 'Rotating Badge Text', type: 'string', initialValue: 'BRIDGING MARKETS • BUILDING OPPORTUNITIES •' },
            ],
          },
          // 3. SERVICES SECTION
          {
            name: 'servicesGroup',
            title: '3. What We Do (Services)',
            type: 'object',
            fields: [
              { name: 'servicesTag', title: 'Section Tag Line', type: 'string', initialValue: 'WHAT WE DO' },
              { name: 'servicesHeading', title: 'Section Heading', type: 'string', initialValue: 'Comprehensive solutions for your growth journey.' },
              { name: 'servicesBody', title: 'Subtext Description', type: 'text' },
              {
                name: 'servicesList',
                title: 'All 6 Service Cards',
                type: 'array',
                initialValue: [
                  { title: 'Market Entry & Expansion', desc: 'Navigate the Indian market with confidence and clarity.' },
                  { title: 'Strategy & Consulting', desc: 'Turn insights into actionable business strategies.' },
                  { title: 'Marketing & Brand', desc: 'Build a brand that resonates across cultures.' },
                  { title: 'Business Development', desc: 'Create opportunities. Build lasting relationships.' },
                  { title: 'Korea-India Partnership', desc: 'Connect businesses. Create mutual value.' },
                  { title: 'Trade & Distribution', desc: 'Move your products further, faster, smarter.' },
                ],
                of: [
                  {
                    type: 'object',
                    fields: [
                      { name: 'title', title: 'Service Name', type: 'string' },
                      { name: 'desc', title: 'Service Short Description', type: 'text' },
                    ],
                  },
                ],
              },
            ],
          },
          // 4. IMPACT STATS
          {
            name: 'impactGroup',
            title: '4. Our Impact (Numbers & Stats)',
            type: 'object',
            fields: [
              { name: 'impactTag', title: 'Section Tag Line', type: 'string', initialValue: 'OUR IMPACT' },
              { name: 'impactHeading', title: 'Headline', type: 'string', initialValue: 'A bridge between Korea and India.' },
              {
                name: 'statsList',
                title: 'Impact Stats Items',
                type: 'array',
                initialValue: [
                  { number: '1968', label: 'Our foundation and legacy' },
                  { number: 'Korea + India', label: 'Two markets. One network.' },
                  { number: 'Long-term partnerships', label: 'Trusted by businesses across industries.' },
                ],
                of: [
                  {
                    type: 'object',
                    fields: [
                      { name: 'number', title: 'Number / Title (e.g. 1968 or Korea+India)', type: 'string' },
                      { name: 'label', title: 'Description Label', type: 'string' },
                    ],
                  },
                ],
              },
            ],
          },
          // 5. MARKETS SECTION
          {
            name: 'marketsGroup',
            title: '5. Our Markets Section',
            type: 'object',
            fields: [
              { name: 'marketsTag', title: 'Section Tag Line', type: 'string', initialValue: 'OUR MARKETS' },
              { name: 'marketsHeading', title: 'Section Heading', type: 'string', initialValue: 'Two markets. One opportunity.' },
              { name: 'marketsBody', title: 'Paragraph Text', type: 'text' },
              { name: 'marketsImage', title: 'Markets Image', type: 'image', options: { hotspot: true } },
              {
                name: 'marketsList',
                title: 'Market Items List',
                type: 'array',
                initialValue: [
                  { name: 'Korea', details: 'Innovation. Technology. Global reach.' },
                  { name: 'India', details: 'Talent. Scale. New possibilities.' },
                  { name: 'Beyond Borders', details: 'Stronger together.' },
                ],
                of: [
                  {
                    type: 'object',
                    fields: [
                      { name: 'name', title: 'Market Name (e.g. Korea)', type: 'string' },
                      { name: 'details', title: 'Details Text', type: 'string' },
                    ],
                  },
                ],
              },
            ],
          },
          // 6. TESTIMONIALS
          {
            name: 'testimonialsGroup',
            title: '6. Client Testimonials Carousel',
            type: 'object',
            fields: [
              {
                name: 'testimonialsList',
                title: 'Testimonials List',
                type: 'array',
                initialValue: [
                  {
                    quote: '“JHP helped us understand the Indian market in a way no other partner could. Their insight, network and dedication made all the difference.”',
                    author: 'Elena Martin',
                    role: 'Chief Operating Officer, Consus Energy',
                  },
                  {
                    quote: '“Expanding to India was seamless with JHP. Their decades of local experience and cross-border strategic agility provided total confidence.”',
                    author: 'Min-Jun Park',
                    role: 'VP of Business Expansion, K-Tech Global',
                  },
                  {
                    quote: '“A truly essential bridge between Korean business standards and the vast scale of Indian market opportunities.”',
                    author: 'Rajesh Sharma',
                    role: 'Director of Global Partnerships, Indus Ventures',
                  },
                ],
                of: [
                  {
                    type: 'object',
                    fields: [
                      { name: 'quote', title: 'Quote Text', type: 'text' },
                      { name: 'author', title: 'Author Name', type: 'string' },
                      { name: 'role', title: 'Author Job Title / Company', type: 'string' },
                      { name: 'image', title: 'Author Photo', type: 'image', options: { hotspot: true } },
                    ],
                  },
                ],
              },
            ],
          },
          // 7. CONTACT & FOOTER INFO
          {
            name: 'contactGroup',
            title: '7. Contact Info & Details',
            type: 'object',
            fields: [
              { name: 'email', title: 'Contact Email', type: 'string', initialValue: 'hello@jhpartners.co.in' },
              { name: 'phone', title: 'Contact Phone', type: 'string', initialValue: '+91 123 456 7890' },
              { name: 'address', title: 'Office Locations', type: 'string', initialValue: 'Seoul, South Korea & New Delhi, India' },
            ],
          },
        ],
      },
    ],
  },
});
