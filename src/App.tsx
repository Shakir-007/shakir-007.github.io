import { Navbar } from './components/navbar';
import { HeroSection } from './sections/hero-section';
import { AboutSection } from './sections/about-section';
import { ExperienceSection } from './sections/experience-section';
import { ProjectsSection } from './sections/projects-section';
import { ArchitectureSection } from './sections/architecture-section';
import { SkillsSection } from './sections/skills-section';
import { EducationSection } from './sections/education-section';
import { CertificationsSection } from './sections/certifications-section';
import { DocumentsSection } from './sections/documents-section';
import { BlogSection } from './sections/blog-section';
import { ContactSection } from './sections/contact-section';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ArchitectureSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <DocumentsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
