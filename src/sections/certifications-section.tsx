import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Award, ExternalLink, FileText } from 'lucide-react';

type Certification = {
  name: string;
  issuer: string;
  status: string;
  link?: string;
  file?: string;
  badge?: string;
};

// For a cert with an online verification page, set `link` (opens in a new tab).
// For a cert whose only proof is a PDF, drop the file in public/ and set `file: '/your-file.pdf'` instead.
// `badge` is the official certification badge image, shown next to the title.
const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    issuer: 'Credential ID 62C565-951F9W · Renewed · Valid Nov 2024 – Nov 2027',
    status: 'Earned',
    link: 'https://learn.microsoft.com/en-us/users/mohdshakir-1319/transcript/v256wb5q948jpe4',
    badge: '/icons/ms-azure-administrator-badge.svg',
  },
  {
    name: 'AWS Certified DevOps Engineer – Professional',
    issuer: 'AWS Training & Certification',
    status: 'In Progress',
  },
  {
    name: 'AWS Certified SysOps Administrator – Associate',
    issuer: 'AWS Training & Certification',
    status: 'In Progress',
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-20 py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl mb-4 text-center flex items-center justify-center gap-3">
          <Award className="h-9 w-9 text-rose-600" />
          Certifications
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Continuous learning journey in cloud infrastructure and DevOps practices
        </p>

        <div className="space-y-4">
          {certifications.map((cert) => (
            <Card
              key={cert.name}
              className={`rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 ${cert.status === 'Earned' ? 'border-amber-200 bg-amber-50' : 'border-gray-200'}`}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  {cert.badge && (
                    <img
                      src={cert.badge}
                      alt={`${cert.name} badge`}
                      className="h-14 w-14 shrink-0 object-contain"
                    />
                  )}
                  <div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm ${
                    cert.status === 'Earned' ? 'bg-rose-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {cert.status}
                </span>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-rose-600 hover:text-rose-700 hover:underline transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Credential
                  </a>
                )}

                {cert.file && (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-rose-600 hover:text-rose-700 hover:underline transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    View Certificate
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
