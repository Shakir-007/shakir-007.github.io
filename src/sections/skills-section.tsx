import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { TechIcons } from '../components/tech-icons';
import {
  Cloud,
  Workflow,
  FileCode,
  Container,
  Activity,
  Shield,
  Code2,
  Server,
  Network,
  Scale,
  Cpu,
  Boxes,
  Package,
  Database,
  Zap,
  Radio,
  HardDrive,
  Globe,
  Lock,
  ShieldCheck,
  KeyRound,
  GitBranch,
  Layers,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    accent: 'bg-orange-500',
    skills: [
      'AWS: EC2, ECS, Fargate, S3, RDS, ALB, VPC, SSM, CloudFront, Auto Scaling',
      'Azure: VM, VNet, NSG, VPN Gateway, Load Balancer, Blob Storage, Azure AD',
    ],
    color: 'bg-orange-50 border-orange-200',
  },
  {
    title: 'CI/CD & Release',
    icon: Workflow,
    accent: 'bg-indigo-500',
    skills: ['GitHub Actions', 'YAML Pipelines', 'Rolling Deployments', 'Release Management', 'GitOps'],
    color: 'bg-indigo-50 border-indigo-200',
  },
  {
    title: 'Infrastructure as Code',
    icon: FileCode,
    accent: 'bg-purple-500',
    skills: ['Terraform', 'Reusable Modules', 'Remote State Management'],
    color: 'bg-purple-50 border-purple-200',
  },
  {
    title: 'Containers & Orchestration',
    icon: Container,
    accent: 'bg-cyan-500',
    skills: ['Docker', 'Amazon ECS Fargate', 'AWS ECR'],
    color: 'bg-cyan-50 border-cyan-200',
  },
  {
    title: 'Monitoring & Observability',
    icon: Activity,
    accent: 'bg-teal-500',
    skills: ['CloudWatch', 'CloudTrail', 'Prometheus', 'Grafana', 'SNS Alerting', 'SLO/SLA Tracking', 'ServiceNow'],
    color: 'bg-teal-50 border-teal-200',
  },
  {
    title: 'Security & Reliability',
    icon: Shield,
    accent: 'bg-red-500',
    skills: [
      'OIDC Federation',
      'IAM Roles & Policies',
      'SSM Parameter Store',
      'NSGs & VPN',
      'DevSecOps',
      'HA Design & Disaster Recovery',
      'Cost Optimization',
    ],
    color: 'bg-red-50 border-red-200',
  },
  {
    title: 'Languages',
    icon: Code2,
    accent: 'bg-green-500',
    skills: ['Python', 'JavaScript', 'TypeScript', 'React', '.NET', 'Tailwind CSS', 'Express.js'],
    color: 'bg-green-50 border-green-200',
  },
  {
    title: 'OS & Practices',
    icon: Server,
    accent: 'bg-amber-500',
    skills: ['Linux (Ubuntu)', 'Windows Server', 'Git & GitHub', 'Agile/Scrum'],
    color: 'bg-yellow-50 border-yellow-200',
  },
];

// Maps a skill label to a real brand icon when we have one on hand (checked in order, first match wins).
const skillIconMap: [string, string][] = [
  ['github actions', '/icons/github.svg'],
  ['github', '/icons/github.svg'],
  ['git &', '/icons/git.svg'],
  ['aws', '/icons/aws.svg'],
  ['azure', '/icons/azure.svg'],
  ['docker', '/icons/docker.svg'],
  ['terraform', '/icons/terraform.svg'],
  ['python', '/icons/python.svg'],
  ['typescript', '/icons/typescript.svg'],
  ['javascript', '/icons/javascript.svg'],
  ['react', '/icons/react.svg'],
  ['express', '/icons/express.svg'],
  ['tailwind', '/icons/tailwindcss.svg'],
  ['mongodb', '/icons/mongodb.svg'],
  ['linux', '/icons/linux.svg'],
  ['prometheus', '/icons/prometheus.svg'],
  ['grafana', '/icons/grafana.svg'],
  ['servicenow', '/icons/servicenow.svg'],
];

