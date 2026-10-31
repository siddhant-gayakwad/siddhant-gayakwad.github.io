import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Kubernetes & Cloud', value: 'kubernetes' },
    { label: 'CI/CD Automation', value: 'cicd' },
    { label: 'Monitoring', value: 'monitoring' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
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
          <div className="section-tag">SELECTED WORK</div>
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
                Engineering Solutions. Delivering Results.
              </h2>
              <p className="section-desc">
                Production-grade cloud deployments, automated delivery pipelines, and container
                architectures engineered for resilience and performance.
              </p>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {filters.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className="pill-tag"
                  style={{
                    backgroundColor:
                      activeFilter === f.value ? 'var(--text-primary)' : 'var(--bg-secondary)',
                    color: activeFilter === f.value ? '#FFFFFF' : 'var(--text-primary)',
                    borderColor:
                      activeFilter === f.value ? 'var(--text-primary)' : 'var(--border-light)',
                    padding: '8px 16px',
                    fontSize: '0.8125rem',
                  }}
                  onClick={() => setActiveFilter(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards Grid (Inspired by reference image's editorial card gallery) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '32px',
          }}
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                padding: '0',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-secondary)',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Top Visual Mockup / Architecture Schematic */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  backgroundColor: '#0F172A',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                {/* Background Grid Pattern */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top Bar with Number & Category */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    PROJECT 0{index + 1}
                  </span>

                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(53, 168, 120, 0.18)',
                      border: '1px solid rgba(53, 168, 120, 0.35)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: '#46D369',
                      fontWeight: 500,
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Center Abstract Graphic / Code snippet */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '14px 18px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(30, 41, 59, 0.7)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#94A3B8',
                    lineHeight: 1.6,
                  }}
                >
                  <div style={{ color: '#38BDF8', marginBottom: '2px' }}>
                    apiVersion: apps/v1
                  </div>
                  <div>kind: Deployment</div>
                  <div style={{ color: '#4ADE80' }}>status: Ready (Running 99.9%)</div>
                </div>

                {/* Bottom Circular Arrow Icon (matches reference gallery hover button) */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8125rem',
                    }}
                  >
                    View Architecture Spec
                  </span>
                  <div className="circle-arrow-btn" style={{ width: '38px', height: '38px' }}>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.375rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '10px',
                      lineHeight: 1.25,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '20px',
                    }}
                  >
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="pill-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="pill-tag" style={{ color: 'var(--accent-green)' }}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight size={15} />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          color: 'var(--text-secondary)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.8125rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <GithubIcon size={15} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
