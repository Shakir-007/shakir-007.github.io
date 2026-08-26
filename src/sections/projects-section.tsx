import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { GithubIcon } from '../components/icons';

const projects = [
  {
    title: 'Linux System Automation',
    problem:
      'Manual system administration tasks were time-consuming and error-prone, requiring automated solutions for user management, backups, and monitoring.',
    architecture:
      'Developed Bash scripts with cron jobs for scheduled tasks, log rotation, and system health monitoring. Implemented automated backup solutions and user provisioning workflows.',
    tools: ['Linux', 'Bash', 'Cron', 'Shell Scripting', 'Log Management'],
    outcome:
      'Reduced manual intervention by 80%, automated daily backups, and created reusable scripts for system administration tasks.',
    github: '#',
  },
  {
    title: 'Multi-Tier AWS Application Deployment',
    problem:
      'Need to deploy a scalable three-tier web application with proper network segmentation, security, and high availability.',
    architecture:
      'Designed VPC with public and private subnets across multiple AZs. Deployed web servers in public subnets, application servers in private subnets, and RDS database with Multi-AZ failover. Configured ALB, Auto Scaling, and CloudWatch monitoring.',
    tools: ['AWS EC2', 'VPC', 'RDS', 'ELB', 'Auto Scaling', 'CloudWatch', 'IAM', 'Route 53'],
    outcome:
      'Successfully deployed highly available application with 99.9% uptime, automatic scaling based on demand, and comprehensive monitoring.',
    github: '#',
  },
  {
    title: 'Static Website with S3 & CloudFront',
    problem: 'Host a high-performance static website with global CDN distribution and HTTPS support.',
    architecture:
      'Configured S3 bucket for static website hosting with proper bucket policies. Set up CloudFront distribution for global content delivery, SSL certificate via ACM, and Route 53 for DNS management.',
    tools: ['AWS S3', 'CloudFront', 'Route 53', 'ACM', 'IAM'],
    outcome: 'Achieved sub-second load times globally, reduced hosting costs by 60%, and implemented secure HTTPS delivery.',
    github: '#',
  },
  {
    title: 'Dockerized Application',
    problem: 'Application had inconsistent behavior across development and production environments due to dependency mismatches.',
    architecture:
      'Created multi-stage Dockerfiles for optimized image sizes. Implemented Docker Compose for local development with multiple services (web, database, cache). Set up Docker networking and volume management for data persistence.',
    tools: ['Docker', 'Docker Compose', 'Multi-stage Builds', 'Docker Hub'],
    outcome:
      "Eliminated 'works on my machine' issues, reduced deployment time by 70%, and decreased image size by 60% using multi-stage builds.",
    github: '#',
  },
  {
    title: 'Kubernetes & EKS Deployment',
    problem: 'Need to orchestrate containerized applications with automatic scaling, self-healing, and zero-downtime deployments.',
    architecture:
      'Deployed applications on AWS EKS cluster with properly configured worker nodes. Implemented Kubernetes deployments, services, ingress controllers, ConfigMaps, and Secrets. Set up Horizontal Pod Autoscaling and rolling updates.',
    tools: ['Kubernetes', 'AWS EKS', 'kubectl', 'Helm', 'Ingress Controller', 'HPA'],
    outcome:
      'Achieved zero-downtime deployments, automatic pod scaling based on CPU/memory metrics, and improved resource utilization by 40%.',
    github: '#',
  },
  {
    title: 'Terraform Infrastructure Automation',
    problem: 'Manual infrastructure provisioning was slow, inconsistent, and difficult to replicate across environments.',
    architecture:
      'Developed Terraform modules for reusable infrastructure components. Implemented remote state management with S3 and DynamoDB locking. Created separate workspaces for dev, staging, and production environments with environment-specific variables.',
    tools: ['Terraform', 'AWS', 'Terraform Modules', 'Remote State', 'Workspaces', 'Variables'],
    outcome:
      'Reduced infrastructure provisioning time from hours to minutes, ensured consistency across environments, and enabled infrastructure version control.',
    github: '#',
  },
  {
    title: 'Jenkins CI/CD Pipeline',
    problem: 'Manual build, test, and deployment processes caused delays and increased the risk of human error.',
    architecture:
      'Built Jenkins pipelines with stages for code checkout, build (Maven), code quality analysis (SonarQube), Docker image creation, and deployment. Implemented blue-green, canary, and rolling deployment strategies for different applications.',
    tools: ['Jenkins', 'Maven', 'SonarQube', 'Docker', 'Git', 'Deployment Strategies'],
    outcome: 'Automated entire software delivery pipeline, reduced deployment time from 2 hours to 15 minutes, and caught code quality issues early.',
    github: '#',
  },
  {
    title: 'Monitoring & Alerting with Datadog',
    problem: 'Lack of visibility into application performance and infrastructure health led to reactive problem-solving.',
    architecture:
      'Integrated Datadog agents across infrastructure for metric collection. Created custom dashboards for application performance, infrastructure health, and business KPIs. Set up intelligent alerts with proper thresholds and notification channels.',
    tools: ['Datadog', 'Custom Metrics', 'APM', 'Dashboards', 'Alerts', 'Log Management'],
    outcome: 'Reduced MTTR by 60%, proactive issue detection before user impact, and comprehensive visibility across the entire stack.',
    github: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hands-on projects demonstrating DevOps practices, cloud infrastructure, and automation
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="rounded-2xl border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
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

                <div className="pt-4">
                  <Button variant="outline" className="rounded-xl" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
