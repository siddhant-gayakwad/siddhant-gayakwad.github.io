import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    message: '',
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : String(error),
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Portfolio render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          data-app-error="true"
          role="alert"
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            padding: '32px 20px',
            background: '#F5F5F3',
            color: '#171717',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          <section style={{ width: 'min(680px, 100%)', padding: '32px', background: '#fff', border: '1px solid #E5E5E5', borderRadius: '18px' }}>
            <p style={{ color: '#B42318', fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>
              Portfolio startup error
            </p>
            <h1 style={{ margin: '12px 0', fontSize: 'clamp(28px, 5vw, 42px)', lineHeight: 1.1 }}>
              The page could not render.
            </h1>
            <p style={{ color: '#555', lineHeight: 1.6 }}>
              A component crashed while the portfolio was starting. The error is shown below so it can be fixed.
            </p>
            <pre style={{ marginTop: '18px', padding: '16px', background: '#F5F5F3', borderRadius: '10px', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', fontSize: '13px', color: '#8B1E16' }}>
              {this.state.message || 'Unknown rendering error'}
            </pre>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{ marginTop: '20px', padding: '11px 16px', borderRadius: '8px', background: '#171717', color: '#fff', border: 0, cursor: 'pointer' }}
            >
              Reload portfolio
            </button>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
