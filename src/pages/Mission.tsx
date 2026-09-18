import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow, Button } from '../components/atomic';

export default function Mission() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 10, suffix: 'M+', label: 'Users Worldwide' },
    { value: 99.99, suffix: '%', label: 'Uptime Guarantee', decimals: 2 },
    { value: 150, suffix: '+', label: 'Countries Served' },
    { value: 500, suffix: 'K+', label: 'Projects Delivered' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Radical Transparency',
      description: 'We believe in complete openness with our clients, team, and community. Every decision, challenge, and success is shared honestly. No hidden agendas, no corporate speak—just real conversations that build trust and drive better outcomes.'
    },
    {
      icon: '❤️',
      title: 'Customer-Obsessed',
      description: 'Every pixel, every line of code, every strategy session starts with one question: "How does this help our customer?" We don\'t just meet expectations—we anticipate needs and exceed them consistently. Your success is our obsession.'
    },
    {
      icon: '⚡',
      title: 'Bias for Action',
      description: 'In a world of endless planning and analysis paralysis, we choose to move. We believe that done is better than perfect, and that momentum creates opportunities. We ship fast, learn quickly, and iterate relentlessly.'
    },
    {
      icon: '🤝',
      title: 'Collaborative Spirit',
      description: 'Great work happens when diverse minds come together. We foster an environment where every voice is heard, every idea is considered, and every team member feels empowered to contribute their unique perspective to our collective success.'
    },
    {
      icon: '🌱',
      title: 'Continuous Growth',
      description: 'We\'re never satisfied with "good enough." We invest in learning, experimentation, and personal development. Every project is an opportunity to push boundaries, every challenge is a chance to evolve, and every day is a step forward.'
    },
    {
      icon: '🎨',
      title: 'Craft & Quality',
      description: 'We take pride in our work. From the smallest interaction to the grandest strategy, we obsess over details and refuse to compromise on quality. We believe that excellence is not an act, but a habit woven into everything we do.'
    },
  ];

  const timeline = [
    { year: '2016', title: 'Founded', description: 'Studio Nova started as a two-person design studio in San Francisco with a mission to democratize great design.', icon: '🚀' },
    { year: '2017', title: 'First Major Client', description: 'Landed our first Fortune 500 client, proving that small teams can deliver enterprise-quality work.', icon: '🏆' },
    { year: '2018', title: 'Series A Funding', description: 'Raised $5M in Series A funding to expand our team and invest in cutting-edge design tools.', icon: '💰' },
    { year: '2019', title: 'V1 Platform Launch', description: 'Launched our proprietary design platform, enabling faster collaboration and better client experiences.', icon: '💻' },
    { year: '2020', title: 'Global Expansion', description: 'Opened offices in London and Tokyo, serving clients across 50+ countries worldwide.', icon: '🌍' },
    { year: '2021', title: '100 Team Members', description: 'Grew to 100 talented designers, developers, and strategists united by our core values.', icon: '👥' },
    { year: '2022', title: 'Industry Recognition', description: 'Won multiple Awwwards, CSS Design Awards, and Webby Awards for outstanding design work.', icon: '🏅' },
    { year: '2023', title: 'AI Integration', description: 'Pioneered AI-assisted design workflows, reducing project timelines by 40% while maintaining quality.', icon: '🤖' },
    { year: '2024', title: 'Present Day', description: 'Serving 500K+ users across 150+ countries, continuing to push the boundaries of digital design.', icon: '✨' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-20">
      {/* Hero Banner */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--term-bg)] via-[var(--ink)] to-[var(--term-bg)]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--safety)] rounded-full filter blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--term-green)] rounded-full filter blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Glassmorphism Content */}
        <div className="relative z-10 max-w-[var(--container-lg)] mx-auto px-8 text-center">
          <SectionEyebrow className="text-[var(--safety)]">Our Mission</SectionEyebrow>
          <h1 className="text-h1 text-[var(--base)] mt-6 mb-8 leading-tight">
            Building the Future of <span className="text-[var(--safety)]">Digital Design</span>
          </h1>
          <p className="text-data text-[var(--muted)] max-w-3xl mx-auto mb-12 leading-relaxed">
            We envision a world where exceptional design is accessible to everyone. Through innovation, collaboration, and relentless pursuit of excellence, we're democratizing software development for the next billion creators.
          </p>

          {/* Stats Counter */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="bento-card bento-card--dark text-center">
                <div className="text-h1 text-[var(--safety)] mb-2">
                  {statsVisible ? (
                    <CountUp 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      decimals={stat.decimals || 0}
                      duration={2}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-micro text-[var(--muted)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Mission Statement */}
      <section className="section">
        <div className="max-w-[var(--container-sm)] mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Our mission is to <span className="text-[var(--safety)]">democratize software development</span> for the next billion creators.
            </h2>
            <p className="text-data text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
              We believe that great design shouldn't be limited to those with deep pockets or technical expertise. By combining cutting-edge technology with human-centered design principles, we're making professional-grade tools accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values Grid */}
      <section className="section--surface">
        <div className="max-w-[var(--container-lg)] mx-auto">
          <div className="section__header text-center mb-12">
            <SectionEyebrow>Our Values</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              The Principles That <span className="text-[var(--safety)]">Guide Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bento-card hover-lift">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-h3 mb-3">{value.title}</h3>
                <p className="text-data text-[var(--muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="section">
        <div className="max-w-[var(--container-md)] mx-auto">
          <div className="section__header text-center mb-12">
            <SectionEyebrow>Our Journey</SectionEyebrow>
            <h2 className="text-h2 mt-2">
              Milestones That <span className="text-[var(--safety)]">Define Us</span>
            </h2>
          </div>

          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--safety)]" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bento-card hover-lift">
                      <div className="text-h3 text-[var(--safety)] mb-2">{item.year}</div>
                      <h3 className="text-h3 mb-3">{item.title}</h3>
                      <p className="text-data text-[var(--muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-16 h-16 bg-[var(--safety)] rounded-full flex items-center justify-center text-3xl border-4 border-[var(--base)] shadow-lg">
                      {item.icon}
                    </div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="section--dark">
        <div className="max-w-[var(--container-md)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Careers CTA */}
            <div className="bento-card bento-card--dark hover-lift">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-h2 text-[var(--base)] mb-4">Want to build with us?</h3>
              <p className="text-data text-[var(--muted)] mb-6 leading-relaxed">
                Join our team of passionate designers, developers, and strategists. We're always looking for talented people who share our values and vision.
              </p>
              <Link to="/careers" className="btn--primary btn--primary--safety">
                View Open Roles →
              </Link>
            </div>

            {/* Partnerships CTA */}
            <div className="bento-card bento-card--dark hover-lift">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-h2 text-[var(--base)] mb-4">Interested in partnering?</h3>
              <p className="text-data text-[var(--muted)] mb-6 leading-relaxed">
                We collaborate with forward-thinking companies to create exceptional digital experiences. Let's explore how we can work together.
              </p>
              <Link to="/contact" className="btn--primary">
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// CountUp Animation Component
function CountUp({ end, suffix = '', decimals = 0, duration = 2 }: { 
  end: number; 
  suffix?: string; 
  decimals?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(progress * end);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}
