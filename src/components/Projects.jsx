import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "Interactive Application Platform",
      desc: "A responsive system featuring integrated chat components and fast real-time synchronization.",
      tags: ["React", "Tailwind CSS", "WebSockets"]
    },
    {
      num: "02",
      title: "Automation & Content Pipeline",
      desc: "Engineered deep content synchronization pipelines optimizing state updates across external endpoints.",
      tags: ["Automation", "API Integration", "Node.js"]
    }
  ];

  return (
    <section id="projects" className="py-32 px-8 md:px-24 bg-background border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-16">// SELECTED PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative p-8 rounded-xl bg-surface border border-white/[0.03] hover:border-white/10 transition-all duration-500 flex flex-col justify-between aspect-[4/3]"
            >
              <div>
                <div className="text-xs font-mono tracking-widest text-muted mb-6">{project.num}</div>
                <h3 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-sm">{project.desc}</p>
              </div>

              <div className="flex gap-2 mt-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] tracking-wider uppercase bg-white/[0.02] border border-white/5 px-2.5 py-1 text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

