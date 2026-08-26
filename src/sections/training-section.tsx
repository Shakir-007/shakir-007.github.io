import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const trainingAreas = [
  {
    title: 'Linux & System Administration',
    topics: [
      'File system hierarchy and management',
      'User and permission management',
      'Process management and systemd',
      'Shell scripting and automation',
      'Package management (apt, yum)',
      'Network configuration and troubleshooting',
      'Log management and monitoring',
    ],
  },
  {
    title: 'AWS Cloud Services',
    topics: [
      'Compute: EC2, Lambda, ECS, EKS',
      'Storage: S3, EBS, EFS, Glacier',
      'Networking: VPC, Route 53, CloudFront, ALB/NLB',
      'Database: RDS, DynamoDB, ElastiCache',
      'Security: IAM, Security Groups, ACM',
      'Monitoring: CloudWatch, CloudTrail',
      'Well-Architected Framework principles',
    ],
  },
  {
    title: 'Git & Source Control',
    topics: [
      'Git fundamentals and workflows',
      'Branching strategies (GitFlow, trunk-based)',
      'Merge vs rebase strategies',
      'Pull requests and code reviews',
      'GitHub/GitLab CI integration',
      'Repository management best practices',
    ],
  },
  {
    title: 'Containers & Orchestration',
    topics: [
      'Docker fundamentals and image creation',
      'Multi-stage builds and optimization',
      'Docker Compose for local development',
      'Kubernetes architecture and components',
      'Deployments, Services, and Ingress',
      'ConfigMaps, Secrets, and Volumes',
      'Helm charts and package management',
    ],
  },
  {
    title: 'Infrastructure as Code',
    topics: [
      'Terraform configuration language (HCL)',
      'Resource and data source management',
      'Terraform modules for reusability',
      'State management and locking',
      'Workspaces for multi-environment',
      'Variables, outputs, and locals',
      'Best practices and code organization',
    ],
  },
  {
    title: 'CI/CD Pipelines',
    topics: [
      'Jenkins pipeline as code (Jenkinsfile)',
      'Build automation with Maven',
      'Code quality gates with SonarQube',
      'Automated testing integration',
      'Blue-green deployment strategy',
      'Canary and rolling deployments',
      'Pipeline optimization and best practices',
    ],
  },
  {
    title: 'Monitoring & Observability',
    topics: [
      'Metrics collection and analysis',
      'Log aggregation and parsing',
      'Distributed tracing concepts',
      'Dashboard creation and KPIs',
      'Alert configuration and management',
      'SLIs, SLOs, and SLAs',
      'Incident response workflows',
    ],
  },
];

export function TrainingSection() {
  return (
    <section id="training" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">Training & Learning Highlights</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive learning path focused on practical DevOps skills and implementations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingAreas.map((area, idx) => (
            <Card key={area.title} className="rounded-2xl border-2 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    {idx + 1}
                  </div>
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
