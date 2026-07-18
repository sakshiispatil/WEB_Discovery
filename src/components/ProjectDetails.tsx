import React, { useEffect } from "react";
import { PROJECTS, Project } from "../data";
import { ArrowLeft, Github, ExternalLink, Code, Layers, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Markdown from "react-markdown";

interface ProjectDetailsProps {
  projectId: string;
  onBack: () => void;
  onNavigateToProject: (id: string) => void;
  theme?: "obsidian" | "emerald" | "violet" | "slate" | "amber";
}

export default function ProjectDetails({
  projectId,
  onBack,
  onNavigateToProject,
  theme = "obsidian"
}: ProjectDetailsProps) {
  const bgClasses = {
    obsidian: "bg-slate-950",
    emerald: "bg-stone-950",
    violet: "bg-zinc-950",
    slate: "bg-zinc-950",
    amber: "bg-black"
  };
  const glow1Classes = {
    obsidian: "bg-cyan-950/20",
    emerald: "bg-emerald-950/20",
    violet: "bg-violet-950/20",
    slate: "bg-zinc-900/20",
    amber: "bg-amber-950/20"
  };
  const glow2Classes = {
    obsidian: "bg-violet-950/20",
    emerald: "bg-teal-950/20",
    violet: "bg-fuchsia-950/20",
    slate: "bg-zinc-950/25",
    amber: "bg-orange-950/20"
  };

  // Find the selected project
  const project = PROJECTS.find((p) => p.id === projectId);

  // If project is not found, fallback gracefully
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-950 text-white p-6">
        <h2 className="text-2xl font-bold text-red-400 mb-4 font-sans">Project Not Found</h2>
        <button
          onClick={onBack}
          className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-sm font-medium transition-all"
        >
          Return to Portfolio
        </button>
      </div>
    );
  }

  // Get 2 related projects by excluding the current one
  const relatedProjects = PROJECTS.filter((p) => p.id !== projectId).slice(0, 2);

  // Scroll to green top on project load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className={`min-h-screen ${bgClasses[theme]} text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative transition-colors duration-500`}
    >
      {/* Decorative ambient blurred radial gradients */}
      <div className={`absolute top-0 left-1/4 w-[400px] h-[400px] ${glow1Classes[theme]} rounded-full blur-[120px] pointer-events-none transition-colors duration-500`} />
      <div className={`absolute top-1/2 right-1/4 w-[350px] h-[350px] ${glow2Classes[theme]} rounded-full blur-[100px] pointer-events-none transition-colors duration-500`} />

      {/* Constraints boundary */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Back Button at the top */}
        <div className="mb-8">
          <button
            id="btn_back_to_portfolio"
            onClick={onBack}
            className="inline-flex items-center gap-2 group text-sm text-slate-300 hover:text-cyan-400 font-medium transition-all py-2 px-5 bg-slate-900/40 border border-white/10 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Main Portfolio
          </button>
        </div>

        {/* Hero Cover Header */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-md mb-10 group shadow-2xl">
          <div className="aspect-[21/9] w-full overflow-hidden relative">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Dark gradient shadow overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          <div className="p-6 sm:p-10 -mt-16 sm:-mt-24 relative z-10">
            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-800/50 text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-none mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-cyan-200/90 font-sans max-w-2xl font-light">
              {project.headline}
            </p>
          </div>
        </div>

        {/* Project Context & Specs Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Main Context Detail Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="border border-white/10 bg-slate-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-lg">
              <h2 className="text-lg font-display font-semibold text-white mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                Project Narrative & Objectives
              </h2>
              <div className="markdown-body text-slate-300 leading-relaxed text-sm font-light">
                <Markdown>{project.longDesc}</Markdown>
              </div>
            </div>

            {project.id === "cybersecurity-solutions" && (
              <div className="border border-white/10 bg-slate-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-lg flex flex-col items-center justify-center">
                <h2 className="text-lg font-display font-semibold text-white mb-4 self-start flex items-center gap-2">
                  <span className="text-cyan-400">📷</span> Hardware Setup: Portable Mini Computer
                </h2>
                <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 flex justify-center items-center p-2 shadow-2xl">
                  <img
                    src="/Mini_Computer.jpeg"
                    alt="Raspberry Pi Portable Mini Computer"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[440px] object-contain rounded-xl"
                  />
                </div>
                <p className="mt-3.5 text-xs text-slate-400 font-mono text-center max-w-md leading-relaxed">
                  Raspberry Pi 3B+ mini computer integrated with a 3.5-inch TFT touch display, enclosed in a premium clear protective casing.
                </p>
              </div>
            )}

            {project.challenges && (
              <div className="border border-white/10 bg-slate-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-lg">
                <h2 className="text-lg font-display font-semibold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                  Technical Challenges Solved
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm font-light">
                  {project.challenges}
                </p>
              </div>
            )}
          </div>

          {/* Quick Info / Tech Stack sidebar */}
          <div className="space-y-6">
            {project.githubUrl && (
              <div className="border border-white/10 bg-slate-900/50 rounded-3xl p-6 backdrop-blur-md">
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                  Deployments & Code
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-950/85 hover:bg-slate-900 text-slate-200 text-xs font-mono rounded-full border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    Source Repository
                  </a>
                </div>
              </div>
            )}

            <div className="border border-white/10 bg-slate-900/50 rounded-3xl p-6 backdrop-blur-md">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Architecture Spec
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-white/5 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Suggestion Component: Related Projects */}
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-xl font-display font-semibold text-white mb-6 tracking-tight">
            Related Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProjects.map((relProj) => (
              <div
                key={relProj.id}
                onClick={() => onNavigateToProject(relProj.id)}
                className="group border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-cyan-500/30 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col shadow-lg backdrop-blur-md"
              >
                <div className="aspect-[1.8/1] overflow-hidden relative">
                  <img
                    src={relProj.imageUrl}
                    alt={relProj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-sans font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {relProj.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {relProj.shortDesc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mt-6 group-hover:text-cyan-300">
                    Explore Case Study
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
