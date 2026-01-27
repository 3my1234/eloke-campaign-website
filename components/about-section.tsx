"use client";

import { CheckCircle2, Award, Heart, Users } from "lucide-react";
import Image from "next/image";

const qualities = [
  { icon: CheckCircle2, text: "A man of integrity who stands firm through thick and thin" },
  { icon: Heart, text: "One of us who truly feels the pain of the people" },
  { icon: Award, text: "Proven track record of grassroots development" },
  { icon: Users, text: "Champion of youth empowerment and inclusion" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-emerald/5 blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/img2.jpeg"
                  alt="Hon. Eloke O. Victor in traditional attire"
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating accent card */}
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-emerald text-white p-4 sm:p-6 rounded-xl shadow-xl max-w-[85%] sm:max-w-xs">
                <p className="font-serif font-bold text-base sm:text-lg mb-2">&quot;One of Us&quot;</p>
                <p className="text-xs sm:text-sm text-white/80">A man of honesty, integrity, and proven character</p>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-gold rounded-tl-2xl" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 mb-6">
              <span className="text-sm font-semibold text-emerald tracking-wider uppercase">
                About the Candidate
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              The Leader We Have Been <span className="text-emerald">Waiting For</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="text-foreground font-semibold">Hon. Eloke O. Victor is the leader we have been waiting for.</span> A man who has stood firm with his people through thick and thin. A man who cries out for genuine change, not for personal gain, but for the progress of our land. A man of honesty, integrity, and proven character.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hon. Eloke O. Victor understands the challenges facing Igueben, Esan Central, and Esan West Federal Constituency because <span className="text-foreground font-medium">he is one of us</span>. He listens to the people, feels their pains, and is determined to turn their hopes into reality through effective and people-oriented representation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              His commitment to grassroots development, youth empowerment, quality education, improved healthcare, and economic opportunities makes him <span className="text-foreground font-medium">the right choice for this time and season</span>.
            </p>

            {/* Qualities List */}
            <div className="space-y-4 mb-8">
              {qualities.map((quality) => (
                <div key={quality.text} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <quality.icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{quality.text}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-emerald">15+</p>
                <p className="text-sm text-muted-foreground">Years of Service</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-gold">1000+</p>
                <p className="text-sm text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-emerald">3</p>
                <p className="text-sm text-muted-foreground">LGAs United</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
