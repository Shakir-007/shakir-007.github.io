import { useEffect, useRef, useState } from 'react';

const GRADIENT_PALETTE = [
  '#f59e0b', // amber
  '#fb923c', // orange
  '#f43f5e', // rose
  '#ec4899', // pink
  '#d946ef', // fuchsia
  '#a855f7', // purple
  '#8b5cf6', // violet / lavender
  '#10b981', // emerald / green
  '#3b82f6', // blue
];

function randomGradient(direction: string) {
  const pool = [...GRADIENT_PALETTE];
  const stops = [];
  for (let i = 0; i < 4; i++) {
    stops.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
  }
  return `linear-gradient(${direction}, ${stops.join(', ')})`;
}

// Two overlapping gradients cross-fade in and out, so the color shift is smooth rather than a hard cut.
export function useCyclingGradient(direction: string = '90deg', intervalMs: number = 3000) {
  const [gradients, setGradients] = useState(() => [randomGradient(direction), randomGradient(direction)]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      const current = activeRef.current;
      const next = current === 0 ? 1 : 0;
      setGradients((prev) => {
        const updated = [...prev];
        updated[next] = randomGradient(direction);
        return updated;
      });
      setActive(next);
      activeRef.current = next;
    }, intervalMs);
    return () => clearInterval(id);
  }, [direction, intervalMs]);

  return { gradients, active };
}
