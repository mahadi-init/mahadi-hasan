import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Portfolio() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Frontend Developer";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Interactive Dashboard UI",
      description:
        "Modern analytics dashboard with real-time data visualization, responsive design, and smooth animations",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gradient: "from-blue-500/20 to-purple-500/20",
      icon: "📊",
      status: "Live",
      year: "2024",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Responsive shopping experience with advanced filtering, cart management, and checkout flow",
      tech: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: "🛒",
      status: "Live",
      year: "2024",
    },
    {
      id: 3,
      title: "Design System Library",
      description:
        "Comprehensive component library with documentation, theming, and accessibility features",
      tech: ["React", "Storybook", "CSS-in-JS", "TypeScript"],
      gradient: "from-pink-500/20 to-rose-500/20",
      icon: "🎨",
      status: "Beta",
      year: "2024",
    },
    {
      id: 4,
      title: "Mobile-First Web App",
      description:
        "Progressive web application with offline capabilities and native-like user experience",
      tech: ["React", "PWA", "Service Workers", "IndexedDB"],
      gradient: "from-cyan-500/20 to-blue-500/20",
      icon: "📱",
      status: "Live",
      year: "2023",
    },
    {
      id: 5,
      title: "Animation Portfolio",
      description:
        "Creative showcase featuring advanced CSS animations, micro-interactions, and scroll-triggered effects",
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      gradient: "from-emerald-500/20 to-teal-500/20",
      icon: "✨",
      status: "Live",
      year: "2023",
    },
    {
      id: 6,
      title: "React Component Playground",
      description:
        "Interactive component testing environment with live code editing and preview capabilities",
      tech: ["React", "Monaco Editor", "Babel", "Webpack"],
      gradient: "from-orange-500/20 to-red-500/20",
      icon: "⚛️",
      status: "Development",
      year: "2024",
    },
  ];

  const experiences = [
    {
      id: 1,
      company: "TechNova Labs",
      position: "Senior Frontend Developer",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description:
        "Leading frontend development of next-generation web applications with focus on user experience and performance optimization. Architecting scalable component systems and implementing modern design patterns.",
      achievements: [
        "Built responsive web apps serving 100K+ users",
        "Improved page load times by 60% through optimization",
        "Led frontend team of 5 developers across 3 products",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 2,
      company: "CyberCore Systems",
      position: "Frontend Developer",
      period: "2021 - 2023",
      location: "Austin, TX",
      description:
        "Developed modern web interfaces for enterprise applications with emphasis on accessibility and cross-browser compatibility. Specialized in component architecture and design system implementation.",
      achievements: [
        "Implemented WCAG 2.1 AA compliant interfaces",
        "Created reusable component library used across 10+ projects",
        "Achieved 98% cross-browser compatibility score",
      ],
      tech: ["React", "Vue.js", "SCSS", "Webpack", "Jest"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      company: "Quantum Dynamics",
      position: "UI/UX Developer",
      period: "2019 - 2021",
      location: "Seattle, WA",
      description:
        "Focused on creating intuitive user interfaces and seamless user experiences. Collaborated closely with design teams to bring creative concepts to life through code.",
      achievements: [
        "Increased user engagement by 45% through UI improvements",
        "Developed interactive prototypes for user testing",
        "Reduced development-to-design handoff time by 50%",
      ],
      tech: ["JavaScript", "CSS3", "Figma", "Sketch", "Adobe XD"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 4,
      company: "StartupLab Inc",
      position: "Junior Frontend Developer",
      period: "2018 - 2019",
      location: "Remote",
      description:
        "Built responsive web applications for early-stage startups. Gained experience in rapid prototyping, modern frameworks, and agile development methodologies.",
      achievements: [
        "Delivered 15+ responsive websites with 95% client satisfaction",
        "Reduced development time by 40% through component reuse",
        "Mentored 3 junior developers in modern frontend practices",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  const skillCategories = [
    {
      id: 1,
      category: "Frontend Frameworks",
      icon: "⚛️",
      gradient: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "React", level: 95, years: "5+" },
        { name: "Next.js", level: 90, years: "4+" },
        { name: "Vue.js", level: 85, years: "3+" },
        { name: "TypeScript", level: 92, years: "4+" },
        { name: "JavaScript ES6+", level: 98, years: "6+" },
        { name: "HTML5", level: 98, years: "6+" },
      ],
    },
    {
      id: 2,
      category: "Styling & Design",
      icon: "🎨",
      gradient: "from-pink-500/20 to-rose-500/20",
      skills: [
        { name: "CSS3", level: 95, years: "6+" },
        { name: "Tailwind CSS", level: 92, years: "3+" },
        { name: "SCSS/Sass", level: 88, years: "4+" },
        { name: "Styled Components", level: 85, years: "3+" },
        { name: "CSS-in-JS", level: 82, years: "2+" },
        { name: "Responsive Design", level: 95, years: "5+" },
      ],
    },
    {
      id: 3,
      category: "Animation & Interaction",
      icon: "✨",
      gradient: "from-purple-500/20 to-pink-500/20",
      skills: [
        { name: "Framer Motion", level: 88, years: "3+" },
        { name: "CSS Animations", level: 92, years: "4+" },
        { name: "GSAP", level: 85, years: "2+" },
        { name: "Lottie", level: 80, years: "2+" },
        { name: "Three.js", level: 75, years: "1+" },
        { name: "Web Animations API", level: 78, years: "2+" },
      ],
    },
    {
      id: 4,
      category: "Development Tools",
      icon: "🔧",
      gradient: "from-green-500/20 to-emerald-500/20",
      skills: [
        { name: "Webpack", level: 85, years: "4+" },
        { name: "Vite", level: 88, years: "2+" },
        { name: "ESLint", level: 90, years: "4+" },
        { name: "Prettier", level: 92, years: "4+" },
        { name: "Git", level: 95, years: "5+" },
        { name: "npm/yarn", level: 90, years: "5+" },
      ],
    },
    {
      id: 5,
      category: "Testing & Quality",
      icon: "🧪",
      gradient: "from-orange-500/20 to-red-500/20",
      skills: [
        { name: "Jest", level: 85, years: "3+" },
        { name: "React Testing Library", level: 88, years: "3+" },
        { name: "Cypress", level: 82, years: "2+" },
        { name: "Playwright", level: 80, years: "2+" },
        { name: "Storybook", level: 85, years: "2+" },
        { name: "Accessibility Testing", level: 88, years: "3+" },
      ],
    },
    {
      id: 6,
      category: "Design & Prototyping",
      icon: "🎯",
      gradient: "from-teal-500/20 to-cyan-500/20",
      skills: [
        { name: "Figma", level: 90, years: "4+" },
        { name: "Adobe XD", level: 85, years: "3+" },
        { name: "Sketch", level: 80, years: "2+" },
        { name: "Photoshop", level: 75, years: "3+" },
        { name: "Illustrator", level: 72, years: "2+" },
        { name: "Prototyping", level: 88, years: "4+" },
      ],
    },
  ];

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Enhanced Floating Navigation */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isNavVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="glassmorphism rounded-full px-8 py-4 glow-purple hover:glow-pink transition-all duration-300">
          <div className="flex items-center gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl -z-10" />
        </div>
      </nav>

      {/* Enhanced Particle Background System */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary Particles - Small dots */}
        {[...Array(80)].map((_, i) => (
          <div
            key={`primary-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Secondary Particles - Medium dots */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`secondary-${i}`}
            className={`absolute w-2 h-2 bg-secondary/60 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        {[...Array(15)].map((_, i) => {
          const shapes = ["◆", "▲", "●", "■", "◇"];
          const shape = shapes[Math.floor(Math.random() * shapes.length)];
          return (
            <div
              key={`shape-${i}`}
              className="absolute text-primary/20 animate-pulse select-none font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${12 + Math.random() * 16}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {shape}
            </div>
          );
        })}

        {/* Interactive Mouse Follower Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`mouse-${i}`}
            className="absolute w-1 h-1 bg-secondary rounded-full transition-all duration-1000 ease-out opacity-60"
            style={{
              left: mousePosition.x + Math.sin(Date.now() * 0.001 + i) * 50,
              top: mousePosition.y + Math.cos(Date.now() * 0.001 + i) * 50,
              transitionDelay: `${i * 100}ms`,
            }}
          />
        ))}

        {/* Connecting Lines Network */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(20)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <line
                key={`line-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke={"url(#gradient)"}
                strokeWidth="0.5"
                opacity="0.3"
                className="animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            );
          })}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.65 0.2 270)" />
              <stop offset="100%" stopColor="oklch(0.55 0.3 330)" />
            </linearGradient>
            <linearGradient
              id="matrixGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00ff00" />
              <stop offset="100%" stopColor="#008800" />
            </linearGradient>
          </defs>
        </svg>

        {/* Orbital Particles around cursor */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`orbital-${i}`}
            className="absolute w-0.5 h-0.5 bg-primary rounded-full"
            style={{
              left:
                mousePosition.x +
                Math.cos(Date.now() * 0.002 + (i * Math.PI) / 3) * 80,
              top:
                mousePosition.y +
                Math.sin(Date.now() * 0.002 + (i * Math.PI) / 3) * 80,
              transition: "all 0.1s ease-out",
            }}
          />
        ))}

        {/* Floating Code Symbols */}
        {[...Array(12)].map((_, i) => {
          const symbols = [
            "{",
            "}",
            "<",
            ">",
            "/",
            "*",
            "+",
            "=",
            ";",
            "(",
            ")",
            "[",
          ];
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];
          return (
            <div
              key={`code-${i}`}
              className="absolute font-mono text-primary/10 animate-pulse select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${10 + Math.random() * 8}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 3}s`,
              }}
            >
              {symbol}
            </div>
          );
        })}

        {/* Glowing Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `radial-gradient(circle, oklch(0.65 0.2 270 / 0.8), transparent)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <div
              className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 glow-purple cursor-pointer hover:scale-105 transition-transform"
              title="Triple-click for a secret!"
            >
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="Developer Portrait"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Typing Animation */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Crafting beautiful, responsive web experiences with modern frontend
            technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-cyberpunk glow-purple hover:scale-105 transition-transform"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-pink hover:scale-105 transition-transform bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Code Rain Effect */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 font-mono text-xs text-primary/30 space-y-1 hidden lg:block">
          {[
            "const developer = {",
            '  name: "Alex Chen",',
            '  role: "Frontend Dev",',
            '  passion: "UI/UX"',
            "};",
          ].map((line, i) => (
            <div
              key={i}
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {line}
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Frontend solutions that deliver exceptional user experiences and
              modern design
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="glassmorphism hover:glow-purple transition-all duration-500 cursor-pointer group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                {/* Project Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : project.status === "Beta"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="p-6">
                  {/* Project Icon and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {project.icon}
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* Interactive Elements */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs border-primary/50 hover:border-primary bg-transparent"
                    >
                      View Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-xs hover:text-primary"
                    >
                      Source Code
                    </Button>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-pink bg-transparent"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Timeline Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Professional Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of frontend development excellence and user experience
              innovation
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: "fadeInUp 0.8s ease-out forwards",
                  }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 glow-purple z-10">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                  </div>

                  {/* Experience Card */}
                  <Card
                    className={`glassmorphism hover:glow-purple transition-all duration-500 cursor-pointer group relative overflow-hidden ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } md:w-5/12 w-full`}
                  >
                    <div className="p-6">
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-1">
                            {exp.company}
                          </h3>
                          <h4 className="text-lg font-semibold mb-2">
                            {exp.position}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="font-mono">{exp.period}</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="w-6 h-6 bg-primary/20 rounded" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold mb-2 text-secondary">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-xs text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded border border-secondary/20 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
                  </Card>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>

            {/* Timeline End Node */}
            <div className="absolute left-8 md:left-1/2 bottom-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background transform md:-translate-x-1/2 glow-pink">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Technical Arsenal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise in modern frontend technologies, design tools, and user
              experience principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.id}
                className="glassmorphism hover:glow-purple transition-all duration-500 cursor-pointer group relative overflow-hidden"
                style={{
                  animationDelay: `${categoryIndex * 150}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
                onMouseEnter={() => setHoveredSkill(category.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {category.category}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.skills.length} Technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground font-mono">
                              {skill.years}
                            </span>
                            <span className="text-xs text-primary font-mono">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Skill Progress Bar */}
                        <div className="w-full bg-muted/20 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width:
                                hoveredSkill === category.id
                                  ? `${skill.level}%`
                                  : "0%",
                              transitionDelay: `${skillIndex * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="glassmorphism p-6 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="glassmorphism p-6 rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-2">
                  25+
                </div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
              <div className="glassmorphism p-6 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">60+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="glassmorphism p-6 rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-2">
                  12+
                </div>
                <div className="text-sm text-muted-foreground">
                  Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Let's Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next
              frontend project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glassmorphism p-6 rounded-lg hover:glow-purple transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-xl">
                    📧
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      alex.chen@example.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="glassmorphism p-6 rounded-lg hover:glow-purple transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-xl">
                    💼
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">LinkedIn</h3>
                    <p className="text-muted-foreground">
                      linkedin.com/in/alexchen
                    </p>
                  </div>
                </div>
              </div>

              <div className="glassmorphism p-6 rounded-lg hover:glow-purple transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-xl">
                    🐙
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">GitHub</h3>
                    <p className="text-muted-foreground">github.com/alexchen</p>
                  </div>
                </div>
              </div>

              <div className="glassmorphism p-6 rounded-lg hover:glow-purple transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-xl">
                    🌐
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Portfolio</h3>
                    <p className="text-muted-foreground">alexchen.dev</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glassmorphism p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-cyberpunk glow-purple hover:scale-105 transition-transform"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glassmorphism p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on new challenges and bring creative
                ideas to life through code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-cyberpunk glow-purple">
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
