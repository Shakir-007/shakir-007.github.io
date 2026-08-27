import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, Download, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 px-6 bg-gradient-to-br from-amber-50 to-rose-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-4 text-gray-900">Let's Connect</h2>
        <p className="text-xl text-gray-600 mb-2">
          Interested in discussing DevOps, cloud infrastructure, or collaboration opportunities?
        </p>
        <p className="text-gray-500 mb-12 flex items-center justify-center gap-2">
          <MapPin className="h-4 w-4" />
          Pune, Maharashtra
        </p>

        <Card className="rounded-2xl border-2 bg-white">
          <CardContent className="p-5 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:ahmad.shakir.hussain@gmail.com"
                className="flex flex-col items-center justify-center gap-1 p-4 bg-amber-50 hover:scale-105 hover:shadow-md hover:border-rose-300 rounded-xl transition-all border border-amber-200 text-rose-600"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-500">Email</span>
                </div>
                <div className="text-sm text-gray-900 truncate max-w-full">ahmad.shakir.hussain@gmail.com</div>
              </a>

              <a
                href="https://github.com/shakir-007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 p-4 bg-amber-50 hover:scale-105 hover:shadow-md hover:border-rose-300 rounded-xl transition-all border border-amber-200 text-rose-600"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="h-5 w-5 shrink-0" />
                  <span className="text-sm text-gray-500">GitHub</span>
                </div>
                <div className="text-sm text-gray-900 truncate max-w-full">@shakir-007</div>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-2xl px-8 bg-rose-600 text-white" asChild>
                <a href="https://www.linkedin.com/in/mohd-shakir007/" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-8 text-rose-600 border-rose-300 hover:bg-rose-50"
                asChild
              >
                <a href="/Mohd_Shakir.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-sm text-gray-500 mt-8">© {new Date().getFullYear()} Mohd Shakir.</p>
      </div>
    </section>
  );
}
