import { Card, CardContent } from '../components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">About Me</h2>

        <Card className="rounded-2xl border-2">
          <CardContent className="p-6 sm:p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                DevOps Engineer with 4+ years of experience designing, automating, and operating cloud infrastructure and
                CI/CD pipelines across AWS and Azure. Specialized in Infrastructure as Code (IaC), container orchestration,
                site reliability engineering (SRE), and end-to-end release automation for production-grade, high-availability
                systems.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Microsoft Certified Azure Administrator (AZ-104) with a proven record of accelerating deployments,
                strengthening pipeline security, improving observability, and reducing infrastructure cost. My toolkit
                centers on Terraform, Docker, Amazon ECS Fargate, GitHub Actions, and monitoring with CloudWatch,
                Prometheus, and Grafana — with hands-on experience across AWS and Azure networking, security, and
                compute services.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Known for owning systems end-to-end, mentoring teammates, and collaborating across engineering,
                frontend, and backend teams to deliver reliable software at scale.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
