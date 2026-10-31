import React, { useState } from 'react';
import { blogPosts } from '../data/portfolioData';
import { BlogPost } from '../types';
import { ArrowUpRight, Clock, Terminal } from 'lucide-react';
import { BlogModal } from './BlogModal';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Decorative gradients for editorial thumbnails matching reference image style
  const cardGradientStyles = [
    {
      bg: 'linear-gradient(135deg, #2A3B4C 0%, #17212B 100%)',
      accentColor: '#38BDF8',
      tag: 'KUBERNETES',
    },
    {
      bg: 'linear-gradient(135deg, #3D2645 0%, #1F1522 100%)',
      accentColor: '#F472B6',
      tag: 'CI/CD AUTOMATION',
    },
    {
      bg: 'linear-gradient(135deg, #1C3F39 0%, #0D211E 100%)',
      accentColor: '#34D399',
      tag: 'CONTAINERS',
    },
  ];

  return (
    <section
      id="blog"
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
          <div className="section-tag">ENGINEERING NOTES</div>
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
              <h2 className="section-title">Sharing What I Build &amp; Learn.</h2>
              <p className="section-desc">
                Architectural insights, troubleshooting postmortems, and practical guides on cloud
                infrastructure and deployment automation.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Editorial Grid (matching reference image Design Insights & Trends) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {blogPosts.map((post, idx) => {
            const visual = cardGradientStyles[idx % cardGradientStyles.length];
            return (
              <article
                key={post.id}
                className="editorial-card"
                style={{
                  padding: '0',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--bg-secondary)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedPost(post)}
              >
                {/* Visual Thumbnail (matching reference image editorial cards with geometric shapes) */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 10',
                    background: visual.bg,
                    position: 'relative',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      right: '-20px',
                      bottom: '-20px',
                      width: '160px',
                      height: '160px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${visual.accentColor} 0%, transparent 70%)`,
                      opacity: 0.25,
                      filter: 'blur(20px)',
                    }}
                  />

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(6px)',
                        color: visual.accentColor,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                      }}
                    >
                      {post.category}
                    </span>

                    <span
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Clock size={13} />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'rgba(255,255,255,0.85)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                      }}
                    >
                      <Terminal size={14} color={visual.accentColor} />
                      <span>devops.notes // {post.date}</span>
                    </div>

                    <div className="circle-arrow-btn" style={{ width: '36px', height: '36px' }}>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Article Body */}
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
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '10px',
                        lineHeight: 1.35,
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '20px',
                      }}
                    >
                      {post.summary}
                    </p>
                  </div>

                  <div
                    style={{
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>Read Full Note</span>
                      <ArrowUpRight size={14} />
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
};
