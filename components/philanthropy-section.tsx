"use client";

import { Award, Users, Home, BookOpen } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const achievements = [
  {
    icon: Award,
    title: "Youth Empowerment",
    description:
      "Sponsored skills acquisition programs for over 1000 young people across the three LGAs.",
    metric: 1000,
    metricLabel: "Students",
    suffix: "+",
  },
  {
    icon: Home,
    title: "Community Development",
    description:
      "Funded road repairs, borehole projects, and community centers in rural areas.",
    metric: 50,
    metricLabel: "Boreholes",
    suffix: "+",
  },
  {
    icon: BookOpen,
    title: "Educational Support",
    description:
      "Provided scholarships and learning materials to students from primary to university level.",
    metric: 1000,
    metricLabel: "Students",
    suffix: "+",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description:
      "Established micro-finance schemes and business training for women entrepreneurs.",
    metric: 300,
    metricLabel: "Women Empowered",
    suffix: "+",
  },
];

// Count-up component
function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <p ref={ref} className="text-2xl font-serif font-bold text-gold">
      {count.toLocaleString()}{suffix}
    </p>
  );
}

export function PhilanthropySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="philanthropy"
      className="py-24 bg-charcoal text-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.2),_transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-6">
            <span className="text-sm font-semibold text-gold tracking-wider uppercase">
              Proof of Capacity
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Leadership in <span className="text-gold">Action</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Hon. Eloke O. Victor has consistently demonstrated his commitment to
            the people through tangible philanthropic efforts.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/img4.jpeg"
                    alt="Hon. Eloke O. Victor"
                    width={300}
                    height={350}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/img3.jpeg"
                    alt="Fresh Ideas 2027 Campaign"
                    width={300}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg h-full">
                  <Image
                    src="/images/img2.jpeg"
                    alt="Hon. Eloke O. Victor in traditional attire"
                    width={300}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Floating quote */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-emerald text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl max-w-[90%] sm:max-w-none">
              <span className="font-serif font-bold text-sm sm:text-base text-center block">Touching Lives, Building Futures</span>
            </div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                  <achievement.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <CountUp end={achievement.metric} suffix={achievement.suffix} />
                  <p className="text-xs text-white/50 mt-1">{achievement.metricLabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
