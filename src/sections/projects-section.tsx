import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const companyLogos: Record<string, string> = {
  'Rayna Group': '/rayna-tours.png',
  HCLTech: '/hcltech.png',
};

const companyUrls: Record<string, string> = {
  'Rayna Group': 'https://www.raynatours.com/',
  HCLTech: 'https://www.hcltech.com/',
};

const projects = [
  {
    title: 'Automated CI/CD Delivery Platform on AWS',
    company: 'Rayna Group',
    problem:
      'Multiple services needed a standardized, secure release process to eliminate manual deployment errors and hardcoded credentials.',
    architecture:
      'Designed a fully automated GitHub Actions pipeline — build, test, Dockerization, ECR image management, and rolling ECS Fargate releases — standardizing deployments across multiple services. Implemented OIDC-based authentication and SSM-managed secrets, eliminating all hardcoded credentials and hardening the delivery workflow.',
    tools: ['GitHub Actions', 'Docker', 'Amazon ECR', 'ECS Fargate', 'OIDC', 'SSM Parameter Store'],
    outcome: '40% faster release cycles and a repeatable, low-error deployment process across all environments.',
  },
  {
    title: 'Terraform-Driven Infrastructure & Observability',
    company: 'Rayna Group',
    problem:
      'Manual, inconsistent AWS provisioning across dev, staging, and production slowed delivery and increased configuration drift risk.',
    architecture:
      'Codified the full AWS footprint (EC2, ECS Fargate, ALB, RDS, S3, VPC, Auto Scaling) as reusable Terraform modules with remote state for consistent multi-environment provisioning. Built CloudWatch dashboards, SNS alerting, and traffic/CPU-based auto-scaling policies.',
    tools: ['Terraform', 'VPC', 'ECS Fargate', 'ALB', 'RDS', 'CloudWatch', 'SNS'],
    outcome:
      'Sustained 3x traffic spikes with zero manual intervention, a 35% reduction in MTTD, and improved cost efficiency through right-sized infrastructure.',
  },
  {
    title: 'Multi-Cloud Operations',
    company: 'HCLTech',
    problem: 'Enterprise clients needed reliable AWS and Azure operations with strict SLA-bound incident response.',
    architecture:
      'Operated AWS and Azure environments end-to-end, automating Azure VM provisioning via ARM templates and Azure CLI, and managing VNet, NSG, VPN Gateway, and Load Balancer networking across regions for 10+ client environments.',
    tools: ['AWS', 'Azure', 'ARM Templates', 'Azure CLI', 'VNet', 'NSG', 'VPN Gateway'],
    outcome:
      'Reduced onboarding time from 2 days to under 2 hours, resolved P1/P2 incidents in under 45 minutes on average, and maintained 99.9%+ production uptime.',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">Key Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Production infrastructure and delivery platforms built across AWS and Azure
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="rounded-2xl border-2 hover:shadow-xl hover:-translate-y-1 hover:border-rose-200 transition-all"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {companyUrls[project.company] ? (
                    <a
                      href={companyUrls[project.company]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 shrink-0 transition-all hover:shadow-sm hover:border-rose-300 hover:scale-105"
                    >
                      <img
                        src={companyLogos[project.company]}
                        alt={`${project.company} logo`}
                        className="h-4 w-auto object-contain"
                      />
                      <span className="text-xs text-gray-600 whitespace-nowrap">{project.company}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 shrink-0">
                      <img
                        src={companyLogos[project.company]}
                        alt={`${project.company} logo`}
                        className="h-4 w-auto object-contain"
                      />
                      <span className="text-xs text-gray-600 whitespace-nowrap">{project.company}</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Problem Statement</h4>
                  <p className="text-gray-700">{project.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Architecture Overview</h4>
                  <p className="text-gray-700">{project.architecture}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Tools & Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="rounded-lg">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Outcome</h4>
                  <p className="text-gray-700">{project.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
