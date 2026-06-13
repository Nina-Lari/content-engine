import React from 'react';
import {brand} from './theme';
import {body} from './fonts';
import {LogoMark} from './logo';

// Shared brand furniture used across carousels (and the reel outro).

export const Wordmark: React.FC<{onDark?: boolean; handle?: string}> = ({onDark, handle = 'dutchwithjoost'}) => {
  // The brand wordmark is the proper-case name "Dutchwithjoost" (capital D), not the
  // lowercase @handle. The mark matches the wordmark text colour so it reads as one
  // lockup: white on the blue pill, blue on the white (on-dark) pill.
  const name = handle.replace(/^@/, '');
  const brandName = name.charAt(0).toUpperCase() + name.slice(1);
  const fg = onDark ? brand.blue : brand.white;
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14,
        background: onDark ? brand.white : brand.blue,
        color: fg,
        padding: '14px 26px',
        borderRadius: 999,
        fontFamily: body,
        fontWeight: 700,
        fontSize: 30,
        letterSpacing: 1,
      }}
    >
      <LogoMark size={26} fill={fg} />
      {brandName}
    </div>
  );
};

export const Counter: React.FC<{i: number; total: number}> = ({i, total}) => (
  <div
    style={{
      background: brand.gold,
      color: brand.goldText,
      fontFamily: body,
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: 1,
      padding: '12px 22px',
      borderRadius: 999,
    }}
  >
    {String(i).padStart(2, '0')} / {String(total).padStart(2, '0')}
  </div>
);

export const Dots: React.FC<{active: number; total: number; onDark?: boolean}> = ({active, total, onDark}) => (
  <div style={{display: 'flex', gap: 14, alignItems: 'center'}}>
    {Array.from({length: total}).map((_, i) => (
      <span
        key={i}
        style={{
          width: i === active ? 40 : 14,
          height: 14,
          borderRadius: 999,
          background: i === active ? brand.gold : onDark ? 'rgba(255,255,255,0.4)' : brand.border,
        }}
      />
    ))}
  </div>
);
