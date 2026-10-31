import React, { useState } from 'react';
import { personalInfo, heroMetrics } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Terminal as TerminalIcon, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const [showTerminalPreview, setShowTerminalPreview] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        paddingTop: 'clamp(32px, 6vw, 64px)',
        paddingBottom: 'clamp(48px, 8vw, 96px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        {/* Top Metadata Row: Metric numbers matching reference image (+200 / +50) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'clamp(28px, 5vw, 64px)',
            marginBottom: 'clamp(24px, 4vw, 44px)',
            flexWrap: 'wrap',
          }}
        >
          {heroMetrics.map((metric) => (
            <div key={metric.label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                {metric.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.01em',
                  marginTop: '4px',
                }}
              >
                {metric.label}
              </span>
            </div>
          ))}

          {/* DevOps Verified Status badge */}
          <div
            style={{
              marginLeft: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              borderRadius: '9999px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-primary)',
            }}
          >
            <span className="status-dot" />
            <span>SYSTEM STATUS: <strong>READY &amp; OPERATIONAL</strong></span>
          </div>
        </div>

        {/* Main Grid: Left Typographic Editorial Content, Right Portrait & Badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 6vw, 72px)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column */}
          <div style={{ maxWidth: '640px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                letterSpacing: '0.12em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              HELLO, WORLD.
            </span>

            {/* Giant Heading matching reference image "Hello" */}
            <h1
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 6.75rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                letterSpacing: '-0.045em',
                lineHeight: 0.95,
                marginBottom: '16px',
              }}
            >
              Hello
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                color: 'var(--text-primary)',
                fontWeight: 400,
                letterSpacing: '-0.025em',
                marginBottom: '20px',
                lineHeight: 1.25,
              }}
            >
              — I&apos;m Siddhant, building the{' '}
              <span
                style={{
                  borderBottom: '2px solid var(--accent-green)',
                  color: 'var(--text-primary)',
                }}
              >
                infrastructure
              </span>{' '}
              behind innovation.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(23, 23, 23, 0.05)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                marginBottom: '22px',
              }}
            >
              <TerminalIcon size={14} color="var(--accent-green)" />
              <span>DevOps Engineer · AWS · Kubernetes · CI/CD Automation</span>
            </div>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '36px',
              }}
            >
              {personalInfo.intro}
            </p>

            {/* Call to Actions */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '48px',
              }}
            >
              <button
                type="button"
                className="btn-primary"
                onClick={() => handleScrollTo('projects')}
              >
                <span>Explore My Work</span>
                <ArrowDown size={16} />
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Siddhant_Gayakwad_DevOps_Resume.pdf"
                className="btn-outline"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                type="button"
                onClick={() => setShowTerminalPreview(!showTerminalPreview)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px dashed var(--border-light)',
                  background: 'transparent',
                }}
              >
                <Activity size={14} color="var(--accent-green)" />
                <span>{showTerminalPreview ? 'Hide Terminal' : 'Live Terminal'}</span>
              </button>
            </div>

            {/* Scroll Down Cue (matching reference image) */}
            <button
              type="button"
              onClick={() => handleScrollTo('about')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8125rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <span>Scroll down</span>
              <ArrowDown size={14} />
            </button>
          </div>

          {/* Right Column: High-End Monochrome Portrait & Tech Overlay */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Portrait Frame (styled like the large clean portrait in the reference image) */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                aspectRatio: '4 / 4.8',
                borderRadius: '28px',
                overflow: 'hidden',
                backgroundColor: '#EAEAEA',
                border: '1px solid var(--border-light)',
                boxShadow: '0 24px 60px -20px rgba(0,0,0,0.12)',
              }}
            >
              <img
                src={personalInfo.headshotUrl}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  filter: 'grayscale(100%) contrast(1.05) brightness(0.98)',
                  transition: 'filter 0.5s ease, transform 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%) contrast(1.05) brightness(0.98)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />

              {/* Gradient overlay at bottom for clean text contrast */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(23, 23, 23, 0.75) 0%, rgba(23, 23, 23, 0.1) 40%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              {/* In-photo caption */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  color: '#FFFFFF',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    DevOps Engineer
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '1.125rem',
                    }}
                  >
                    {personalInfo.name}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(8px)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                  }}
                >
                  <ShieldCheck size={12} color="#46D369" />
                  <span>Techanek Tech</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges (like in reference image hero) */}
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                right: '4%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                borderRadius: '14px',
                padding: '10px 16px',
                boxShadow: '0 12px 28px -10px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                zIndex: 2,
              }}
            >
              <CheckCircle2 size={16} color="var(--accent-green)" />
              <span>AWS &amp; Kubernetes Native</span>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '-16px',
                left: '2%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                borderRadius: '14px',
                padding: '10px 16px',
                boxShadow: '0 12px 28px -10px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-primary)',
                zIndex: 2,
              }}
            >
              <span className="status-dot" />
              <span>CI/CD Pipeline: PASSING</span>
            </div>
          </div>
        </div>

        {/* Live Terminal Overlay / Expansion */}
        {showTerminalPreview && (
          <div
            style={{
              marginTop: '44px',
              backgroundColor: 'var(--bg-dark)',
              color: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid var(--border-dark)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px -20px rgba(0,0,0,0.3)',
            }}
          >
            <div
              style={{
                padding: '12px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(0,0,0,0.3)',
              }}
            >
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
              <span
                style={{
                  marginLeft: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                siddhant@production-node — zsh (kubectl cluster-info)
              </span>
            </div>
            <div
              style={{
                padding: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                lineHeight: 1.8,
                color: '#E5E5E5',
              }}
            >
              <div><span style={{ color: 'var(--accent-green)' }}>$</span> whoami</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '12px' }}>siddhant-gayakwad · DevOps Engineer @ Techanek Technology</div>
              <div style={{ marginTop: '8px' }}><span style={{ color: 'var(--accent-green)' }}>$</span> kubectl get nodes -o wide</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '12px' }}>
                ip-10-0-1-42.ec2.internal   Ready   worker   v1.30.2   uptime 99.98%
                <br />
                ip-10-0-2-89.ec2.internal   Ready   worker   v1.30.2   uptime 99.99%
              </div>
              <div style={{ marginTop: '8px' }}><span style={{ color: 'var(--accent-green)' }}>$</span> ./deploy.sh --cluster=aws-eks --env=production</div>
              <div style={{ color: 'var(--accent-green)', paddingLeft: '12px' }}>✓ build: pass · ✓ container scan: 0 vulnerabilities · ✓ rolling rollout: complete in 38s</div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
