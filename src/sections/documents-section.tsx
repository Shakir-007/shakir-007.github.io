import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FileText, Download, PlusCircle } from 'lucide-react';

// To add a document: drop the file in public/ (e.g. public/az-104-certificate.pdf),
// then add an entry here with a title, short description, and href: '/your-file.pdf'.
const documents = [
  {
    title: 'Resume / CV',
    description: 'Full professional resume — experience, projects, skills, and certifications.',
    href: '/Mohd_Shakir.pdf',
  },
  {
    title: 'Web Development Certificate',
    description: 'Certificate of completion for web development coursework.',
    href: '/Web%20dev%20certicate.pdf',
  },
];

export function DocumentsSection() {
  return (
    <section id="documents" className="scroll-mt-20 py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">Documents</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Downloadable resume and credentials — certification IDs are listed in the Certifications section for
          verification.
        </p>

        <div className="space-y-4">
          {documents.map((doc) => (
            <Card
              key={doc.title}
              className="rounded-2xl border-2 transition-all hover:shadow-lg hover:border-rose-200"
            >
              <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">{doc.title}</p>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                  </div>
                </div>
                <Button
                  className="group w-full sm:w-auto rounded-xl bg-rose-600 text-white hover:bg-rose-700"
                  asChild
                >
                  <a href={doc.href} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}

          <div className="flex items-center gap-3 p-6 rounded-2xl border-2 border-dashed border-gray-300 text-gray-400">
            <PlusCircle className="h-6 w-6 shrink-0" />
            <p className="text-sm">More documents — certificates, transcripts, reference letters — coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
