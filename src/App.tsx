import React, { useState, useEffect } from "react";
import { PROJECTS, SKILL_CATEGORIES, EDUCATION } from "./data";
import ThreeCanvas from "./components/ThreeCanvas";
import ProjectDetails from "./components/ProjectDetails";
import {
  Code,
  Server,
  Layers,
  Cpu,
  Sparkles,
  Webhook,
  Database,
  Brain,
  HardDrive,
  BarChart3,
  TrendingUp,
  Network,
  PieChart,
  Mail,
  FileText,
  ChevronRight,
  ArrowRight,
  Download,
  GraduationCap,
  Calendar,
  Send,
  CheckCircle2,
  X,
  Linkedin,
  Github,
  Award,
  Image
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const THEMES = {
  obsidian: {
    id: "obsidian",
    name: "Classic Midnight",
    bgClass: "bg-slate-950",
    headerBg: "bg-slate-950/85",
    cardBg: "bg-slate-900/50",
    borderClass: "border-white/10",
    accentText: "text-cyan-400",
    accentHover: "hover:text-cyan-400",
    accentBg: "bg-cyan-500",
    accentBgHover: "hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
    primaryButtonText: "text-slate-950",
    secondaryButtonBorder: "border-cyan-500/50",
    secondaryButtonText: "text-cyan-400 hover:bg-cyan-500/10",
    gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500",
    glowColor: "glow-cyan",
    glow1: "bg-cyan-500/5",
    glow2: "bg-violet-600/5",
    glow3: "bg-violet-950/15",
    glow4: "bg-cyan-950/15",
    indicatorDot: "bg-cyan-400",
    indicatorBg: "bg-cyan-950/40",
    indicatorBorder: "border-cyan-800/40",
    mobileNavBg: "bg-slate-925",
    tagBg: "bg-slate-950",
    skillGauge: "from-cyan-600 to-cyan-400",
    accentPill: "bg-cyan-950/40 border-cyan-800/30",
    accentPillText: "text-cyan-300",
    colorPill: "bg-cyan-500",
  },
  emerald: {
    id: "emerald",
    name: "Emerald Nebula",
    bgClass: "bg-stone-950",
    headerBg: "bg-stone-950/85",
    cardBg: "bg-emerald-950/20",
    borderClass: "border-emerald-500/20",
    accentText: "text-emerald-400",
    accentHover: "hover:text-emerald-400",
    accentBg: "bg-emerald-500",
    accentBgHover: "hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    primaryButtonText: "text-stone-950",
    secondaryButtonBorder: "border-emerald-500/50",
    secondaryButtonText: "text-emerald-400 hover:bg-emerald-500/10",
    gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500",
    glowColor: "glow-emerald",
    glow1: "bg-emerald-500/5",
    glow2: "bg-teal-600/5",
    glow3: "bg-teal-950/15",
    glow4: "bg-emerald-950/15",
    indicatorDot: "bg-emerald-400",
    indicatorBg: "bg-emerald-950/40",
    indicatorBorder: "border-emerald-800/40",
    mobileNavBg: "bg-stone-900",
    tagBg: "bg-emerald-950",
    skillGauge: "from-emerald-600 to-emerald-400",
    accentPill: "bg-emerald-950/40 border-emerald-800/30",
    accentPillText: "text-emerald-300",
    colorPill: "bg-emerald-500",
  },
  violet: {
    id: "violet",
    name: "Cyber Royal",
    bgClass: "bg-zinc-950",
    headerBg: "bg-zinc-950/85",
    cardBg: "bg-violet-950/15",
    borderClass: "border-violet-500/20",
    accentText: "text-violet-400",
    accentHover: "hover:text-violet-400",
    accentBg: "bg-violet-500",
    accentBgHover: "hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    primaryButtonText: "text-white",
    secondaryButtonBorder: "border-violet-500/50",
    secondaryButtonText: "text-violet-400 hover:bg-violet-500/10",
    gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-500",
    glowColor: "glow-violet",
    glow1: "bg-violet-500/5",
    glow2: "bg-fuchsia-600/5",
    glow3: "bg-fuchsia-950/15",
    glow4: "bg-violet-950/15",
    indicatorDot: "bg-violet-400",
    indicatorBg: "bg-violet-950/40",
    indicatorBorder: "border-violet-800/40",
    mobileNavBg: "bg-zinc-925",
    tagBg: "bg-violet-950",
    skillGauge: "from-violet-600 to-violet-400",
    accentPill: "bg-violet-950/40 border-violet-800/30",
    accentPillText: "text-violet-300",
    colorPill: "bg-violet-500",
  },
  slate: {
    id: "slate",
    name: "Classic Minimalist",
    bgClass: "bg-zinc-950",
    headerBg: "bg-zinc-950/85",
    cardBg: "bg-zinc-900/40",
    borderClass: "border-white/10",
    accentText: "text-zinc-200",
    accentHover: "hover:text-zinc-200",
    accentBg: "bg-zinc-200",
    accentBgHover: "hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    primaryButtonText: "text-zinc-950",
    secondaryButtonBorder: "border-zinc-500/50",
    secondaryButtonText: "text-zinc-300 hover:bg-zinc-500/10",
    gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600",
    glowColor: "glow-zinc",
    glow1: "bg-white/5",
    glow2: "bg-zinc-500/5",
    glow3: "bg-zinc-900/15",
    glow4: "bg-zinc-950/15",
    indicatorDot: "bg-zinc-300",
    indicatorBg: "bg-zinc-900/40",
    indicatorBorder: "border-zinc-800/40",
    mobileNavBg: "bg-zinc-950",
    tagBg: "bg-zinc-950",
    skillGauge: "from-zinc-500 to-zinc-300",
    accentPill: "bg-zinc-900/40 border-zinc-800/30",
    accentPillText: "text-zinc-300",
    colorPill: "bg-zinc-300",
  },
  amber: {
    id: "amber",
    name: "Matrix Amber",
    bgClass: "bg-black",
    headerBg: "bg-black/95",
    cardBg: "bg-amber-950/10",
    borderClass: "border-amber-500/20",
    accentText: "text-amber-400",
    accentHover: "hover:text-amber-400",
    accentBg: "bg-amber-500",
    accentBgHover: "hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]",
    primaryButtonText: "text-black",
    secondaryButtonBorder: "border-amber-500/50",
    secondaryButtonText: "text-amber-400 hover:bg-amber-500/10",
    gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500",
    glowColor: "glow-amber",
    glow1: "bg-amber-500/5",
    glow2: "bg-orange-600/5",
    glow3: "bg-orange-950/15",
    glow4: "bg-amber-950/15",
    indicatorDot: "bg-amber-400",
    indicatorBg: "bg-amber-950/40",
    indicatorBorder: "border-amber-800/80",
    mobileNavBg: "bg-neutral-950",
    tagBg: "bg-amber-950",
    skillGauge: "from-amber-600 to-amber-400",
    accentPill: "bg-amber-950/40 border-amber-800/30",
    accentPillText: "text-amber-300",
    colorPill: "bg-amber-400",
  }
};

// =========================================================================
// CONTACT FORM CONFIGURATION / LINKING TO YOUR EMAIL
// =========================================================================
// To make the contact form submit messages directly to your inbox, you have three
// premium options. Configure your preferred submission method below:
//
// OPTION A: WEB3FORMS (Recommended - 100% Free, no server required, silent submit)
//   1. Go to https://web3forms.com and type in your email address to get a free Access Key.
//   2. Copy the Access Key and paste it into the WEB3FORMS_ACCESS_KEY constant below.
//   3. Change FORM_SUBMISSION_METHOD to "web3forms".
//
// OPTION B: FORMSPREE (Another excellent alternative)
//   1. Create an account at https://formspree.io and create a new project.
//   2. Copy your form ID (e.g. "mvoyzrqv") and paste it into FORMSPREE_FORM_ID below.
//   3. Change FORM_SUBMISSION_METHOD to "formspree".
//
// OPTION C: DIRECT MAILTO (No registration required, opens user's email editor)
//   1. Set FORM_SUBMISSION_METHOD to "mailto".
// =========================================================================

// Put your active email address here so forms direct to you
export const RECEIVER_EMAIL = "sakshhi.work@gmail.com";

// Choose your method: "web3forms" | "formspree" | "mailto" | "simulate"
export const FORM_SUBMISSION_METHOD: "web3forms" | "formspree" | "mailto" | "simulate" = "formspree";

export const WEB3FORMS_ACCESS_KEY = "YOUR-WEB3FORMS-ACCESS-KEY-HERE"; // Replace with your Web3Forms key
export const FORMSPREE_FORM_ID = "mlgqgevj";     // Replace with your Formspree Form ID

export default function App() {
  // Navigation states
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [bootcampModalOpen, setBootcampModalOpen] = useState<boolean>(false);
  
  // Theme & preview settings
  const [theme, setTheme] = useState<"obsidian" | "emerald" | "violet" | "slate" | "amber">("obsidian");
  const activeTheme = THEMES[theme];
  const [useImageBg, setUseImageBg] = useState<boolean>(true);
  const [scrollBg, setScrollBg] = useState<string>("/rainy_street.png");

  // Dynamically change background image based on scroll depth:
  // Show tree background when scrolled down to the Reach Out (contact) section, else show the beautiful rainy street.
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // If the contact section top is within 80% scroll viewport threshold
        if (rect.top < window.innerHeight * 0.82) {
          setScrollBg("/forest_trees.png");
        } else {
          setScrollBg("/rainy_street.png");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial sync
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // User's detected timezone clock states (auto updated based on wherever the user is opening the page)
  const [localTimeStr, setLocalTimeStr] = useState<string>("");
  const [detectedTimezone, setDetectedTimezone] = useState<string>("Local Time");
  const [localIsPm, setLocalIsPm] = useState<boolean>(false);

  // Time tracker ticks & automatic AM (Yellow / Amber) / PM (Green / Emerald) theme alignment
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setDetectedTimezone(tz || "Local Time");
    } catch (e) {
      // safe fallback
    }

    const updateClock = () => {
      const now = new Date();
      const hour = now.getHours();
      const isPm = hour >= 12;
      setLocalIsPm(isPm);
      
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      setLocalTimeStr(timeStr);

      // Auto update background theme according to user's region/local time: Yellow/Amber for AM, Green/Emerald for PM
      if (isPm) {
        setTheme("emerald"); // Green background theme for PM
      } else {
        setTheme("amber"); // Yellow background theme for AM
      }
    };

    updateClock(); // run immediately on local system timezone
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Form submission states
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Parse URL hash for dynamic routing
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      setMobileMenuOpen(false);
      // Smooth scroll back to top if loading sub-page
      if (window.location.hash.includes("/projects/")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Sync scroll on home anchor navigation
  const scrollToAnchor = (anchor: string) => {
    if (currentHash.includes("/projects/")) {
      // Go back to main first with anchor parameter
      window.location.hash = anchor;
    } else {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  // Determine active view
  let activeProjectId: string | null = null;
  const projectRouteMatch = currentHash.match(/^#\/projects\/([\w-]+)$/);
  if (projectRouteMatch) {
    activeProjectId = projectRouteMatch[1];
  }

  // Handle route change programmatically
  const navigateToProject = (id: string) => {
    window.location.hash = `#/projects/${id}`;
  };

  const handleBackToMain = () => {
    window.location.hash = "#work";
    setTimeout(() => {
      scrollToAnchor("#work");
    }, 100);
  };

  // Real or Simulated form submission directly integrated based on configurations defined above
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (FORM_SUBMISSION_METHOD === "web3forms") {
        // Prepare payload for Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY === "YOUR-WEB3FORMS-ACCESS-KEY-HERE" ? "00000000-0000-0000-0000-000000000000" : WEB3FORMS_ACCESS_KEY, // Demo fallback
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New Portfolio Message from ${formData.name}`,
            from_name: "Sakshi's Developer Portfolio",
            to: RECEIVER_EMAIL
          }),
        });
        
        const data = await response.json();
        if (data.success) {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });
        } else {
          // If the key is not active, fallback to mailto for seamless fallback
          if (WEB3FORMS_ACCESS_KEY === "YOUR-WEB3FORMS-ACCESS-KEY-HERE") {
            const mailtoUrl = `mailto:${RECEIVER_EMAIL}?subject=Contact via Portfolio from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
              `Hello Sakshi,\n\nMessage:\n${formData.message}\n\nSender Email: ${formData.email}`
            )}`;
            window.location.href = mailtoUrl;
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
          } else {
            throw new Error(data.message || "Submission failed");
          }
        }
      } else if (FORM_SUBMISSION_METHOD === "formspree") {
        const url = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New message from ${formData.name}`,
          }),
        });

        if (response.ok) {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error("Formspree submission failed");
        }
      } else if (FORM_SUBMISSION_METHOD === "mailto") {
        const mailtoUrl = `mailto:${RECEIVER_EMAIL}?subject=Contact via Portfolio from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
          `Hello Sakshi,\n\nMessage:\n${formData.message}\n\nSender Email: ${formData.email}`
        )}`;
        window.location.href = mailtoUrl;
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // "simulate" mode fallback
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Form transmission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Copy email string helper
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sakshhi.work@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Helper mapping icon names of skills dynamically to lucide icons safely
  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers": return <Layers className="w-4 h-4 text-cyan-400" />;
      case "Server": return <Server className="w-4 h-4 text-cyan-400" />;
      case "Code": return <Code className="w-4 h-4 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-4 h-4 text-violet-400" />;
      case "Sparkles": return <Sparkles className="w-4 h-4 text-cyan-400" />;
      case "Webhook": return <Webhook className="w-4 h-4 text-violet-400" />;
      case "Database": return <Database className="w-4 h-4 text-violet-400" />;
      case "Brain": return <Brain className="w-4 h-4 text-purple-400" />;
      case "HardDrive": return <HardDrive className="w-4 h-4 text-cyan-400" />;
      case "BarChart3": return <BarChart3 className="w-4 h-4 text-cyan-400" />;
      case "TrendingUp": return <TrendingUp className="w-4 h-4 text-cyan-400" />;
      case "Network": return <Network className="w-4 h-4 text-violet-400" />;
      case "PieChart": return <PieChart className="w-4 h-4 text-violet-400" />;
      default: return <Code className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className={`${activeTheme.bgClass} text-slate-100 font-sans min-h-screen relative overflow-x-hidden transition-colors duration-500 selection:bg-cyan-500/30 selection:text-cyan-300`}>
      
      {/* Immersive Street and Forest Backdrop Background Option (Opacity close to 1) */}
      <AnimatePresence mode="popLayout">
        {useImageBg && (
          <motion.div 
            key={scrollBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.92 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-all duration-1000"
            style={{ backgroundImage: `url('${scrollBg}')` }}
          />
        )}
      </AnimatePresence>

      {/* Glassmorphic dark overlay for outstanding text and contrast readability when high opacity background is ON */}
      <AnimatePresence>
        {useImageBg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-0 bg-black/60 backdrop-blur-[4px] pointer-events-none"
          />
        )}
      </AnimatePresence>
      
      {/* Dynamic Route View - Render Full Project Details Page if matched */}
      <AnimatePresence mode="wait">
        {activeProjectId ? (
          <ProjectDetails
            key="details"
            projectId={activeProjectId}
            onBack={handleBackToMain}
            onNavigateToProject={navigateToProject}
            theme={theme}
          />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header / Sticky Navigation Bar */}
            <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                
                {/* Brand Logo */}
                <span 
                  onClick={() => scrollToAnchor("#hero")}
                  className="cursor-pointer text-lg font-display font-bold tracking-tight text-white flex items-center gap-2 group animate-pulse-slow"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg shrink-0"></div>
                  <span className="font-bold text-xl tracking-tighter">SAKSHI<span className={activeTheme.accentText}>.DEV</span></span>
                </span>

                {/* Theme Customizer and Backdrop controls removed from Navbar as requested */}

                {/* Desktop Navigation Link list */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                  <button onClick={() => scrollToAnchor("#hero")} className={`${activeTheme.accentHover} transition-colors cursor-pointer`}>Home</button>
                  <button onClick={() => scrollToAnchor("#about")} className={`${activeTheme.accentHover} transition-colors cursor-pointer`}>About</button>
                  <button onClick={() => scrollToAnchor("#work")} className={`${activeTheme.accentHover} transition-colors cursor-pointer`}>Featured Work</button>
                  <button onClick={() => scrollToAnchor("#expertise")} className={`${activeTheme.accentHover} transition-colors cursor-pointer`}>Expertise</button>
                  <button onClick={() => scrollToAnchor("#education")} className={`${activeTheme.accentHover} transition-colors cursor-pointer`}>Education</button>
                  <button onClick={() => scrollToAnchor("#contact")} className={`px-5 py-2 rounded-full border text-xs font-bold transition-all cursor-pointer ${activeTheme.secondaryButtonBorder} ${activeTheme.secondaryButtonText} hover:brightness-110 hover:scale-[1.02]`}>Let's Connect</button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-2.5">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-1.5 text-slate-400 hover:text-white"
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : (
                      <div className="space-y-1.5">
                        <div className="w-6 h-0.5 bg-slate-300 rounded" />
                        <div className="w-6 h-0.5 bg-slate-300 rounded" />
                        <div className="w-4 h-0.5 bg-slate-300 rounded ml-2" />
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Drawer menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`md:hidden ${activeTheme.mobileNavBg} border-b border-white/10 px-4 py-6 space-y-4`}
                  >
                    <button onClick={() => scrollToAnchor("#hero")} className={`block w-full text-left text-base font-medium py-2 ${activeTheme.accentHover}`}>Home</button>
                    <button onClick={() => scrollToAnchor("#about")} className={`block w-full text-left text-base font-medium py-2 ${activeTheme.accentHover}`}>About</button>
                    <button onClick={() => scrollToAnchor("#work")} className={`block w-full text-left text-base font-medium py-2 ${activeTheme.accentHover}`}>Featured Work</button>
                    <button onClick={() => scrollToAnchor("#expertise")} className={`block w-full text-left text-base font-medium py-2 ${activeTheme.accentHover}`}>Expertise</button>
                    <button onClick={() => scrollToAnchor("#education")} className={`block w-full text-left text-base font-medium py-2 ${activeTheme.accentHover}`}>Education</button>
                    <button onClick={() => scrollToAnchor("#contact")} className={`block w-full text-center text-sm font-bold py-2.5 rounded-full text-slate-950 border ${activeTheme.accentBg}`}>Let's Connect</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* HERO SECTION */}
            <section id="hero" className="relative min-h-[calc(100vh-64px)] flex items-center pt-8 pb-16">
              
              {/* Absolutes and visual background grid pattern accents */}
              <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-cyan-950/15 via-transparent to-transparent pointer-events-none" />
              <div className={`absolute top-[40%] right-[10%] w-[350px] h-[350px] ${activeTheme.glow1} rounded-full blur-[140px] pointer-events-none`} />
              <div className={`absolute top-[10%] left-[5%] w-[300px] h-[300px] ${activeTheme.glow2} rounded-full blur-[120px] pointer-events-none`} />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* Desktop Split Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Left Side Bento Card: Copywriting Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-7 bg-slate-950/15 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden backdrop-blur-xl shadow-2xl"
                  >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>

                    {/* Auto-detected Region theme synchronization status pill */}
                    <div className="mb-6 flex flex-wrap items-center gap-2.5 px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-[11px] font-mono text-slate-300 backdrop-blur-md self-start">
                      <span className={`w-1.5 h-1.5 rounded-full ${localIsPm ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]'} animate-pulse`} />
                      <span className="text-slate-400 capitalize">Region Link:</span>
                      <span className="text-white font-medium">{detectedTimezone}</span>
                      <span className="text-white/20">|</span>
                      <span>{localTimeStr}</span>
                      <span className="text-white/20">|</span>
                      <span className={`font-semibold ${localIsPm ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {localIsPm ? 'PM Green Tone Active' : 'AM Yellow Tone Active'}
                      </span>
                    </div>

                    {/* Precise requested Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-4">
                      Hi, I am <span className={`${activeTheme.gradientText} ${activeTheme.glowColor} font-bold`}>Sakshi</span>. 
                      <br /> 
                      I am a Passionate Software Developer and Data Science and Analytics Professional.
                    </h1>

                    {/* Precise requested Body descriptive text */}
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-light max-w-2xl">
                      I am a 1.5+ year technical experienced IT professional, I specialize in full-stack engineering, robust and end-to-end analytics and engineering pipelines. Let's explore my workflow.
                    </p>

                    {/* Side-by-Side Call to Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      {/* Button 1: Contact Me Anchor link */}
                      <button
                        onClick={() => scrollToAnchor("#contact")}
                        className={`px-6 py-2.5 ${activeTheme.accentBg} ${activeTheme.primaryButtonText} font-bold text-sm rounded-full transition-all duration-300 ${activeTheme.accentBgHover} active:scale-[0.98] cursor-pointer inline-flex items-center gap-2`}
                      >
                        Contact Me
                        <ArrowRight className="w-4 h-4" />
                      </button>


                    </div>

                    {/* Soft metrics row to add high-fidelity depth */}
                    <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10 max-w-md font-mono">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white font-display">1.5+ Yrs</div>
                        <div className="text-[10px] text-slate-500 tracking-wider uppercase">IT Experience</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white font-display">4x</div>
                        <div className="text-[10px] text-slate-500 tracking-wider uppercase">Internships</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white font-display">7+</div>
                        <div className="text-[10px] text-slate-500 tracking-wider uppercase">CORE Projects</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Side Bento Card: R3F Canvas Container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-5 bg-slate-950/20 border border-white/10 rounded-3xl relative overflow-hidden backdrop-blur-xl flex flex-col justify-between p-6 h-full min-h-[400px] shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 pointer-events-none" />
                    
                    {/* Lazy-loaded ThreeJS Canvas and fallback load state */}
                    <div className="w-full h-full min-h-[280px] relative z-10 flex items-center justify-center">
                      <ThreeCanvas />
                    </div>

                    <div className="text-center relative z-10 mt-2 mb-4">
                      <div className="text-[12px] text-cyan-400 font-mono italic tracking-wide font-medium">"If there's a will, there's a way"</div>
                    </div>

                    {/* Decorative background vectors */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-cyan-500/5 rounded-full pointer-events-none" />
                  </motion.div>

                </div>
              </div>
            </section>

            {/* ABOUT ME SECTION as Bento Cards */}
            <section id="about" className="py-24 border-t border-white/10 bg-transparent px-4 sm:px-6 lg:px-8 relative transition-colors duration-500">
              <div className={`absolute bottom-0 right-0 w-[450px] h-[450px] ${activeTheme.glow3} rounded-full blur-[140px] pointer-events-none transition-colors duration-500`} />
              
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Left Column Profile Bento Card */}
                  <div className="lg:col-span-4 flex">
                    <div className="w-full bg-slate-950/15 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center relative overflow-hidden backdrop-blur-xl shadow-2xl">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-[60px] pointer-events-none" />
                      
                      <div className="my-auto space-y-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/10">
                          <GraduationCap className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">BE ENTC DS GRADUATE</div>
                          <h4 className="text-xl font-display font-bold text-white mt-1">Class of 2024</h4>
                        </div>
                        <div className="space-y-1 p-3 bg-slate-950/50 rounded-2xl border border-white/5 font-mono">
                          <div className="text-[11px] text-slate-300">Ex-Data Management Analyst</div>
                          <div className="text-[10px] text-cyan-400">4-Fold Industry Intern</div>
                        </div>
                      </div>

                      <div className="flex space-x-2 items-center mt-6">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] text-slate-500 tracking-wider">ONLINE & AVAILABLE</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Precise biographical content requirements framed beautifully */}
                  <div className="lg:col-span-8 bg-slate-950/15 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">ABOUT ME</span>
                        <div className="h-[1px] flex-1 bg-white/10" />
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-tight">
                        Fulfilling Complex Analytics & High Scale System Engineering
                      </h2>

                      <p className="text-base text-slate-300 leading-relaxed font-light whitespace-pre-line">
                        Hi, I am a BE Graduate 2024 with professional experience as a Data Management Analyst and practical experience through four internships in Software Development and Data Analytics. My diverse background has strengthened my technical expertise across software engineering, data analysis, and problem-solving. I enjoy building efficient, scalable, and data-driven solutions while continuously learning new technologies and applying them to solve real-world challenges.
                      </p>

                      <div className="border border-cyan-500/30 bg-cyan-950/20 rounded-2xl p-5 hover:bg-cyan-950/30 transition-all shadow-md group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-[40px] pointer-events-none" />
                        <div className="flex items-start gap-3.5">
                          <div className="p-2 bg-cyan-950/60 rounded-xl border border-cyan-500/20 text-cyan-400 mt-1">
                            <Award className="w-5 h-5" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <h4 className="text-sm font-semibold text-white tracking-wide font-display uppercase text-cyan-300">
                              🏆 Recent Achievement
                            </h4>
                            <p className="text-sm text-slate-200 leading-relaxed font-medium">
                              Top 10 Performers in Mumbai Division (out of 200+ aspirants) in BNP Paribas x Nasscom Foundation Data Science and Analytics for Women in Tech Bootcamp
                            </p>
                            <button
                              onClick={() => setBootcampModalOpen(true)}
                              className="mt-2.5 px-4 py-1.5 bg-cyan-500 text-slate-950 font-bold text-xs rounded-full hover:bg-cyan-400 transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20 active:scale-[0.98]"
                            >
                              <span>View More Details</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Value Pill grid for Sakshi's values */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl border border-white/5 bg-slate-950/40 flex items-start gap-3 hover:border-cyan-500/20 transition-all">
                          <div className="p-2 bg-slate-900 rounded-xl">
                            <Award className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <h4 className="text-sm font-sans font-semibold text-white">Efficiency optimizer</h4>
                            <p className="text-xs text-slate-400 mt-1">Refining resource flows to push maximum yield in processing models.</p>
                          </div>
                        </div>
                        <div className="p-4 rounded-2xl border border-white/5 bg-slate-950/40 flex items-start gap-3 hover:border-violet-500/20 transition-all">
                          <div className="p-2 bg-slate-900 rounded-xl">
                            <Code className="w-5 h-5 text-violet-400" />
                          </div>
                          <div>
                            <h4 className="text-sm font-sans font-semibold text-white">Enterprise Engineering</h4>
                            <p className="text-xs text-slate-400 mt-1">Robust system paradigms leveraging high capacity MERN frameworks.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* WORK / PROJECTS SECTION */}
            <section id="work" className="py-24 border-t border-white/10 bg-transparent px-4 sm:px-6 lg:px-8 relative transition-colors duration-500">
              <div className={`absolute top-1/4 right-1/4 w-[350px] h-[350px] ${activeTheme.glow4} rounded-full blur-[120px] pointer-events-none transition-colors duration-500`} />
              
              <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header text */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                  <div className="space-y-3">
                    <div className={`text-xs font-mono uppercase tracking-widest ${activeTheme.accentText}`}>Featured Work</div>
                    <h2 className={`text-4xl sm:text-5xl font-display font-extrabold tracking-tight ${activeTheme.gradientText} filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]`}>
                      Project Details
                    </h2>
                    <div className={`h-1 w-20 bg-gradient-to-r ${activeTheme.skillGauge} rounded-full mt-2`} />
                  </div>
                </div>

                {/* Grid Layout: Exactly 7 dynamic cards in Bento Grid format */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PROJECTS.map((project, index) => {
                    return (
                      <motion.div
                        id={`project_card_${project.id}`}
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                        onClick={() => navigateToProject(project.id)}
                        className="group cursor-pointer rounded-3xl border border-white/10 overflow-hidden bg-slate-950/15 hover:bg-slate-950/30 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between shadow-2xl h-full backdrop-blur-xl"
                      >
                        <div className="flex-1 flex flex-col">
                          {/* Rich clickable Cover Page image */}
                          <div className="aspect-[1.8/1] overflow-hidden relative">
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                            {/* Inner ambient shadows and hover neon tint */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          {/* Card Copywriting */}
                          <div className="p-6 flex-1 flex flex-col justify-between">
                            <div className="space-y-3">
                              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-950 text-cyan-400 border border-white/5">
                                {project.technologies[0]}
                              </span>
                              <h3 className="text-lg font-sans font-bold leading-tight text-white group-hover:text-cyan-400 transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                                {project.shortDesc}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Card CTA footer action link bar */}
                        <div className="mx-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                            PROJECT DETAILS
                          </span>
                          <span className="p-2 rounded-full bg-slate-950 border border-white/10 text-slate-300 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 transition-all">
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </section>

            {/* SKILLS SECTION */}
            <section id="expertise" className="py-24 border-t border-white/10 bg-transparent px-4 sm:px-6 lg:px-8 relative transition-colors duration-500">
              <div className={`absolute top-1/4 left-1/2 w-[350px] h-[350px] ${activeTheme.glow4} rounded-full blur-[120px] pointer-events-none transition-colors duration-500`} />
              
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-xl mx-auto mb-16 space-y-3 flex flex-col items-center">
                  <div className={`text-xs font-mono uppercase tracking-widest ${activeTheme.accentText}`}>Core Expertise</div>
                  <h2 className={`text-4xl sm:text-5xl font-display font-extrabold tracking-tight ${activeTheme.gradientText} filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]`}>
                    Skills Directory
                  </h2>
                  <div className={`h-1 w-20 bg-gradient-to-r ${activeTheme.skillGauge} rounded-full mt-2`} />
                </div>

                {/* Bento / Visual Grid dividing Dev vs Data Science */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {SKILL_CATEGORIES.map((category, catIdx) => (
                    <div
                      key={catIdx}
                      className="border border-white/10 bg-slate-950/20 backdrop-blur-xl p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-2xl"
                    >
                      <div>
                        {/* Domain title header layout */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-3 h-3 rounded-md ${catIdx === 0 ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" : "bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.5)]"}`} />
                          <h3 className="text-lg font-display font-semibold text-white">
                            {category.title}
                          </h3>
                        </div>

                        {/* Skill pill sub-grid with animated visual gauges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {category.skills.map((skill, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-3.5 rounded-2xl border border-white/5 bg-slate-950/40 hover:border-white/10 transition-all group/skill"
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-medium text-slate-300 flex items-center gap-2 group-hover/skill:text-cyan-400 transition-colors">
                                  {renderSkillIcon(skill.iconName)}
                                  {skill.name}
                                </span>
                                <span className="text-[10px] font-mono text-slate-500">
                                  {skill.level}%
                                </span>
                              </div>
                              {/* Visual loading meter */}
                              <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                                <div
                                  style={{ width: `${skill.level}%` }}
                                  className={`h-full rounded-full ${catIdx === 0 ? "bg-gradient-to-r from-cyan-600 to-cyan-400" : "bg-gradient-to-r from-violet-600 to-violet-400"}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Domain bottom sub-stat block */}
                      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>OPERATIONAL COMPETENCY GAUGE</span>
                        <span className="text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-800/20">STABLE</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* EDUCATION SECTION */}
            <section id="education" className="py-24 border-t border-white/10 bg-transparent px-4 sm:px-6 lg:px-8 relative transition-colors duration-500">
              <div className={`absolute top-1/4 left-1/4 w-[350px] h-[350px] ${activeTheme.glow4} rounded-full blur-[120px] pointer-events-none transition-colors duration-500`} />
              
              <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-3 flex flex-col items-center">
                  <div className={`text-xs font-mono uppercase tracking-widest ${activeTheme.accentText}`}>Education</div>
                  <h2 className={`text-4xl sm:text-5xl font-display font-extrabold tracking-tight ${activeTheme.gradientText} filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]`}>
                    Academic Timeline
                  </h2>
                  <div className={`h-1 w-20 bg-gradient-to-r ${activeTheme.skillGauge} rounded-full mt-2`} />
                </div>

                {/* Timeline vertical container */}
                <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-4 sm:ml-6 space-y-8">
                  
                  {EDUCATION.map((entry, idx) => {
                    const isBE = entry.capstonePdfUrl !== undefined;
                    return (
                      <div key={idx} className="relative group bg-slate-950/15 border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-2xl">
                        
                        {/* Timeline node icon highlight */}
                        <div className="absolute -left-[45px] sm:-left-[61px] top-8 w-8 h-8 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 transition-colors z-10 shadow-lg">
                          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        </div>

                        {/* Entry info content */}
                        <div className="space-y-3">
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-2.5 py-1 rounded-full">
                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                            {entry.duration}
                          </span>

                          <h3 className="text-lg sm:text-xl font-display font-semibold text-white tracking-tight leading-tight">
                            {entry.degree}
                          </h3>

                          <div className="text-sm font-sans font-medium text-slate-400">
                            {entry.institution}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                            {entry.description}
                          </p>

                          {/* Academic Project Trigger */}
                          {entry.capstonePdfUrl && (
                            <div className="pt-2">
                              {entry.capstonePdfUrl.startsWith("#/") ? (
                                <button
                                  onClick={() => {
                                    window.location.hash = entry.capstonePdfUrl!;
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }}
                                  id={`btn_view_capstone_project_${idx}`}
                                  className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-full bg-gradient-to-r from-cyan-950/60 to-violet-950/60 text-cyan-300 border border-cyan-500/30 text-xs font-semibold hover:border-cyan-400 hover:text-white transition-all shadow-md group/cap cursor-pointer"
                                >
                                  <span>View Academic Project</span>
                                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cap:translate-x-1" />
                                </button>
                              ) : (
                                <a
                                  href={entry.capstonePdfUrl}
                                  id={`btn_view_capstone_project_${idx}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-full bg-gradient-to-r from-cyan-950/60 to-violet-950/60 text-cyan-300 border border-cyan-500/30 text-xs font-semibold hover:border-cyan-400 hover:text-white transition-all shadow-md group/cap"
                                >
                                  <span>View Academic Project</span>
                                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cap:translate-x-1" />
                                </a>
                              )}
                            </div>
                          )}

                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </section>

            {/* CONTACT / EMAIL SECTION */}
            <section id="contact" className="py-24 border-t border-white/10 bg-transparent px-4 sm:px-6 lg:px-8 relative transition-colors duration-500">
              <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] ${activeTheme.glow4} rounded-full blur-[130px] pointer-events-none transition-colors duration-500`} />
              
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* Left branding columnar header (Bento panel) */}
                  <div className="lg:col-span-5 bg-slate-950/20 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 blur-[50px] pointer-events-none" />
                    
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className={`text-xs font-mono uppercase tracking-widest ${activeTheme.accentText}`}>Let's Work Together</div>
                        <h2 className="text-3xl font-display font-semibold tracking-tight text-white">
                          Reach Out
                        </h2>
                      </div>
 
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        Do you have a project idea, contract proposal, or collaboration topic? Drop a message directly through the dashboard. I'm available for prompt replies.
                      </p>
                    </div>
 
                    {/* Quick copy credentials */}
                    <div className="space-y-4 pt-6 border-t border-white/10 mt-6 sm:mt-8">
                      
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl bg-slate-950 border border-white/10 ${activeTheme.accentText}`}>
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Direct Mail ID</div>
                          <button 
                            onClick={copyEmailToClipboard}
                            className={`text-xs font-mono ${activeTheme.accentHover} text-slate-200 transition-colors truncate max-w-full text-left`}
                          >
                            sakshhi.work@gmail.com
                          </button>
                        </div>
                      </div>

                      {/* Copied visual tooltips confirmation marker popup banner */}
                      {copiedEmail && (
                        <div className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/10 animate-pulse">
                          <CheckCircle2 className="w-3 H-3" />
                          Mail Address Copied!
                        </div>
                      )}

                      {/* Social handles linkage links */}
                      <div className="flex items-center gap-3 pt-4">
                        <a 
                          href="https://linkedin.com/in/sakshi-patil-9a3823245" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2.5 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white rounded-xl border border-white/10 transition-all"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a 
                          href="https://github.com/sakshiispatil" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2.5 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white rounded-xl border border-white/10 transition-all"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                    </div>
                  </div>

                  {/* Right Form panel */}
                  <div className="lg:col-span-7 bg-slate-950/20 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                    <form 
                      onSubmit={handleFormSubmit}
                      className="space-y-6"
                    >
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="form_name" className="block text-xs font-mono uppercase tracking-wider text-slate-500">
                          Your Name
                        </label>
                        <input
                          id="form_name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-2xl text-sm text-white placeholder-slate-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="form_email" className="block text-xs font-mono uppercase tracking-wider text-slate-500">
                          Your Email
                        </label>
                        <input
                          id="form_email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-2xl text-sm text-white placeholder-slate-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                          placeholder="jane@example.com"
                        />
                      </div>

                      {/* Message input */}
                      <div className="space-y-1.5">
                        <label htmlFor="form_message" className="block text-xs font-mono uppercase tracking-wider text-slate-500">
                          Message Body
                        </label>
                        <textarea
                          id="form_message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-2xl text-sm text-white placeholder-slate-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors resize-none"
                          placeholder="Type your message details here..."
                        />
                      </div>

                      {/* Action trigger button */}
                      <div>
                        <button
                          id="btn_submit_contact_form"
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full ${activeTheme.accentBg} ${activeTheme.accentBgHover} disabled:opacity-50 text-slate-950 text-sm font-bold transition-all hover:scale-[1.01] cursor-pointer`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent animate-spin rounded-full" />
                              Connecting Transmissions...
                            </>
                          ) : (
                            <>
                              <span>Submit Form Transmission</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Submission status feedback notifications */}
                      {submitStatus === "success" && (
                        <div className="p-4 bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 rounded-xl flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-semibold">Transmission successful!</div>
                            <p className="text-xs text-cyan-400/80 mt-0.5">Thank you, Sakshi has received your details. I'll get back to you shortly! (In production this connects to Formspree/EmailJS seamlessly)</p>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>

                </div>
              </div>
            </section>

            {/* Custom Simple Human Footer layout */}
            <footer className="border-t border-white/10 py-10 text-center text-slate-500 text-xs font-mono">
              <div className="max-w-7xl mx-auto px-4 space-y-2">
                <div>© 2026 Sakshi Portfolio. Handcrafted in Bento Slate.</div>
                <div className="text-[10px]">ALL LOGS DEPLOYED SECURELY ON VERCEL PRO COMPATIBLE ENGINE</div>
              </div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Bootcamp Details Modal */}
      <AnimatePresence>
        {bootcampModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-slate-950 border border-white/10 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative overflow-hidden"
            >
              {/* Aesthetic Background Image Overlay */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <img 
                  src="/forest_trees.png" 
                  alt="" 
                  className="w-full h-full object-cover filter blur-[1px]" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setBootcampModalOpen(false)}
                className="absolute top-5 right-5 p-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-full border border-white/10 transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-10 space-y-8 relative z-10">
                {/* Header */}
                <div className="border-b border-white/10 pb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-800/30 rounded-full text-xs font-mono text-cyan-400 mb-3">
                    <Award className="w-3.5 h-3.5" />
                    Top 10 Performer
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                    Data Science & Analytics Bootcamp
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 font-mono">
                    BNP Paribas & NASSCOM Foundation for Women in Tech
                  </p>
                </div>

                {/* Meta details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/40 border border-white/5 p-4 rounded-2xl text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-slate-500 uppercase">Venue:</span>
                    <p className="text-slate-200">SNDT University – UMIT College, Santacruz, Mumbai</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-500 uppercase">Duration:</span>
                    <p className="text-slate-200">August 2025 – March 2026</p>
                  </div>
                </div>

                {/* Overview */}
                <div className="space-y-3">
                  <h4 className="text-base font-display font-semibold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Program Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Graduated as a Top 10 Performer (out of 200+ candidates) in an intensive program designed to bridge the gap between academic theory and enterprise engineering requirements.
                  </p>
                </div>

                {/* Technical Training */}
                <div className="space-y-4">
                  <h4 className="text-base font-display font-semibold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Technical Training (Mentored by Harish Mahale Sir)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-950/30 border border-white/5 rounded-2xl p-4 space-y-2">
                      <div className="text-xs font-bold text-cyan-400 font-mono">Machine Learning</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Developed and implemented robust, secure predictive models.
                      </p>
                    </div>
                    <div className="bg-slate-950/30 border border-white/5 rounded-2xl p-4 space-y-2">
                      <div className="text-xs font-bold text-cyan-400 font-mono">Advanced Data Analytics</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Engineered high-efficiency data models using Advanced Excel, complex DAX functions, custom measures, and dynamic pivot tables.
                      </p>
                    </div>
                    <div className="bg-slate-950/30 border border-white/5 rounded-2xl p-4 space-y-2">
                      <div className="text-xs font-bold text-cyan-400 font-mono">Data Visualization</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Built scalable, interactive dashboards using Power BI and Tableau to drive business intelligence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image 1: Bootcamp_Onsite_Image2025 */}
                <div className="space-y-2">
                  <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-1.5">
                    <img
                      src="/Bootcamp_Onsite_Image2025.jpg"
                      alt="Bootcamp Onsite Training"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-[350px] object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono text-center">
                    Bootcamp Onsite Session 2025 – Intensive Interactive Practical Training
                  </p>
                </div>

                {/* Corporate Immersion */}
                <div className="space-y-4">
                  <h4 className="text-base font-display font-semibold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Corporate Immersion
                  </h4>
                  <div className="space-y-3 font-light text-sm text-slate-300 leading-relaxed">
                    <div className="bg-slate-950/20 border border-white/5 p-4 rounded-2xl space-y-2">
                      <p className="font-semibold text-slate-100 text-xs font-mono uppercase text-cyan-400">Leadership Engagement:</p>
                      <p>
                        Visited the BNP Paribas corporate office in Goregoan East Nirlon Park. Engaged directly with senior executives, including CEO Sangeeta Kumar and CIB CEO Boris Leblanc, gaining strategic insights into Generative AI and enterprise data workflows.
                      </p>
                    </div>
                    <div className="bg-slate-950/20 border border-white/5 p-4 rounded-2xl space-y-2">
                      <p className="font-semibold text-slate-100 text-xs font-mono uppercase text-cyan-400">Industry Mentorship:</p>
                      <p>
                        Received on-site guidance from visiting cross-sector corporate professionals, aligning technical proficiencies with modern real-world business needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image 2: BNP_corporate_Visit */}
                <div className="space-y-2">
                  <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-1.5">
                    <img
                      src="/BNP_Corporate_Visit.jpg"
                      alt="BNP Paribas Corporate Visit"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-[350px] object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono text-center">
                    Onsite engagement at BNP Paribas corporate office – Goregoan East Nirlon Park
                  </p>
                </div>

                {/* Reflection */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-base font-display font-semibold text-white mb-3 flex items-center gap-2">
                    💬 A Heartfelt Reflection
                  </h4>
                  <blockquote className="border-l-2 border-cyan-400 pl-4 italic text-sm text-slate-300 leading-relaxed space-y-3 font-light">
                    <p>
                      I am deeply grateful to the NASSCOM Foundation and BNP Paribas for this transformative opportunity. This program served as the ultimate kickstart to my professional journey, perfectly bridging the gap between my foundational skills and modern enterprise standards.
                    </p>
                    <p>
                      Learning under the precise guidance of Harish Sir and interacting directly with senior corporate leaders completely reshaped my perspective on the future of the data field. Graduating as one of the top 10 performers among 200+ brilliant peers profoundly boosted my confidence. Today, my dedication to building secure, high-impact software and machine learning models stems entirely from the invaluable momentum and real-world expertise I gained through this journey.
                    </p>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
