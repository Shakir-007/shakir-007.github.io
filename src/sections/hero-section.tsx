import { Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { LinkedinIcon } from '../components/icons';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl mb-4">Your Name</h1>
        <p className="text-2xl text-gray-700 mb-6">AWS DevOps Engineer</p>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          "Automating, deploying, and monitoring scalable cloud infrastructure"
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-2xl px-8"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>

          <Button variant="outline" size="lg" className="rounded-2xl px-8" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>

          <Button variant="outline" size="lg" className="rounded-2xl px-8" asChild>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
