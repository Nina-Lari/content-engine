import React from 'react';

// The DutchwithJoost logo mark, as a render-safe Remotion component.
//
// Source of truth for the shape is brand/public/logo.tsx (this project's
// public/logo.tsx) — but that file is styled with Tailwind (`fill-foreground`)
// and lives in public/, which Remotion treats as static assets served via
// staticFile(). Remotion compositions here use inline styles, so this component
// mirrors the same SVG paths with an explicit `fill` color and is what actually
// renders into assets (the Wordmark on carousels and the reel outro).
//
// If the logo art changes, update the paths here to match public/logo.tsx.
export const LogoMark: React.FC<{size?: number; fill?: string}> = ({size = 28, fill = '#0025DB'}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{display: 'block', flexShrink: 0}}
  >
    <path
      d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
      fill={fill}
    />
    <path
      d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
      fill={fill}
    />
    <path
      d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
      fill={fill}
    />
    <path
      d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
      fill={fill}
    />
  </svg>
);
