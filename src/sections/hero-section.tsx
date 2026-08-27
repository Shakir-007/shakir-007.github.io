import { Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { GithubIcon, LinkedinIcon } from '../components/icons';
import { AnimatedName } from '../components/animated-name';

const tags = ['Cloud Infrastructure', 'AWS & Azure', 'Terraform', 'CI/CD Automation'];

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-rose-100 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="relative inline-grid mb-4 font-['Dancing_Script'] font-medium text-5xl sm:text-6xl md:text-7xl [animation:name-intro_0.8s_ease-out_both]">
          <AnimatedName />
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-4">AWS DevOps Engineer · Cloud Operations</p>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-rose-700 bg-white shadow-sm rounded-full px-3 py-1 transition-transform hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          4+ years of experience designing, automating, and operating cloud infrastructure and CI/CD pipelines across AWS and Azure.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-2xl px-8"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl px-8 border-rose-200 bg-rose-100 text-rose-700 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-700 active:bg-white"
            asChild
          >
            <a href="/Mohd_Shakir.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl px-8 border-rose-200 bg-rose-100 text-rose-700 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-700 active:bg-white"
            asChild
          >
            <a href="https://github.com/shakir-007" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl px-8 border-rose-200 bg-rose-100 text-rose-700 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-700 active:bg-white"
            asChild
          >
            <a href="https://www.linkedin.com/in/mohd-shakir007/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