function getSkillIcon(skill: string): string | null {
  const lower = skill.toLowerCase();
  const match = skillIconMap.find(([keyword]) => lower.includes(keyword));
  return match ? match[1] : null;
}

// Maps a "Detailed Toolkit" category title to a representative lucide icon (checked in order, first match wins).
const categoryIconMap: [string, typeof Layers][] = [
  ['load balancing', Scale],
  ['networking', Network],
  ['compute', Cpu],
  ['ecs', Boxes],
  ['ecr', Package],
  ['ec2', Server],
  ['dynamodb', Database],
  ['database', Database],
  ['rds', Database],
  ['elasticache', Zap],
  ['caching', Zap],
  ['msk', Radio],
  ['messaging', Radio],
  ['s3', HardDrive],
  ['storage', HardDrive],
  ['cloudfront', Globe],
  ['route 53', Globe],
  ['dns', Globe],
  ['acm', Lock],
  ['certificates', Lock],
  ['kms', KeyRound],
  ['iam', ShieldCheck],
  ['security', ShieldCheck],
  ['identity', ShieldCheck],
  ['monitoring', Activity],
  ['ci/cd', GitBranch],
  ['devops', GitBranch],
];

function getCategoryIcon(title: string) {
  const lower = title.toLowerCase();
  const match = categoryIconMap.find(([keyword]) => lower.includes(keyword));
  return match ? match[1] : Layers;
}

const awsCategories = [
  { title: 'Compute & Containers', items: ['Amazon ECS', 'AWS Fargate', 'Amazon EC2', 'Amazon ECR', 'Amazon EBS'] },
  {
    title: 'Networking',
    items: [
      'Amazon VPC',
      'Subnets',
      'Route Tables',
      'Internet Gateway',
      'NAT Gateway',
      'VPC Endpoints',
      'Security Groups',
      'AWS Transit Gateway',
      'Application Load Balancer (ALB)',
      'Network Load Balancer (NLB)',
    ],
  },
  {
    title: 'Database & Caching',
    items: ['Amazon RDS', 'SQL Server', 'Amazon DynamoDB', 'Amazon ElastiCache', 'Redis'],
  },
  { title: 'Messaging', items: ['Amazon MSK', 'Apache Kafka'] },
  { title: 'Storage & CDN', items: ['Amazon S3', 'Amazon CloudFront'] },
  { title: 'DNS & Certificates', items: ['Amazon Route 53', 'AWS Certificate Manager (ACM)'] },
  {
    title: 'Security & Identity',
    items: ['AWS IAM', 'IAM Roles & Policies', 'IAM OIDC Federation', 'AWS KMS', 'Security Groups'],
  },
  {
    title: 'Monitoring',
    items: ['Amazon CloudWatch', 'CloudWatch Logs', 'CloudWatch Alarms', 'Prometheus', 'Grafana'],
  },
  {
    title: 'CI/CD & DevOps',
    items: ['GitHub Actions', 'GitHub OIDC → AWS IAM', 'Docker', 'ECR', 'ECS Deployments'],
  },
];

const azureFamiliarity = [
  'Azure Virtual Machines',
  'Azure Virtual Network',
  'Subnets',
  'Network Security Groups',
  'Azure Storage',
  'Azure Blob Storage',
  'Azure Resource Groups',
  'Azure IAM / RBAC',
  'Microsoft Entra ID',
  'Azure Monitor',
  'Azure Load Balancer',
  'Azure DNS',
  'Azure Portal',
  'Azure CLI',
  'Azure PowerShell',
];

