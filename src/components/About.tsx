import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Server, ArrowUpRight, Plus, Minus, Cpu, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const personalPhotos = [
    {
      src: personalInfo.headshotUrl,
      title: 'Profile Portrait',
      caption: 'Siddhant Gayakwad · DevOps Engineer',
    },
    {
      src: '/assets/images/siddhant_aws_saa.jpg',
      title: 'AWS SAA-C03 Credential',
      caption: 'Officially achieved AWS Certified Solutions Architect',
    },
    {
      src: '/assets/images/siddhant_aws_speaker.jpg',
      title: 'AWS Community Speaker',
      caption: 'Speaking at AWS Community Day Ahmedabad',
    },
    {
      src: '/assets/images/siddhant_devops_desk.jpg',
      title: 'DevOps Workstation',
      caption: 'Kubernetes & CI/CD Telemetry Desk',
    },
  ];

  const bulletPoints = [
    {
      title: 'Reliable Cloud & Container Orchestration',
      content:
        'With hands-on experience across AWS, Docker, and Kubernetes, I design CI/CD pipelines and microservices deployments that make release cycles predictable, observable, and stress-free.',
    },
    {
      title: 'Bridging Code & Infrastructure',
      content:
        'I collaborate closely with software engineers and cross-functional teams, bridging application logic with cloud infrastructure to eliminate environment drift and configuration bugs.',
    },
    {
      title: 'Root-Cause Engineering Over Quick Fixes',
      content:
        'I believe in understanding why an infrastructure component or deployment failed. Rather than simply rerunning jobs, I inspect logs, audit permissions, and implement preventative automation.',
    },
  ];

  return (
    <section
      id="about"
      style={{
        paddingTop: 'clamp(56px, 8vw, 100px)',
        paddingBottom: 'clamp(56px, 8vw, 100px)',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div className="site-container">
        {/* Section Tag matching reference */}
        <div className="section-tag">ABOUT ME</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 6vw, 72px)',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column: Heading, Introduction & Philosophy */}
          <div style={{ maxWidth: '580px' }}>
            <h2 className="section-title">
              More Than Just Writing Code.
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '20px',
              }}
            >
              I got into DevOps the self-directed way — through intense hands-on lab work,
              certifications, and configuring Kubernetes clusters late into the night. That journey
              taught me to understand every layer beneath the surface: from Linux kernel internals
              and container namespaces to multi-region cloud routing.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '24px',
              }}
            >
              At <strong>Techanek Technology</strong>, I work across CI/CD automation, container
              clustering, AWS cloud provisioning, and production troubleshooting. Beyond daily work,
              I recently gained the <strong>AWS Certified Solutions Architect — Associate (SAA-C03)</strong> credential,
              actively volunteer with the AWS Ahmedabad community, and speak at technical gatherings.
            </p>

            {/* Quote Card */}
            <div
              style={{
                padding: '24px 28px',
                borderRadius: '16px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                borderLeft: '4px solid var(--accent-green)',
                marginBottom: '36px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.0625rem',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                &ldquo;I believe great software delivery starts with reliable infrastructure,
                automation, and continuous improvement.&rdquo;
              </p>
            </div>

            {/* Minimalist Connecting Arrow pointing toward cards/next section */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.875rem',
              }}
            >
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 12C14 12 24 16 36 20M36 20L30 14M36 20L30 23" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Explore my technical focus &amp; principles</span>
            </div>
          </div>

          {/* Right Column: Editorial Card Mosaic matching reference */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {/* Stat Card: 99.9% Uptime (matches reference 120% card) */}
            <div
              className="editorial-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '20px',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--accent-green-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-green)',
                  marginBottom: '20px',
                }}
              >
                <Server size={22} />
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  99.9%
                </span>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  Target uptime SLA and operational reliability across automated deployment environments.
                </p>
              </div>
            </div>

            {/* Interactive Portrait & Milestones Photo Card */}
            <div
              className="editorial-card"
              style={{
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={16} color="var(--accent-green)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    SG · {personalPhotos[activePhotoIdx].title}
                  </span>
                </div>

                <a
                  href="#community"
                  className="circle-arrow-btn"
                  title="View all milestone photos"
                  style={{ width: '32px', height: '32px' }}
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Main Active Photo */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  backgroundColor: '#ECECEC',
                  marginBottom: '10px',
                  position: 'relative',
                }}
              >
                <img
                  src={personalPhotos[activePhotoIdx].src}
                  alt={personalPhotos[activePhotoIdx].title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.3s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '8px 12px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                  }}
                >
                  {personalPhotos[activePhotoIdx].caption}
                </div>
              </div>

              {/* Photo Selector Thumbnail Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '6px',
                }}
              >
                {personalPhotos.map((photo, pIdx) => {
                  const isCurrent = activePhotoIdx === pIdx;
                  return (
                    <button
                      key={photo.title}
                      type="button"
                      onClick={() => setActivePhotoIdx(pIdx)}
                      style={{
                        padding: '0',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: isCurrent ? '2px solid var(--accent-green)' : '1px solid var(--border-light)',
                        aspectRatio: '1',
                        cursor: 'pointer',
                        opacity: isCurrent ? 1 : 0.6,
                        transition: 'all 0.2s ease',
                      }}
                      title={photo.title}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Expandable Bullet Points with '+' Icon (matches reference image exactly) */}
            <div
              style={{
                gridColumn: '1 / -1',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {bulletPoints.map((bp, idx) => {
                const isOpen = expandedIndex === idx;
                return (
                  <div
                    key={bp.title}
                    className="editorial-card"
                    style={{
                      padding: '20px 24px',
                      cursor: 'pointer',
                      borderRadius: '16px',
                      backgroundColor: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                    }}
                    onClick={() => setExpandedIndex(isOpen ? null : idx)}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: isOpen ? 'var(--text-primary)' : 'var(--bg-primary)',
                            color: isOpen ? '#FFFFFF' : 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </div>
                        <h4
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                            margin: 0,
                          }}
                        >
                          {bp.title}
                        </h4>
                      </div>

                      <Sparkles size={16} color={isOpen ? 'var(--accent-green)' : 'var(--text-muted)'} />
                    </div>

                    {isOpen && (
                      <p
                        style={{
                          marginTop: '14px',
                          paddingLeft: '42px',
                          fontSize: '0.9375rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.65,
                          margin: '14px 0 0 0',
                        }}
                      >
                        {bp.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
