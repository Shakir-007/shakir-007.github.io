import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Award, BookOpen } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    status: 'Preparation Phase',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    status: 'Preparation Phase',
  },
];

const completedCourses = [
  'Linux System Administration Fundamentals',
  'AWS Cloud Practitioner Essentials',
  'Docker and Containerization Mastery',
  'Kubernetes for DevOps Engineers',
  'Terraform Infrastructure as Code',
  'Jenkins CI/CD Pipeline Development',
  'Git and Version Control Workflows',
  'Monitoring and Observability with Datadog',
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">Certifications & Learning Milestones</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Continuous learning journey in DevOps technologies and practices
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl mb-6 flex items-center gap-3">
              <Award className="h-7 w-7 text-blue-600" />
              Target Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.name} className="rounded-2xl border-2 border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {cert.status}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6 flex items-center gap-3">
              <BookOpen className="h-7 w-7 text-green-600" />
              Completed Training
            </h3>
            <Card className="rounded-2xl border-2">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {completedCourses.map((course) => (
                    <li key={course} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
