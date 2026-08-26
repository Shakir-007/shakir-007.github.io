import { Card, CardContent } from '../components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">About Me</h2>

        <Card className="rounded-2xl border-2">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a DevOps Engineer with strong fundamentals in cloud infrastructure, automation,
                and continuous delivery. My approach centers on project-based learning and hands-on
                implementation, building practical solutions that solve real-world problems.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Through focused practice and experimentation, I've developed expertise in Linux system
                administration, AWS cloud services, containerization with Docker and Kubernetes,
                infrastructure as code using Terraform, and building robust CI/CD pipelines with Jenkins.
                I believe in learning by doing — every project is an opportunity to deepen understanding
                and refine best practices.
              </p>

              <p className="text-gray-700 leading-relaxed">
                My toolkit includes Linux, AWS (EC2, VPC, S3, RDS, Lambda, and more), Docker, Kubernetes,
                Terraform, Git, Jenkins, and monitoring solutions like Datadog. I'm passionate about
                automation, scalability, and creating infrastructure that empowers development teams to
                ship faster and more reliably.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
