import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Copy, Check, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#171717',
        color: '#FFFFFF',
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: '36px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="site-container">
        {/* Top Split: Left Brand & Nav, Right Giant Typographic Email (matching reference) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
            paddingBottom: 'clamp(44px, 6vw, 72px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          }}
          className="footer-top-grid"
        >
          {/* Left Brand & Navigation */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  color: '#171717',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '16px',
                }}
              >
                SG
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {personalInfo.name}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  DevOps Engineer
                </span>
              </div>
            </div>

            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                maxWidth: '420px',
                marginBottom: '28px',
              }}
            >
              {personalInfo.tagline}
            </p>

            {/* Quick Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '28px',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background-color 0.2s ease',
                }}
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background-color 0.2s ease',
                }}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background-color 0.2s ease',
                }}
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>

              <a
                href={personalInfo.awsProfileUrl || 'https://skillsprofile.skillbuilder.aws/user/Sid'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  height: '38px',
                  borderRadius: '19px',
                  backgroundColor: 'rgba(255, 153, 0, 0.12)',
                  border: '1px solid rgba(255, 153, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0 12px',
                  color: '#FF9900',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease',
                }}
                aria-label="AWS Skills Profile"
              >
                <span>AWS Skills Profile</span>
                <span style={{ fontSize: '0.7rem' }}>↗</span>
              </a>
            </div>
          </div>

          {/* Right: Giant Typographic Email matching reference image */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '14px',
                display: 'block',
              }}
            >
              DIRECT CONTACT
            </span>

            {/* Giant Email Typography (matching hello@dnova.com in reference image) */}
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                wordBreak: 'break-all',
                transition: 'color 0.2s ease',
                display: 'inline-block',
                marginBottom: '16px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-green)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            >
              {personalInfo.email}
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                type="button"
                onClick={handleCopyEmail}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {copied ? <Check size={14} color="#46D369" /> : <Copy size={14} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span className="status-dot" />
                <span>IST (UTC +5:30)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '28px',
            flexWrap: 'wrap',
            gap: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>
            <span>Designed &amp; Built by Siddhant Gayakwad.</span>
            <span style={{ marginLeft: '8px' }}>
              © 2026 Siddhant Gayakwad. All Rights Reserved.
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgba(255, 255, 255, 0.7)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1.3fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
