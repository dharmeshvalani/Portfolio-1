import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "Python", "HTML/CSS"] },
    { category: "Frameworks & UI", items: ["React.js", "Next.js", "Tailwind CSS", "WordPress"] },
    { category: "Design & Logic", items: ["UI/UX Design", "Figma", "Automation Workflows"] }
  ];

  return (
    <section id="about" className="py-32 px-8 md:px-24 bg-background border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-6">// ABOUT ME</h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-accent/90">
            Building crisp, high-performance web applications with a focus on seamless interactive design and fluid automated workflows. Turning concepts into exceptional digital realities.
          </p>
        </motion.div>

        {/* Tech Stack Categories Grid */}
        <div className="space-y-8">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-surface border border-white/[0.03]"
            >
              <h3 className="text-xs tracking-widest uppercase text-muted mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-md tracking-wide">
                    {skill}
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
