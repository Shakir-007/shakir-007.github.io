import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const architectures = [
  {
    title: 'Three-Tier AWS Architecture',
    description: 'Highly available multi-tier application with load balancing and auto-scaling',
    components: [
      'Route 53 → CloudFront → ALB',
      'Web Tier: EC2 instances in public subnets',
      'App Tier: EC2 instances in private subnets',
      'Data Tier: RDS Multi-AZ with read replicas',
      'Auto Scaling Groups for web and app tiers',
      'NAT Gateway for private subnet internet access',
      'S3 for static assets and backups',
    ],
  },
  {
    title: 'Kubernetes Cluster Architecture',
    description: 'Container orchestration with EKS for scalable microservices',
    components: [
      'AWS EKS Control Plane (managed)',
      'Worker Nodes in private subnets',
      'Ingress Controller (ALB/NGINX)',
      'Horizontal Pod Autoscaler (HPA)',
      'Persistent Volumes with EBS/EFS',
      'Secrets and ConfigMaps for configuration',
      'Service mesh for inter-service communication',
    ],
  },
  {
    title: 'CI/CD Pipeline Architecture',
    description: 'Automated build, test, and deployment workflow',
    components: [
      'Git Repository (GitHub/GitLab) → Webhook trigger',
      'Jenkins: Build, test, code quality scan',
      'Maven: Dependency management and build',
      'SonarQube: Code quality and security analysis',
      'Docker: Container image creation',
      'Image registry (ECR/Docker Hub)',
      'Deployment to K8s/ECS with rolling updates',
    ],
  },
  {
    title: 'Monitoring & Observability',
    description: 'Full-stack monitoring with Datadog for metrics, logs, and traces',
    components: [
      'Datadog agents on all infrastructure',
      'Application Performance Monitoring (APM)',
      'Infrastructure metrics and logs',
      'Custom dashboards for KPIs',
      'Alert rules and notification channels',
      'Log aggregation and analysis',
      'Distributed tracing for microservices',
    ],
  },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">Architecture Diagrams</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Clean, interview-ready architecture patterns for AWS and Kubernetes deployments
        </p>

        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto">
            {architectures.map((arch, idx) => (
              <TabsTrigger key={arch.title} value={idx.toString()} className="rounded-xl py-3 px-4 text-sm">
                {arch.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {architectures.map((arch, idx) => (
            <TabsContent key={arch.title} value={idx.toString()}>
              <Card className="rounded-2xl border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">{arch.title}</CardTitle>
                  <p className="text-gray-600">{arch.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 min-h-[400px] flex flex-col justify-center">
                    <div className="space-y-3">
                      <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">Architecture Components:</p>
                      {arch.components.map((component) => (
                        <div
                          key={component}
                          className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                          <span className="text-gray-700">{component}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-6 text-center italic">
                      Visual diagram placeholder — swap in your real AWS/Kubernetes architecture diagrams here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
