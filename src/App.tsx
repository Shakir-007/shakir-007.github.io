import { HeroSection } from './sections/hero-section';
import { AboutSection } from './sections/about-section';
import { SkillsSection } from './sections/skills-section';
import { ProjectsSection } from './sections/projects-section';
import { ArchitectureSection } from './sections/architecture-section';
import { TrainingSection } from './sections/training-section';
import { CertificationsSection } from './sections/certifications-section';
import { BlogSection } from './sections/blog-section';
import { ContactSection } from './sections/contact-section';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ArchitectureSection />
      <TrainingSection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