const terraformCategories = [
  {
    title: 'Networking',
    items: [
      'aws_vpc',
      'aws_subnet',
      'aws_route_table',
      'aws_route_table_association',
      'aws_internet_gateway',
      'aws_nat_gateway',
      'aws_vpc_endpoint',
      'aws_security_group',
      'aws_network_acl',
      'aws_eip',
      'aws_ec2_transit_gateway',
    ],
  },
  { title: 'Load Balancing', items: ['aws_lb', 'aws_lb_listener', 'aws_lb_listener_rule', 'aws_lb_target_group'] },
  {
    title: 'ECS',
    items: [
      'aws_ecs_cluster',
      'aws_ecs_service',
      'aws_ecs_task_definition',
      'aws_appautoscaling_target',
      'aws_appautoscaling_policy',
    ],
  },
  { title: 'ECR', items: ['aws_ecr_repository', 'ECR lifecycle policies'] },
  { title: 'EC2', items: ['aws_instance', 'aws_launch_template', 'aws_ebs_volume', 'aws_ami'] },
  {
    title: 'RDS',
    items: ['aws_db_instance', 'RDS subnet groups', 'RDS parameter groups', 'RDS security groups'],
  },
  { title: 'DynamoDB', items: ['aws_dynamodb_table'] },
  {
    title: 'ElastiCache',
    items: ['aws_elasticache_cluster', 'aws_elasticache_replication_group', 'subnet groups', 'parameter groups'],
  },
  { title: 'MSK', items: ['aws_msk_cluster', 'MSK networking/security configuration'] },
  {
    title: 'S3',
    items: ['aws_s3_bucket', 'bucket versioning', 'encryption', 'lifecycle configuration', 'bucket policies'],
  },
  {
    title: 'CloudFront',
    items: ['aws_cloudfront_distribution', 'origins', 'cache behaviors', 'CloudFront/S3 integration'],
  },
  { title: 'Route 53', items: ['aws_route53_zone', 'aws_route53_record'] },
  { title: 'ACM', items: ['aws_acm_certificate', 'certificate validation resources'] },
  {
    title: 'IAM',
    items: [
      'aws_iam_role',
      'aws_iam_policy',
      'aws_iam_role_policy',
      'aws_iam_role_policy_attachment',
      'OIDC provider configuration',
    ],
  },
  { title: 'KMS', items: ['aws_kms_key', 'aws_kms_alias'] },
];

const terraformConcepts = [
  'Terraform Modules',
  'Variables',
  'Outputs',
  'Locals',
  'Data Sources',
  'tfvars',
  'Remote State',
  'State Management',
  'Resource Dependencies',
  'Environment-specific Configuration',
  'Reusable Infrastructure Modules',
  'Terraform Plan / Apply',
  'Infrastructure Drift Management',
];

