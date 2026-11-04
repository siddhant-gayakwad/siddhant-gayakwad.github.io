import React, { useEffect, useState } from 'react';
import { certificationsData, personalInfo } from '../data/portfolioData';
import { Award, ExternalLink, Sparkles, Compass, CheckCircle, ShieldCheck, BadgeCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotionAllowed(!preference.matches);
    const handleChange = (event: MediaQueryListEvent) => setMotionAllowed(!event.matches);
    preference.addEventListener('change', handleChange);
    return () => preference.removeEventListener('change', handleChange);
  }, []);
  const credentials = certificationsData.filter(
    (c) => c.status === 'achieved' && c.category === 'certification'
  );
  const trainingBadges = certificationsData.filter(
    (c) => c.status === 'achieved' && (c.category === 'badge' || c.category === 'quest')
  );
  const exploringCerts = certificationsData.filter((c) => c.status === 'exploring');

  const awsProfileUrl = personalInfo.awsProfileUrl || 'https://skillsprofile.skillbuilder.aws/user/Sid';

  return (
    <section
      id="certifications"
      style={{
        paddingTop: 'clamp(56px, 8vw, 100px)',
        paddingBottom: 'clamp(56px, 8vw, 100px)',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <div className="section-tag">CREDENTIALS &amp; CERTIFICATIONS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h2 className="section-title">Verified AWS Credentials.</h2>
            <p className="section-desc">
              All AWS certifications and training badges are verified directly against Siddhant's official
              AWS Skill Builder Profile (<code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>skillsprofile.skillbuilder.aws/user/Sid</code>).
            </p>
          </div>
        </div>

        {/* Official AWS Profile Verification Banner */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '20px 24px',
            borderRadius: '16px',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(53, 168, 120, 0.35)',
            boxShadow: '0 4px 20px rgba(53, 168, 120, 0.06)',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'rgba(53, 168, 120, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-green)',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={26} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  Official AWS Skills Profile
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(53, 168, 120, 0.12)',
                    color: 'var(--accent-green)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-green)',
                    }}
                  />
                  LIVE &amp; VERIFIED
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  margin: '2px 0 0',
                }}
              >
                Amazon Web Services Skill Builder · User Handle: <strong style={{ color: 'var(--text-primary)' }}>Sid</strong> · 2 Official Credentials &amp; 3 Training Badges
              </p>
            </div>
          </div>

          <a
            href={awsProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '8px',
            }}
          >
            <span>Verify on AWS Skill Builder</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* 1. Official Credentials Subheading */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={18} color="#FF9900" />
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              AWS Official Credentials ({credentials.length})
            </h3>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Industry-standard certifications validating architecture design, multi-tier cloud deployments, and operational best practices.
          </p>
        </div>

        {/* Credentials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {credentials.map((cert) => {
            const isSaa = cert.id === 'aws-saa';
            return (
              <div
                key={cert.id}
                className="editorial-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                  position: 'relative',
                  border: isSaa ? '2px solid var(--accent-green)' : '1px solid var(--border-light)',
                  backgroundColor: '#FFFFFF',
                  boxShadow: isSaa ? '0 10px 30px rgba(53, 168, 120, 0.09)' : '0 4px 16px rgba(0,0,0,0.03)',
                  padding: '28px',
                }}
              >
                <div>
                  {isSaa && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        right: '24px',
                        backgroundColor: 'var(--accent-green)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        padding: '3px 12px',
                        borderRadius: '9999px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      RECENTLY GAINED CREDENTIAL
                    </div>
                  )}

                  {/* Top Row: Badge Image + Status */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    {cert.badgeImageUrl ? (
                      <img
                        src={cert.badgeImageUrl}
                        alt={cert.title}
                        style={{
                          width: '76px',
                          height: '76px',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.12))',
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '14px',
                          backgroundColor: 'rgba(255, 153, 0, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FF9900',
                        }}
                      >
                        <Award size={28} />
                      </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          backgroundColor: 'var(--accent-green-soft)',
                          color: 'var(--accent-green)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                        }}
                      >
                        <CheckCircle size={13} />
                        <span>ACTIVE CREDENTIAL</span>
                      </span>
                      {cert.expires && (
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6875rem',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {cert.expires}
                        </span>
                      )}
                    </div>
                  </div>

                  {isSaa && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 14px',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: '12px',
                        marginBottom: '16px',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <img
                        src="/assets/images/siddhant_aws_saa.jpg"
                        alt="Siddhant holding AWS SAA-C03 Certificate"
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '8px',
                          objectFit: 'cover',
                          border: '1px solid var(--border-light)',
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6875rem',
                            color: 'var(--accent-green)',
                            fontWeight: 700,
                          }}
                        >
                          SAA-C03 VERIFIED · OCT 2026
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.8125rem',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          Official Certificate in Hand · Valid thru 2029
                        </div>
                      </div>
                    </div>
                  )}

                  {isSaa && (
                    <div className="aws-celebration-row">
                      <div className="aws-celebration-media">
                        <video
                          autoPlay={motionAllowed}
                          muted
                          loop
                          playsInline
                          preload="none"
                          poster="/assets/images/aws-saa-poster.jpg"
                          aria-label="Original screen recording celebrating the AWS Solutions Architect Associate badge"
                        >
                          <source src="/assets/video/aws-saa-celebration.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="aws-celebration-copy">
                        <span className="aws-celebration-kicker">ORIGINAL ACHIEVEMENT VIDEO</span>
                        <strong>One more milestone unlocked.</strong>
                        <span>A short moment from the day I earned my AWS Solutions Architect – Associate certification.</span>
                        {!motionAllowed && <span className="aws-celebration-still">Motion reduced · Showing original video frame</span>}
                      </div>
                    </div>
                  )}

                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '16px',
                    }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)',
                    marginTop: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                    }}
                  >
                    {cert.date}
                  </span>

                  <a
                    href={cert.verificationUrl || awsProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.8125rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      color: 'var(--accent-green)',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Verify on AWS</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Official Training & Skill Badges */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BadgeCheck size={18} color="var(--accent-green)" />
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              AWS Training &amp; Skill Badges ({trainingBadges.length})
            </h3>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Hands-on badges issued by Amazon Web Services for Cloud Quest simulations and official academy curricula.
          </p>
        </div>

        {/* Training Badges Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {trainingBadges.map((badge) => (
            <div
              key={badge.id}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                padding: '24px',
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
                  {badge.badgeImageUrl ? (
                    <img
                      src={badge.badgeImageUrl}
                      alt={badge.title}
                      style={{
                        width: '56px',
                        height: '56px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(53, 168, 120, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-green)',
                      }}
                    >
                      <Award size={22} />
                    </div>
                  )}

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(53, 168, 120, 0.1)',
                      color: 'var(--accent-green)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle size={11} />
                    <span>VERIFIED BADGE</span>
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                    lineHeight: 1.35,
                  }}
                >
                  {badge.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}
                >
                  {badge.issuer}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  marginTop: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {badge.date}
                </span>

                <a
                  href={badge.verificationUrl || awsProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                  }}
                >
                  <span>Verify</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 3. In-Progress Cloud Quests & Certifications */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '18px',
            }}
          >
            <Compass size={18} color="var(--accent-green)" />
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Currently Exploring &amp; Hands-on Progress
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {exploringCerts.map((cert) => (
              <div
                key={cert.id}
                style={{
                  padding: '22px',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px dashed var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(217, 164, 65, 0.1)',
                        color: '#B8860B',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                      }}
                    >
                      IN PROGRESS
                    </span>
                    <Sparkles size={16} color="#D9A441" />
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {cert.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-green)',
                      fontWeight: 600,
                    }}
                  >
                    {cert.date}
                  </span>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                      }}
                    >
                      <span>AWS Profile</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
