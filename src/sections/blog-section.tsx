import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const blogPosts = [
  {
    title: 'Essential Linux Commands Every DevOps Engineer Should Know',
    description:
      'A comprehensive guide to the most useful Linux commands for daily DevOps tasks, including file management, process monitoring, and system administration.',
    category: 'Linux',
    tags: ['Linux', 'Shell', 'Best Practices'],
  },
  {
    title: 'Debugging Kubernetes Pod Failures: A Step-by-Step Guide',
    description:
      'Common Kubernetes pod issues and how to troubleshoot them using kubectl commands, logs analysis, and debugging techniques.',
    category: 'Kubernetes',
    tags: ['Kubernetes', 'Troubleshooting', 'DevOps'],
  },
  {
    title: 'AWS VPC Best Practices for Multi-Tier Applications',
    description:
      'Design patterns and security best practices for creating VPCs with proper subnet segmentation, routing, and security groups.',
    category: 'AWS',
    tags: ['AWS', 'VPC', 'Networking', 'Security'],
  },
  {
    title: 'Optimizing Docker Images: From 1GB to 100MB',
    description: 'Practical techniques for reducing Docker image sizes using multi-stage builds, Alpine base images, and layer optimization.',
    category: 'Docker',
    tags: ['Docker', 'Optimization', 'Best Practices'],
  },
  {
    title: 'Terraform State Management: Remote Backends and Locking',
    description:
      'Understanding Terraform state files, implementing remote backends with S3, and preventing state corruption with DynamoDB locking.',
    category: 'Terraform',
    tags: ['Terraform', 'IaC', 'State Management'],
  },
  {
    title: 'Building Resilient CI/CD Pipelines with Jenkins',
    description: 'Best practices for creating reliable Jenkins pipelines with proper error handling, retry logic, and notification strategies.',
    category: 'CI/CD',
    tags: ['Jenkins', 'CI/CD', 'Automation'],
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">DevOps Learnings & Notes</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Documented learnings, troubleshooting guides, and best practices from hands-on experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.title} className="rounded-2xl border-2 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-blue-600 uppercase tracking-wide">{post.category}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{post.title}</CardTitle>
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

                <Button variant="ghost" className="w-full rounded-xl group-hover:bg-blue-50">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
