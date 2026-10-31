import React, { useState } from 'react';
import { linkedInPosts } from '../data/portfolioData';
import { LinkedInPost } from '../types';
import { ArrowUpRight, Award, Mic, Laptop, ExternalLink, X } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const CommunityGallery: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<LinkedInPost | null>(null);

  const getPostIcon = (cat: string) => {
    if (cat.includes('CERTIFICATION')) return <Award size={16} color="var(--accent-green)" />;
    if (cat.includes('COMMUNITY')) return <Mic size={16} color="#38BDF8" />;
    return <Laptop size={16} color="#FBBF24" />;
  };

  return (
    <section
      id="community"
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
          <div className="section-tag">COMMUNITY &amp; MILESTONES</div>
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
                On Stage, In the Cloud &amp; In the Community.
              </h2>
              <p className="section-desc">
                Highlights and milestones from my LinkedIn posts — from achieving the AWS Solutions
                Architect certification to speaking at AWS Community Day Ahmedabad.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/siddhant-gayakwad-524524191/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '10px 20px', fontSize: '0.875rem' }}
            >
              <LinkedinIcon size={16} />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* 3-Card Editorial Gallery */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {linkedInPosts.map((post) => (
            <article
              key={post.id}
              className="editorial-card"
              style={{
                padding: '0',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-secondary)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedPost(post)}
            >
              {/* Photo Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  overflow: 'hidden',
                  backgroundColor: '#E5E7EB',
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(23, 23, 23, 0.78)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                  }}
                >
                  {getPostIcon(post.category)}
                  <span>{post.badge}</span>
                </div>

                {/* Circular Expand Button */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                  }}
                >
                  <div
                    className="circle-arrow-btn"
                    style={{
                      width: '38px',
                      height: '38px',
                      backgroundColor: 'rgba(23, 23, 23, 0.85)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
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
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.04em',
                        color: 'var(--accent-green)',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {post.category}
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

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      lineHeight: 1.35,
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    {post.caption}
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
                      gap: '4px',
                    }}
                  >
                    <span>Inspect Post</span>
                    <ArrowUpRight size={14} />
                  </span>

                  <a
                    href={post.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                    }}
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Post Inspection */}
      {selectedPost && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(23, 23, 23, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedPost(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(24px, 4vw, 36px)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-light)',
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 11',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '20px',
                backgroundColor: '#0F172A',
              }}
            >
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--accent-green-soft)',
                  color: 'var(--accent-green)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                }}
              >
                {selectedPost.badge}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                • {selectedPost.date}
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '14px', lineHeight: 1.25 }}>
              {selectedPost.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '28px' }}>
              {selectedPost.caption}
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={selectedPost.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <LinkedinIcon size={16} />
                <span>Open Post on LinkedIn</span>
                <ExternalLink size={14} />
              </a>

              <button
                type="button"
                className="btn-outline"
                onClick={() => setSelectedPost(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
