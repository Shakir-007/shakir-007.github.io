import { Card, CardContent } from '../components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useCyclingGradient } from '../hooks/use-cycling-gradient';

const educationTimeline = [
  {
    period: '2012 – 2014',
    title: '10th — Secondary School',
    institution: 'Nabi Hasan Idrisi Inter College',
    detail: '82.5%',
  },
  {
    period: '2014 – 2016',
    title: '12th — Intermediate',
    institution: 'Ram Charan Ram Awadh Smarak Inter College, Bhikhupur',
    detail: '80.2%',
  },
  {
    period: '2016 – 2018',
    title: 'Education Gap — IIT-JEE Preparation',
    institution: null,
    detail: null,
  },
  {
    period: '2018 – 2022',
    title: 'B.Tech — Computer Science & Engineering',
    institution: 'Maulana Azad National Urdu University, Hyderabad',
    detail: 'CGPA: 8.3',
  },
];

export function EducationSection() {
  const { gradients, active } = useCyclingGradient('180deg', 3000);

  return (
    <section id="education" className="scroll-mt-20 py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl mb-4 text-center flex items-center justify-center gap-3">
          <GraduationCap className="h-9 w-9 text-green-600" />
          Education
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">2012 – 2022</p>

        <Card className="rounded-2xl border-2">
          <CardContent className="p-6 sm:p-8">
            <ol className="relative border-l-2 border-green-200 space-y-8 ml-2">
              {gradients.map((gradient, i) => (
                <div
                  key={i}
                  aria-hidden={i !== active ? true : undefined}
                  className="absolute -left-0.5 top-0 h-full w-0.5 transition-opacity duration-1400 ease-in-out"
                  style={{ backgroundImage: gradient, opacity: active === i ? 1 : 0 }}
                />
              ))}
              {educationTimeline.map((stage) => (
                <li key={stage.period} className="ml-6">
                  <span className="absolute -left-1.75 mt-1.5 h-3 w-3">
                    {gradients.map((gradient, i) => (
                      <span
                        key={i}
                        aria-hidden={i !== active ? true : undefined}
                        className="absolute inset-0 rounded-full transition-opacity duration-1400 ease-in-out"
                        style={{ backgroundImage: gradient, opacity: active === i ? 1 : 0 }}
                      />
                    ))}
                  </span>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs mb-2">
                    {stage.period}
                  </span>
                  <p className="text-gray-900">{stage.title}</p>
                  {stage.institution && <p className="text-sm text-gray-600">{stage.institution}</p>}
                  {stage.detail && <p className="text-sm text-gray-500">{stage.detail}</p>}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
