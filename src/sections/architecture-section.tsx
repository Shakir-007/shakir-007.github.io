import { useLayoutEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowRight, ArrowDown } from 'lucide-react';

const architectures = [
  {
    title: 'Production Architecture',
    description: 'Containerized services on ECS Fargate behind an ALB, backed by RDS, Redis, MSK, and DynamoDB, provisioned entirely through Terraform.',
    flow: ['Route 53', 'CloudFront', 'ALB', 'ECS Fargate', ['RDS', 'Redis', 'MSK', 'DynamoDB']],
    network: true,
    components: [
      'Route 53 → CloudFront → ALB',
      'ECS Fargate services in private subnets across multiple AZs',
      'Amazon ECR for container image storage',
      'RDS (Multi-AZ) for relational data',
      'ElastiCache Redis for caching',
      'Amazon MSK for event-driven communication',
      'DynamoDB for supporting application data',
      'Auto Scaling tied to ALB traffic and CPU metrics',
      'VPC with public/private subnet segmentation and NAT Gateway',
    ],
  },
  {
    title: 'CI/CD Pipeline',
    description: 'Automated build, test, and deployment workflow authenticating to AWS with zero hardcoded credentials.',
    flow: ['GitHub', 'GitHub Actions', 'OIDC', 'AWS IAM', 'ECR', 'ECS'],
    components: [
      'Git push / PR → GitHub Actions workflow trigger',
      'Build & unit test stage',
      'Multi-stage Docker image build',
      'OIDC federation → temporary AWS IAM role (no long-lived keys)',
      'Push image to Amazon ECR',
      'Rolling deployment to ECS Fargate',
      'Secrets sourced from SSM Parameter Store',
    ],
  },
  {
    title: 'Azure Networking',
    description: 'Multi-region Azure networking supporting secure, low-latency connectivity across 10+ client environments.',
    flow: null,
    components: [
      'VNet peering across regions',
      'Network Security Groups (NSGs) for traffic segmentation',
      'VPN Gateway for secure site-to-site connectivity',
      'Azure Load Balancer for traffic distribution',
      'Blob Storage for object storage',
      'Azure AD for identity and access management',
      'ARM templates and Azure CLI for provisioning automation',
    ],
  },
  {
    title: 'Monitoring & Observability',
    description: 'Full-stack monitoring across AWS and Azure for metrics, logs, and alerting.',
    flow: null,
    components: [
      'CloudWatch dashboards for CPU, memory, and error-rate metrics',
      'CloudTrail for audit logging',
      'Prometheus for metrics collection',
      'Grafana dashboards for visualization',
      'SNS alerting tied to CloudWatch alarms',
      'SLO/SLA tracking for reliability targets',
      'Incident response runbooks for P1/P2 issues',
    ],
  },
];

const FLOW_STAGGER_SECONDS = 0.3;
const NETWORK_STAGGER_SECONDS = 0.25;

// Sequence index for each node — determines when it lights up. Tiers progress in order
// (Edge -> Load Balancer -> Compute -> Data), but within a tier both AZs share the same
// index so they light up together: the ALB and ECS Fargate tasks are deployed redundantly
// in parallel across AZ-A and AZ-B (a single request only ever traverses one AZ end-to-end,
// but the infrastructure itself is live in both simultaneously, which is what this represents).
// Nodes not on the primary request path (e.g. NAT Gateway) are left out and stay static.
const networkSequence = {
  users: 0,
  route53: 1,
  cloudfront: 2,
  albA: 3,
  albB: 3,
  ecsA: 4,
  ecsB: 4,
  rds: 5,
  redis: 6,
  msk: 7,
  dynamodb: 8,
  ecr: 9,
};

function NetworkNode({
  label,
  className = '',
  sequenceIndex,
}: {
  label: string;
  className?: string;
  sequenceIndex?: number;
}) {
  const animated = sequenceIndex !== undefined;
  return (
    <span
      className={`inline-block text-xs sm:text-sm bg-white rounded-lg border border-gray-300 px-2.5 py-1.5 text-center shadow-sm transition-all hover:border-rose-300 hover:shadow-md ${
        animated ? 'animate-[node-glow_4.3s_ease-in-out_infinite]' : ''
      } ${className}`}
      style={animated ? { animationDelay: `${sequenceIndex * NETWORK_STAGGER_SECONDS}s` } : undefined}
    >
      {label}
    </span>
  );
}

