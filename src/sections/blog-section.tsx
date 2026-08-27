import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const blogPosts = [
  {
    title: 'terraform-service-task',
    description:
      'Reusable Terraform module for provisioning an ECS service and task definition, ready to plug into a Fargate cluster.',
    category: 'Terraform',
    tags: ['Terraform', 'ECS', 'IaC'],
    href: 'https://github.com/TechnoHeavenTechnology/terraform-service-task',
  },
  {
    title: 'terraform-multi-container-service',
    description:
      'Terraform module for a multi-container ECS service definition — sidecar containers, shared networking, and task-level configuration.',
    category: 'Terraform',
    tags: ['Terraform', 'ECS Fargate', 'IaC'],
    href: 'https://github.com/TechnoHeavenTechnology/terraform-multi-container-service',
  },
  {
    title: 'terraform-external-alb',
    description: 'Terraform module for provisioning an internet-facing Application Load Balancer with listeners and target groups.',
    category: 'Terraform',
    tags: ['Terraform', 'ALB', 'Networking'],
    href: 'https://github.com/TechnoHeavenTechnology/terraform-external-alb',
  },
  {
    title: 'Eliminating Long-Lived AWS Keys: OIDC Federation with GitHub Actions',
    description:
      'How to replace static AWS access keys in CI/CD with short-lived credentials using OIDC federation between GitHub Actions and IAM roles.',
    category: 'CI/CD',
    tags: ['GitHub Actions', 'OIDC', 'IAM'],
  },
  {
    title: 'Terraform Remote State & Modules for Multi-Environment AWS',
    description:
      'Structuring reusable Terraform modules with remote state and locking to provision consistent dev, staging, and production environments.',
    category: 'Terraform',
    tags: ['Terraform', 'IaC', 'State Management'],
  },
  {
    title: 'Zero-Downtime Rolling Deployments on ECS Fargate',
    description:
      'Configuring rolling deployments, health checks, and multi-stage Docker builds for reliable, zero-downtime releases on ECS Fargate.',
    category: 'Containers',
    tags: ['ECS Fargate', 'Docker', 'CI/CD'],
  },
  {
    title: 'Right-Sizing Auto Scaling Policies for Traffic Spikes',
    description:
      'Designing ALB and CPU-based Auto Scaling policies that absorb 3x traffic spikes without manual intervention or overprovisioning cost.',
    category: 'AWS',
    tags: ['AWS', 'Auto Scaling', 'Cost Optimization'],
  },
  {
    title: 'Azure VM Provisioning at Scale with ARM Templates & Azure CLI',
    description:
      'Automating VM provisioning and networking across client environments to cut onboarding time from days to hours.',
    category: 'Azure',
    tags: ['Azure', 'ARM Templates', 'Automation'],
  },
  {
    title: 'CloudWatch, Prometheus, and Grafana: Dashboards That Get Used',
    description:
      'Practical patterns for alerting thresholds and dashboard design that reduce MTTD instead of adding noise.',
    category: 'Monitoring',
    tags: ['CloudWatch', 'Prometheus', 'Grafana'],
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-20 py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">DevOps Learnings & Notes</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Documented learnings, troubleshooting guides, and best practices from hands-on experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.title}
              className="rounded-2xl border-2 hover:shadow-lg hover:-translate-y-1 hover:border-rose-200 transition-all group"
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-rose-600" />
                  <span className="text-sm text-rose-600 uppercase tracking-wide">{post.category}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-rose-600 transition-colors">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-lg text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {post.href ? (
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 active:bg-rose-100"
                    asChild
                  >
                    <a href={post.href} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 active:bg-rose-100"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
