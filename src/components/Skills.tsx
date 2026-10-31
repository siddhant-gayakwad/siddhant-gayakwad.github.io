import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cloud, Layers, GitBranch, Terminal, Shield, BarChart3, Check, Flame } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cloud':
        return <Cloud size={20} color="var(--accent-green)" />;
      case 'containers':
        return <Layers size={20} color="var(--accent-green)" />;
      case 'cicd':
        return <GitBranch size={20} color="var(--accent-green)" />;
      case 'os':
        return <Terminal size={20} color="var(--accent-green)" />;
      case 'infra':
        return <Shield size={20} color="var(--accent-green)" />;
      case 'observability':
        return <BarChart3 size={20} color="var(--accent-green)" />;
      default:
        return <Layers size={20} color="var(--accent-green)" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      style={{
        paddingTop: 'clamp(56px, 8vw, 100px)',
        paddingBottom: 'clamp(56px, 8vw, 100px)',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-tag">TECHNOLOGIES</div>
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
              <h2 className="section-title">My Technical Arsenal.</h2>
              <p className="section-desc">
                Verified hands-on expertise across cloud infrastructure, container orchestration,
                and automation pipelines with continuous technical learning.
              </p>
            </div>

            {/* Filter Pills */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              <button
                type="button"
                className="pill-tag"
                style={{
                  backgroundColor: activeCategory === 'all' ? 'var(--text-primary)' : 'var(--bg-secondary)',
                  color: activeCategory === 'all' ? '#FFFFFF' : 'var(--text-primary)',
                  borderColor: activeCategory === 'all' ? 'var(--text-primary)' : 'var(--border-light)',
                  padding: '6px 14px',
                  fontSize: '0.8125rem',
                }}
                onClick={() => setActiveCategory('all')}
              >
                All Tools
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className="pill-tag"
                  style={{
                    backgroundColor: activeCategory === cat.id ? 'var(--text-primary)' : 'var(--bg-secondary)',
                    color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-primary)',
                    borderColor: activeCategory === cat.id ? 'var(--text-primary)' : 'var(--border-light)',
                    padding: '6px 14px',
                    fontSize: '0.8125rem',
                  }}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '20px',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--accent-green-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getCategoryIcon(category.id)}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {category.skills.length} TECHNOLOGIES
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {category.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '20px',
                    lineHeight: 1.5,
                  }}
                >
                  {category.description}
                </p>
              </div>

              {/* Skills Tags List */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      backgroundColor: skill.isExploring
                        ? 'rgba(217, 164, 65, 0.08)'
                        : 'var(--bg-primary)',
                      border: `1px solid ${
                        skill.isExploring ? 'rgba(217, 164, 65, 0.3)' : 'var(--border-light)'
                      }`,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: skill.isExploring ? '#B8860B' : 'var(--text-primary)',
                    }}
                  >
                    {skill.isExploring ? (
                      <Flame size={12} color="#D9A441" />
                    ) : (
                      <Check size={12} color="var(--accent-green)" />
                    )}
                    <span>{skill.name}</span>
                    {skill.isExploring && (
                      <span
                        style={{
                          fontSize: '0.625rem',
                          padding: '1px 4px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(217, 164, 65, 0.2)',
                          color: '#8B6508',
                          marginLeft: '2px',
                        }}
                      >
                        Learning
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
