import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-4">Let's Connect</h2>
        <p className="text-xl text-blue-100 mb-12">
          Interested in discussing DevOps, cloud infrastructure, or collaboration opportunities?
        </p>

        <Card className="rounded-2xl border-2 bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:you@example.com"
                className="flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/20"
              >
                <Mail className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-sm text-blue-100">Email</div>
                  <div className="text-sm">you@example.com</div>
                </div>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/20"
              >
                <GithubIcon className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-sm text-blue-100">GitHub</div>
                  <div className="text-sm">@yourusername</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-2xl px-8 bg-white text-blue-600 hover:bg-blue-50" asChild>
                <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>

              <Button size="lg" variant="outline" className="rounded-2xl px-8 bg-transparent text-white border-white hover:bg-white/10" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-sm text-blue-200 mt-8">© {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.</p>
      </div>
    </section>
  );
}
