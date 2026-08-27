import { useEffect, useRef } from 'react';

const techIcons = [
  { name: 'AWS', src: '/icons/aws.svg' },
  { name: 'Azure', src: '/icons/azure.svg' },
  { name: 'Terraform', src: '/icons/terraform.svg' },
  { name: 'Docker', src: '/icons/docker.svg' },
  { name: 'GitHub', src: '/icons/github.svg' },
  { name: 'Git', src: '/icons/git.svg' },
  { name: 'Linux', src: '/icons/linux.svg' },
  { name: 'Prometheus', src: '/icons/prometheus.svg' },
  { name: 'Grafana', src: '/icons/grafana.svg' },
  { name: 'Python', src: '/icons/python.svg' },
  { name: 'JavaScript', src: '/icons/javascript.svg' },
  { name: 'TypeScript', src: '/icons/typescript.svg' },
  { name: 'React', src: '/icons/react.svg' },
  { name: 'Express', src: '/icons/express.svg' },
  { name: 'Tailwind CSS', src: '/icons/tailwindcss.svg' },
  { name: 'MongoDB', src: '/icons/mongodb.svg' },
  { name: 'ServiceNow', src: '/icons/servicenow.svg' },
];

// Rendered twice back-to-back so the auto-scroll can wrap at the halfway point with no visible seam.
const loopIcons = [...techIcons, ...techIcons];

export function TechIcons() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let frameId: number;

    const tick = () => {
      if (!pausedRef.current) {
        el.scrollLeft += 0.6;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      className="relative mb-16"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onTouchStart={() => {
        pausedRef.current = true;
      }}
      onTouchEnd={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={scrollerRef}
        className="flex items-stretch gap-4 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopIcons.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="group flex flex-col items-center gap-2 p-3 w-24 shrink-0 rounded-2xl border-2 border-gray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:border-rose-300"
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="h-10 w-16 object-contain transition-transform group-hover:scale-110"
              loading="lazy"
            />
            <span className="text-xs text-gray-600 text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
