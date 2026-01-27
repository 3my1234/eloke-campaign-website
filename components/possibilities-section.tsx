"use client";

import { Building2, GraduationCap, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description:
      "Transforming roads and connectivity across every ward. Building a foundation for economic growth and accessibility.",
    color: "emerald",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "Empowering the next generation with world-class educational facilities and scholarship programs.",
    color: "gold",
  },
  {
    icon: Heart,
    title: "Accessible Healthcare",
    description:
      "Dignity in wellness for every family. Bringing quality healthcare closer to our communities.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "Inclusive Development",
    description:
      "Touching every ward and every family. No one left behind in our journey to prosperity.",
    color: "gold",
  },
];

export function PossibilitiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="possibilities" 
      className="py-24 bg-muted/30 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-emerald" />
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-emerald/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <span className="text-sm font-semibold text-gold tracking-wider uppercase">
              Our Vision
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            <span className="text-emerald">Possibilities</span> 2027 ✨
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            <span className="text-foreground font-semibold">Eloke O. Victor is an instrument of change</span> for our constituency. A man whose vision speaks hope, progress, and purposeful leadership.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="text-foreground font-medium">2027 presents new possibilities.</span> Possibilities of quality education, modern infrastructure, accessible healthcare, and inclusive development that touches every ward and every family.
          </p>
        </div>

        {/* Pillars Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="group relative bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-emerald/30 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                  pillar.color === "emerald"
                    ? "bg-emerald/10 text-emerald"
                    : "bg-gold/10 text-gold"
                }`}
              >
                <pillar.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>

              {/* Hover indicator */}
              <div
                className={`absolute bottom-0 left-0 w-0 h-1 rounded-b-xl transition-all duration-300 group-hover:w-full ${
                  pillar.color === "emerald" ? "bg-emerald" : "bg-gold"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald/10 via-gold/10 to-emerald/10 rounded-2xl p-8 sm:p-12 border border-emerald/20">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
              <span className="text-foreground font-semibold">Eloke O. Victor represents capacity, competence, and commitment.</span> He understands the needs of the people and carries the passion to transform those needs into reality.
            </p>
            <blockquote className="text-xl sm:text-2xl font-serif italic text-foreground/90 max-w-3xl mx-auto mb-6">
              &quot;This is not just about politics; it is about service, growth, and a better tomorrow.&quot;
            </blockquote>
            <div className="space-y-3">
              <p className="text-lg font-serif font-bold text-emerald">
                👉 Possibilities 2027 is real.
              </p>
              <p className="text-lg font-serif font-bold text-gold">
                Change is possible. Progress is achievable.
              </p>
              <p className="text-base text-muted-foreground mt-4">
                With Eloke O. Victor, our constituency can move forward with confidence and hope. 💪🌍
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
