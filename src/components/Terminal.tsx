import React, { useEffect, useState } from 'react';

interface TerminalLine {
  t: 'p' | 'o' | 'ok' | 'muted';
  v: string;
}

const TERMINAL_STEPS: TerminalLine[] = [
  { t: 'p', v: '$ whoami' },
  { t: 'o', v: 'siddhant-gayakwad · DevOps Engineer' },
  { t: 'p', v: '$ kubectl get status --watch' },
  { t: 'o', v: 'production   Running   uptime 99.9%' },
  { t: 'p', v: '$ ./deploy.sh --env=production' },
  { t: 'ok', v: '✓ build   ✓ test   ✓ deploy' },
  { t: 'muted', v: 'deployment successful in 41s' },
];

export const Terminal: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentTypingText, setCurrentTypingText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let timer: NodeJS.Timeout | null = null;
    let active = true;

    setDisplayedLines([]);
    setCurrentTypingText('');
    setIsTyping(true);

    const tick = () => {
      if (!active) return;
      if (lineIdx >= TERMINAL_STEPS.length) {
        setIsTyping(false);
        return;
      }

      const currentTarget = TERMINAL_STEPS[lineIdx];

      if (charIdx <= currentTarget.v.length) {
        setCurrentTypingText(currentTarget.v.slice(0, charIdx));
        charIdx++;
        timer = setTimeout(tick, currentTarget.t === 'p' ? 24 : 12);
      } else {
        setDisplayedLines((prev) => [...prev, currentTarget]);
        setCurrentTypingText('');
        lineIdx++;
        charIdx = 0;
        timer = setTimeout(tick, 180);
      }
    };

    timer = setTimeout(tick, 150);

    return () => {
      active = false;
      if (timer) clearTimeout(timer);
    };
  }, []);

  const getClassName = (type: TerminalLine['t']) => {
    switch (type) {
      case 'p':
        return 'p';
      case 'ok':
        return 'ok';
      case 'muted':
        return 'muted';
      default:
        return 'cmd';
    }
  };

  const handleReplay = () => {
    setDisplayedLines([]);
    setCurrentTypingText('');
    setIsTyping(true);
    let lineIdx = 0;
    let charIdx = 0;

    const tick = () => {
      if (lineIdx >= TERMINAL_STEPS.length) {
        setIsTyping(false);
        return;
      }

      const currentTarget = TERMINAL_STEPS[lineIdx];

      if (charIdx <= currentTarget.v.length) {
        setCurrentTypingText(currentTarget.v.slice(0, charIdx));
        charIdx++;
        setTimeout(tick, currentTarget.t === 'p' ? 24 : 12);
      } else {
        setDisplayedLines((prev) => [...prev, currentTarget]);
        setCurrentTypingText('');
        lineIdx++;
        charIdx = 0;
        setTimeout(tick, 180);
      }
    };

    setTimeout(tick, 100);
  };

  const currentStep = TERMINAL_STEPS[displayedLines.length];

  return (
    <div className="terminal" id="hero-terminal">
      <div className="terminal-bar">
        <span className="r" />
        <span className="y" />
        <span className="g" />
        <span className="title">siddhant@devops — zsh</span>
        <button
          onClick={handleReplay}
          title="Replay terminal animation"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            color: 'var(--text-faint)',
            cursor: 'pointer',
            fontSize: '10px',
            fontFamily: 'var(--mono)',
            padding: '2px 6px',
            borderRadius: '4px',
          }}
        >
          replay ↻
        </button>
      </div>
      <div className="terminal-body" id="terminal-output">
        {displayedLines.map((line, index) => (
          <div key={index} className={getClassName(line.t)}>
            {line.v}
          </div>
        ))}
        {isTyping && currentStep && (
          <div className={getClassName(currentStep.t)}>
            {currentTypingText}
            <span className="cursor" />
          </div>
        )}
        {!isTyping && (
          <div className="p">
            $ <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  );
};
