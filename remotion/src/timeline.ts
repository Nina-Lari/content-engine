// Shared reel timing math. Used by both calculateMetadata (to compute total
// duration) and the component (to place each line), so the two never drift.
export const FPS = 30;
export const sec = (s: number) => Math.round(s * FPS);

export type Pacing = {leadIn: number; gap: number; tail: number; outro: number};
export const DEFAULT_PACING: Pacing = {leadIn: 0.4, gap: 0.35, tail: 0.6, outro: 2.8};

export function computeTimeline(durations: number[], pacing: Pacing) {
  const starts: number[] = [];
  let t = pacing.leadIn;
  for (const d of durations) {
    starts.push(t);
    t += d + pacing.gap;
  }
  const lastEnd = durations.length ? starts[starts.length - 1] + durations[durations.length - 1] : pacing.leadIn;
  const outroStart = lastEnd + pacing.tail;
  const totalSeconds = outroStart + pacing.outro;
  return {starts, outroStart, totalSeconds};
}
