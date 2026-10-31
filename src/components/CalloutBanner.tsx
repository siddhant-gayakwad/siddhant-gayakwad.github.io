import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

export const CalloutBanner: React.FC = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        paddingTop: 'clamp(40px, 6vw, 72px)',
        paddingBottom: 'clamp(40px, 6vw, 72px)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="site-container">
        <div
          style={{
            position: 'relative',
            borderRadius: '28px',
            backgroundColor: '#171717',
            color: '#FFFFFF',
            padding: 'clamp(36px, 6vw, 72px) clamp(24px, 5vw, 64px)',
            overflow: 'hidden',
            boxShadow: '0 24px 60px -20px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(53, 168, 120, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Zap size={14} color="var(--accent-green)" />
            <span>CLOUD ARCHITECTURE &amp; PIPELINE AUTOMATION</span>
          </span>

          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: 1.15,
              maxWidth: '820px',
              marginBottom: '16px',
            }}
          >
            Ready to Build Reliable, Scalable Cloud Infrastructure?
          </h2>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
              maxWidth: '640px',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            Open to DevOps engineering opportunities, infrastructure consulting, and pipeline
            modernization to help software teams ship code faster and maintain 99.9% uptime.
          </p>

          <button
            type="button"
            className="btn-green"
            onClick={handleScrollToContact}
            style={{
              padding: '14px 32px',
              fontSize: '1rem',
            }}
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
