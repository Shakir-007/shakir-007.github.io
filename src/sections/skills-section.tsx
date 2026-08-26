import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Terminal, Cloud, GitBranch, Container, FileCode, Workflow, Activity } from 'lucide-react';

const skillCategories = [
  {
    title: 'Operating Systems & Scripting',
    icon: Terminal,
    skills: ['Linux', 'Bash', 'Cron', 'Shell Scripting'],
    color: 'bg-green-50 border-green-200',
  },
  {
    title: 'Cloud (AWS)',
    icon: Cloud,
    skills: ['EC2, VPC, S3, EBS, EFS, RDS', 'IAM, CloudWatch', 'Route 53, CloudFront, Lambda'],
    color: 'bg-orange-50 border-orange-200',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'GitLab'],
    color: 'bg-red-50 border-red-200',
  },
  {
    title: 'Containers & Orchestration',
    icon: Container,
    skills: ['Docker', 'Docker Compose', 'Kubernetes', 'EKS'],
    color: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'Infrastructure as Code',
    icon: FileCode,
    skills: ['Terraform', 'Modules', 'State Management', 'Workspaces'],
    color: 'bg-purple-50 border-purple-200',
  },
  {
    title: 'CI/CD',
    icon: Workflow,
    skills: ['Jenkins, Maven, SonarQube', 'Blue-Green Deployments', 'Canary Deployments', 'Rolling Deployments'],
    color: 'bg-indigo-50 border-indigo-200',
  },
  {
    title: 'Monitoring & Observability',
    icon: Activity,
    skills: ['Datadog', 'Logs & Metrics', 'Alerts', 'Dashboards'],
    color: 'bg-teal-50 border-teal-200',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className={`rounded-2xl border-2 ${category.color} transition-all hover:shadow-lg hover:scale-105`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-6 w-6" />
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-gray-700 flex items-start">
                        <span className="mr-2 text-blue-600">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
