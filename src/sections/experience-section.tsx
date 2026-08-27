import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

type Stint = { location: string; period: string };

type Job = {
  role: string;
  company: string;
  logo: string;
  url?: string;
  period: string;
  location?: string;
  stints?: Stint[];
  highlights: string[];
};

const experience: Job[] = [
  {
    role: 'Associate Consultant',
    company: 'Infosys',
    logo: '/icons/infosys.svg',
    url: 'https://www.infosys.com/',
    location: 'Hyderabad, TG',
    period: 'Sep 21, 2026 – Present',
    highlights: [],
  },
  {
    role: 'Software Engineer / DevOps Engineer',
    company: 'Rayna Group',
    logo: '/rayna-tours.png',
    url: 'https://www.raynatours.com/',
    location: 'Pune, MH',
    period: 'Mar 20, 2025 – Aug 31, 2026',
    highlights: [
      'Built and maintained end-to-end CI/CD pipelines using GitHub Actions — builds, unit tests, Docker image pushes to AWS ECR, and rolling deployments on ECS Fargate — cutting release cycle time by 40%.',
      'Provisioned scalable AWS infrastructure (EC2, ECS Fargate, ALB, RDS, S3, VPC, Auto Scaling Groups) using reusable Terraform modules, eliminating manual provisioning errors and reducing costs across dev, staging, and production.',
      'Implemented OIDC-based IAM role federation and centralized secrets in SSM Parameter Store, achieving zero hardcoded credentials across all pipelines.',
      'Configured CloudWatch dashboards and SNS alerting for CPU, memory, and error-rate monitoring, reducing MTTD by 35% and improving service reliability.',
      'Authored auto-scaling policies tied to ALB traffic and CPU metrics, sustaining 3x traffic spikes with zero manual intervention.',
      'Containerized .NET and Node.js (Express) microservices with optimized multi-stage Docker builds, standardizing image sizes and improving cold-start performance across services.',
      'Managed Kafka-based event pipelines and SSM Parameter Store configuration for booking APIs, improving message reliability and simplifying environment-specific deployments.',
      'Led deployment standards and reviewed infrastructure changes, mentoring teammates on Terraform, containerization, and secure pipeline practices.',
      'Partnered with frontend and backend teams to streamline build and release of UI (React/Tailwind) and REST API services, reducing handoff friction across the SDLC.',
    ],
  },
  {
    role: 'Cloud Infrastructure Analyst',
    company: 'HCLTech',
    logo: '/hcltech.png',
    url: 'https://www.hcltech.com/',
    period: 'Oct 2022 – Mar 2025',
    stints: [
      { location: 'Noida, UP', period: 'Oct 13, 2022 – Apr 30, 2024' },
      { location: 'Lucknow, UP', period: 'May 1, 2024 – Mar 13, 2025' },
    ],
    highlights: [
      'Resolved P1/P2 cloud incidents across AWS and Azure — networking, security, and compute — maintaining average resolution under 45 minutes against high-availability SLAs.',
      'Automated Azure VM provisioning using ARM templates, Azure CLI, and Bash/PowerShell, cutting onboarding time from 2 days to under 2 hours and reducing configuration drift.',
      'Managed Azure networking (VNet peering, NSGs, VPN Gateways, Load Balancers, Blob Storage) across 10+ client environments, ensuring secure, low-latency cross-region connectivity.',
      'Maintained audit-trail compliance for infrastructure changes via Git-based version control, supporting change management and disaster recovery.',
      'Designed and operated scalable AWS architectures (EC2, ECS, CloudFront, S3, RDS) on Linux for multi-client production workloads at 99.9%+ uptime, improving cost efficiency through right-sizing.',
      'Created operational runbooks and documentation that standardized incident handling and accelerated new team member onboarding.',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">Professional Experience</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          4+ years designing, automating, and operating cloud infrastructure across AWS and Azure
        </p>

        <div className="space-y-8">
          {experience.map((job) => (
            <Card
              key={job.company}
              className="group rounded-2xl border-2 transition-all hover:shadow-lg hover:border-rose-200"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${job.company} website`}
                      className="flex items-center justify-center h-11 rounded-lg bg-white border border-gray-200 shadow-sm shrink-0 px-2 transition-all duration-300 hover:shadow-md hover:border-rose-300 group-hover:scale-110"
                    >
                      <img src={job.logo} alt={`${job.company} logo`} className="h-7 w-auto object-contain" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center h-11 rounded-lg bg-white border border-gray-200 shadow-sm shrink-0 px-2 transition-transform duration-300 group-hover:scale-110">
                      <img src={job.logo} alt={`${job.company} logo`} className="h-7 w-auto object-contain" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <CardTitle className="text-xl">{job.role}</CardTitle>
                      <Badge variant="secondary" className="rounded-lg text-sm shrink-0">
                        {job.period}
                      </Badge>
                    </div>
                    {job.stints ? (
                      <div className="mt-1 space-y-0.5">
                        <p className="text-gray-600">{job.company}</p>
                        {job.stints.map((stint) => (
                          <p key={stint.location} className="text-sm text-gray-500">
                            {stint.location} · {stint.period}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 mt-1">
                        {job.company} · {job.location}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {job.highlights.length > 0 ? (
                  <ul className="space-y-3">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-600 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">Role details coming soon.</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
