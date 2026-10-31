import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Layers, Server, Terminal } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('techanek-engineer');

  return (
    <section
      id="experience"
      style={{
        paddingTop: 'clamp(56px, 8vw, 100px)',
        paddingBottom: 'clamp(56px, 8vw, 100px)',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: '44px' }}>
          <div className="section-tag">EXPERIENCES</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h2 className="section-title">
                Explore My Engineering Journey.
              </h2>
              <p className="section-desc">
                From hardware and database service engineering to end-to-end cloud infrastructure,
                Kubernetes orchestration, and CI/CD automation.
              </p>
            </div>

            <a
              href="#contact"
              className="btn-outline"
              style={{ padding: '10px 20px', fontSize: '0.875rem' }}
            >
              <span>Connect with Me</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Horizontal Experience Rows (matching reference image timeline) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid var(--border-light)',
          }}
        >
          {experienceData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  borderBottom: '1px solid var(--border-light)',
                  transition: 'background-color 0.25s ease',
                  backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.65)' : 'transparent',
                }}
              >
                {/* Main Row Header */}
                <div
                  style={{
                    padding: 'clamp(20px, 3vw, 28px) 0',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(220px, 1.2fr) minmax(200px, 1.5fr) auto',
                    gap: '20px',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  className="experience-row-header"
                  onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                >
                  {/* Left: Org & Duration */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {item.isCurrent && <span className="status-dot" />}
                      <h3
                        style={{
                          fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.organization}
                      </h3>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        display: 'block',
                        marginTop: '4px',
                      }}
                    >
                      • {item.duration} · {item.location}
                    </span>
                  </div>

                  {/* Center: Designation / Role Description */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.role}
                    </span>
                    {item.highlights && (
                      <span
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                          display: 'block',
                          marginTop: '2px',
                        }}
                      >
                        {item.highlights}
                      </span>
                    )}
                  </div>

                  {/* Right: Technology Tags & Arrow/Toggle */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <div
                      className="tech-pills-row"
                      style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}
                    >
                      {item.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="pill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: isExpanded ? 'var(--text-primary)' : 'var(--bg-secondary)',
                        color: isExpanded ? '#FFFFFF' : 'var(--text-primary)',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                </div>

                {/* Expanded Drawer (matching reference's FutureTech expansion with visual preview blocks & description) */}
                {isExpanded && (
                  <div
                    style={{
                      paddingBottom: '32px',
                      paddingTop: '8px',
                      display: 'grid',
                      gridTemplateColumns: 'minmax(280px, 1fr) minmax(300px, 1.4fr) auto',
                      gap: '24px',
                      alignItems: 'center',
                    }}
                    className="experience-drawer-grid"
                  >
                    {/* Visual Preview Blocks (matching 3 graphic thumbnails in reference) */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          aspectRatio: '1',
                          borderRadius: '12px',
                          backgroundColor: '#1E293B',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px',
                          color: '#FFFFFF',
                          textAlign: 'center',
                        }}
                      >
                        <Server size={20} color="var(--accent-green)" />
                        <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', marginTop: '6px' }}>
                          EKS Clusters
                        </span>
                      </div>

                      <div
                        style={{
                          aspectRatio: '1',
                          borderRadius: '12px',
                          backgroundColor: '#0F172A',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px',
                          color: '#FFFFFF',
                          textAlign: 'center',
                        }}
                      >
                        <Layers size={20} color="#38BDF8" />
                        <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', marginTop: '6px' }}>
                          CI/CD Auto
                        </span>
                      </div>

                      <div
                        style={{
                          aspectRatio: '1',
                          borderRadius: '12px',
                          backgroundColor: '#171717',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px',
                          color: '#FFFFFF',
                          textAlign: 'center',
                        }}
                      >
                        <Terminal size={20} color="#FBBF24" />
                        <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', marginTop: '6px' }}>
                          Bash/Groovy
                        </span>
                      </div>
                    </div>

                    {/* Detailed Responsibilities List */}
                    <div>
                      <ul
                        style={{
                          listStyle: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        {item.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              fontSize: '0.875rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5,
                            }}
                          >
                            <CheckCircle2
                              size={15}
                              color="var(--accent-green)"
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Circular Action Button */}
                    <div>
                      <a
                        href="#contact"
                        className="circle-arrow-btn"
                        title="Discuss this role"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .experience-row-header {
            grid-template-columns: 1fr auto !important;
          }
          .experience-drawer-grid {
            grid-template-columns: 1fr !important;
          }
          .tech-pills-row {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