function NetworkDiagram() {
  return (
    <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-3 sm:p-8 mb-6">
      <p className="text-gray-500 text-sm uppercase tracking-wide mb-4 text-center">Network Topology</p>

      {/* Edge */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
        <NetworkNode label="Users" className="bg-gray-100" sequenceIndex={networkSequence.users} />
        <ArrowRight className="h-4 w-4 text-rose-500 shrink-0" />
        <NetworkNode label="Route 53" sequenceIndex={networkSequence.route53} />
        <ArrowRight className="h-4 w-4 text-rose-500 shrink-0" />
        <NetworkNode label="CloudFront" sequenceIndex={networkSequence.cloudfront} />
      </div>

      <div className="flex justify-center mb-3">
        <div className="h-6 w-0.5 bg-gray-300" />
      </div>

      {/* VPC */}
      <div className="rounded-2xl border-2 border-dashed border-rose-300 p-2 sm:p-5">
        <p className="text-xs uppercase tracking-wide text-rose-500 mb-3 text-center">VPC</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(
            [
              { az: 'Availability Zone A', alb: networkSequence.albA, ecs: networkSequence.ecsA },
              { az: 'Availability Zone B', alb: networkSequence.albB, ecs: networkSequence.ecsB },
            ] as const
          ).map(({ az, alb, ecs }) => (
            <div key={az} className="rounded-xl border-2 border-gray-200 bg-gray-50 p-2 sm:p-3">
              <p className="text-xs font-medium text-gray-500 mb-2 text-center">{az}</p>

              <div className="rounded-lg border border-amber-300 bg-amber-50 p-2 mb-2">
                <p className="text-[10px] uppercase tracking-wide text-amber-700 mb-1.5 text-center">Public Subnet</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  <NetworkNode label="ALB" className="bg-amber-100/60" sequenceIndex={alb} />
                  <NetworkNode label="NAT Gateway" className="bg-amber-100/60" />
                </div>
              </div>

              <div className="rounded-lg border border-rose-200 bg-rose-50 p-2">
                <p className="text-[10px] uppercase tracking-wide text-rose-700 mb-1.5 text-center">Private Subnet</p>
                <div className="flex justify-center">
                  <NetworkNode label="ECS Fargate Tasks" className="bg-rose-100/60" sequenceIndex={ecs} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-3">
        <div className="h-6 w-0.5 bg-gray-300" />
      </div>

      {/* Data layer + registry */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-3">
          <p className="text-[10px] uppercase tracking-wide text-gray-500 mb-1.5 text-center">Data & Messaging</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            <NetworkNode label="RDS (Multi-AZ)" sequenceIndex={networkSequence.rds} />
            <NetworkNode label="ElastiCache Redis" sequenceIndex={networkSequence.redis} />
            <NetworkNode label="Amazon MSK" sequenceIndex={networkSequence.msk} />
            <NetworkNode label="DynamoDB" sequenceIndex={networkSequence.dynamodb} />
          </div>
        </div>
        <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-3">
          <p className="text-[10px] uppercase tracking-wide text-gray-500 mb-1.5 text-center">Registry</p>
          <NetworkNode label="Amazon ECR" sequenceIndex={networkSequence.ecr} />
        </div>
      </div>
    </div>
  );
}

function FlowDiagram({ steps }: { steps: (string | string[])[] }) {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white rounded-xl border-2 border-dashed border-gray-300 p-3 sm:p-8 mb-6">
      {steps.map((step, idx) => {
        const delay = `${idx * FLOW_STAGGER_SECONDS}s`;
        return (
          <div
            key={Array.isArray(step) ? step.join('-') : step}
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3"
          >
            {Array.isArray(step) ? (
              <div
                className="grid grid-cols-2 gap-1.5 p-2 sm:p-3 rounded-xl border-2 border-amber-300 bg-amber-50 animate-[node-light-amber_3.2s_ease-in-out_infinite]"
                style={{ animationDelay: delay }}
              >
                {step.map((s) => (
                  <span
                    key={s}
                    className="text-xs md:text-sm text-rose-800 bg-white rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 border border-amber-200 text-center"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : (
              <span
                className="text-xs sm:text-sm md:text-base text-gray-800 bg-white rounded-xl border-2 border-gray-300 px-3 py-2 sm:px-4 sm:py-3 shadow-sm animate-[node-light_3.2s_ease-in-out_infinite]"
                style={{ animationDelay: delay }}
              >
                {step}
              </span>
            )}
            {idx < steps.length - 1 && (
              <>
                <ArrowDown className="h-4 w-4 text-rose-500 shrink-0 sm:hidden" />
                <ArrowRight className="hidden sm:block h-5 w-5 text-rose-500 shrink-0" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function ArchitectureSection() {
  // A plain (non-sticky) marker just above the sticky TabsList — scrollIntoView on the
  // sticky element itself is a no-op once it's already docked, since its rendered position
  // never changes. This marker always reports its true document position, so scrolling to
  // it reliably lands the tab content at the top every time, from wherever you're scrolled.
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const [activeTab, setActiveTab] = useState('0');

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollAnchorRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
  }, [activeTab]);

  return (
    <section id="architecture" className="scroll-mt-20 py-16 px-6 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">AWS Architecture & Infrastructure</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Production patterns from real AWS and Azure infrastructure work
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div ref={scrollAnchorRef} className="scroll-mt-16" />
          <TabsList className="sticky top-16 z-30 grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto gap-1 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80 p-1.5 rounded-xl shadow-sm">
            {architectures.map((arch, idx) => (
              <TabsTrigger
                key={arch.title}
                value={idx.toString()}
                className="rounded-xl py-2.5 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm leading-tight text-center transition-colors hover:bg-rose-50 hover:text-rose-700 data-[state=active]:bg-rose-100 data-[state=active]:text-rose-700 data-[state=active]:shadow-sm data-[state=active]:hover:bg-rose-100 data-[state=active]:hover:text-rose-700"
              >
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
                  {arch.flow && <FlowDiagram steps={arch.flow} />}
                  {arch.network && <NetworkDiagram />}
                  <div className="bg-white rounded-xl border-2 border-gray-200 p-4 sm:p-8">
                    <div className="space-y-3">
                      <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">Architecture Components:</p>
                      {arch.components.map((component) => (
                        <div
                          key={component}
                          className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200 transition-colors hover:bg-rose-50 hover:border-rose-200"
                        >
                          <div className="w-2 h-2 rounded-full bg-rose-600" />
                          <span className="text-gray-700">{component}</span>
                        </div>
                      ))}
                    </div>
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
