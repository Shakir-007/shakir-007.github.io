import { useCyclingGradient } from '../hooks/use-cycling-gradient';

export function AnimatedName({ text = 'Mohd Shakir' }: { text?: string }) {
  const { gradients, active } = useCyclingGradient('90deg', 3000);

  return (
    <>
      {gradients.map((gradient, i) => (
        <span
          key={i}
          aria-hidden={i !== active ? true : undefined}
          className="col-start-1 row-start-1 whitespace-nowrap bg-clip-text text-transparent transition-opacity duration-[1400ms] ease-in-out"
          style={{ backgroundImage: gradient, opacity: active === i ? 1 : 0 }}
        >
          {text}
        </span>
      ))}
    </>
  );
}
