import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, FolderKanban, Network, Code2, GraduationCap, Award, FileText, Mail } from 'lucide-react';
import { useScrollProgress } from '../hooks/use-scroll-progress';
import { useActiveSection } from '../hooks/use-active-section';
import { useIsScrolled } from '../hooks/use-is-scrolled';
import { AnimatedName } from './animated-name';

const navLinks = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: FolderKanban },
  { label: 'Architecture', href: '#architecture', icon: Network },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'Documents', href: '#documents', icon: FileText },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const activeId = useActiveSection(sectionIds);
  const scrolled = useIsScrolled();

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-amber-50/90 via-white/90 to-rose-50/90 border-rose-100 shadow-sm'
          : 'bg-white/90 border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="relative inline-grid whitespace-nowrap font-['Dancing_Script'] font-bold text-2xl transition-transform hover:scale-110"
          onClick={() => setOpen(false)}
        >
          <AnimatedName />
        </a>

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-1.5 whitespace-nowrap text-sm rounded-lg px-2 py-2 xl:px-2.5 transition-all hover:scale-110 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-amber-500 after:to-rose-600 after:transition-all after:duration-300 hover:after:w-4/5 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-100 to-rose-100 text-rose-700 font-semibold shadow-sm after:w-4/5'
                    : scrolled
                    ? 'text-gray-900 hover:text-rose-700 after:w-0'
                    : 'text-gray-600 hover:text-rose-600 after:w-0'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className={`lg:hidden p-2 rounded-lg hover:bg-rose-50 hover:text-rose-600 transition-colors ${
            scrolled ? 'text-gray-900' : 'text-gray-700'
          }`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-rose-100 bg-white/95 backdrop-blur px-4 sm:px-6 py-3 flex flex-col max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-100 to-rose-100 text-rose-700 font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50 hover:translate-x-1'
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </nav>
      )}

      <div className="h-[3px] w-full bg-gray-100 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-rose-600"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