function CategoryGrid({ categories }: { categories: { title: string; items: string[] }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => {
        const Icon = getCategoryIcon(category.title);
        return (
          <Card
            key={category.title}
            className="group rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-rose-200"
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2.5">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-rose-100 text-rose-600 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm uppercase tracking-wide text-gray-500">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="rounded-lg cursor-default border-gray-200 bg-white/70 text-gray-700 transition-all hover:scale-105 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-700"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function SkillsSection() {
  const detailedToolkitRef = useRef<HTMLHeadingElement>(null);

  const handleToolkitTabChange = () => {
    requestAnimationFrame(() => {
      detailedToolkitRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section id="skills" className="scroll-mt-20 py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">Skills</h2>

        <TechIcons />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className={`group rounded-2xl border-2 ${category.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center h-11 w-11 rounded-xl ${category.accent} text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{category.skills.length} skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {category.skills.map((skill) => {
                      const iconSrc = getSkillIcon(skill);
                      const isRow = skill.length > 40;
                      return (
                        <div
                          key={skill}
                          className={
                            isRow
                              ? 'flex items-start gap-2.5 bg-white/70 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-white'
                              : 'inline-flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1.5 text-sm text-gray-700 w-fit transition-colors hover:bg-white hover:text-rose-700'
                          }
                        >
                          {iconSrc ? (
                            <img
                              src={iconSrc}
                              alt=""
                              className={`h-4 w-6 object-contain shrink-0 ${isRow ? 'mt-0.5' : ''}`}
                            />
                          ) : (
                            <span className={`h-1.5 w-1.5 rounded-full bg-rose-600 shrink-0 ${isRow ? 'mt-2' : ''}`} />
                          )}
                          <span>{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <h3 ref={detailedToolkitRef} className="text-4xl mb-2 text-center scroll-mt-24">
          Detailed Toolkit
        </h3>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          The AWS, Azure, and Terraform building blocks behind the projects above
        </p>

        <Tabs defaultValue="aws" className="w-full" onValueChange={handleToolkitTabChange}>
          <TabsList className="sticky top-16 z-30 grid w-full grid-cols-3 mb-8 h-auto bg-gray-50/95 backdrop-blur supports-backdrop-filter:bg-gray-50/80 py-2 shadow-sm">
            <TabsTrigger
              value="aws"
              className="rounded-xl py-2.5 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm gap-1.5 sm:gap-2 transition-all data-[state=active]:scale-[1.02] hover:bg-rose-50 hover:text-rose-700 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-700 data-[state=active]:shadow-sm data-[state=active]:hover:bg-rose-100 data-[state=active]:hover:text-rose-700"
            >
              <img src="/icons/aws.svg" alt="" className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">AWS Services</span>
              <span className="sm:hidden">AWS</span>
            </TabsTrigger>
            <TabsTrigger
              value="azure"
              className="rounded-xl py-2.5 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm gap-1.5 sm:gap-2 transition-all data-[state=active]:scale-[1.02] hover:bg-rose-50 hover:text-rose-700 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-700 data-[state=active]:shadow-sm data-[state=active]:hover:bg-rose-100 data-[state=active]:hover:text-rose-700"
            >
              <img src="/icons/azure.svg" alt="" className="h-4 w-4 shrink-0" />
              Azure
            </TabsTrigger>
            <TabsTrigger
              value="terraform"
              className="rounded-xl py-2.5 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm gap-1.5 sm:gap-2 transition-all data-[state=active]:scale-[1.02] hover:bg-rose-50 hover:text-rose-700 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-700 data-[state=active]:shadow-sm data-[state=active]:hover:bg-rose-100 data-[state=active]:hover:text-rose-700"
            >
              <img src="/icons/terraform.svg" alt="" className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Terraform Resources</span>
              <span className="sm:hidden">Terraform</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="aws">
            <CategoryGrid categories={awsCategories} />
          </TabsContent>

          <TabsContent value="azure">
            <div className="space-y-6">
              <Card className="group rounded-2xl border-2 border-amber-200 bg-amber-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2.5 text-lg">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md">
                      <img src="/icons/azure.svg" alt="" className="h-5 w-5 object-contain" />
                    </div>
                    Azure — Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Azure administration, cloud operations, infrastructure monitoring, networking, compute, storage,
                    identity/access management, and troubleshooting — backed by the Microsoft Certified: Azure
                    Administrator Associate (AZ-104) certification.
                  </p>
                </CardContent>
              </Card>

              <Card className="group rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-rose-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-rose-100 text-rose-600 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md">
                      <Cloud className="h-4 w-4" />
                    </div>
                    <span className="text-sm uppercase tracking-wide text-gray-500">Azure — Familiarity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {azureFamiliarity.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="rounded-lg cursor-default border-gray-200 bg-white/70 text-gray-700 transition-all hover:scale-105 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-700"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="terraform">
            <div className="space-y-6">
              <CategoryGrid categories={terraformCategories} />

              <Card className="group rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-rose-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-rose-100 text-rose-600 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md">
                      <Layers className="h-4 w-4" />
                    </div>
                    <span className="text-sm uppercase tracking-wide text-gray-500">Terraform Concepts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {terraformConcepts.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="rounded-lg cursor-default border-gray-200 bg-white/70 text-gray-700 transition-all hover:scale-105 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-700"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
