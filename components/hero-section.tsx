"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-emerald/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald/10 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-32 right-10 w-48 h-48 rounded-full bg-emerald/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-medium text-emerald">
                Fresh Ideas 2027
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
              <span className="text-emerald">THE RIGHT MAN</span>
              <br />
              IS HERE
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              <span className="text-foreground font-semibold">Eloke O. Victor is an instrument of change</span> for our constituency. A man whose vision speaks hope, progress, and purposeful leadership.{" "}
              <span className="text-foreground font-medium">
                &quot;This is not just about politics; it is about service, growth,
                and a better tomorrow.&quot;
              </span>
            </p>

            {/* Position */}
            <div className="mb-8 animate-fade-in-up animation-delay-200">
              <p className="text-sm text-gold font-semibold tracking-wider uppercase mb-1">
                Candidate for
              </p>
              <p className="text-lg font-serif font-bold text-foreground">
                Member, House of Representatives
              </p>
              <p className="text-muted-foreground">
                Igueben, Esan Central & Esan West Federal Constituency
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <a href="#possibilities">
                <Button
                  size="lg"
                  className="bg-emerald hover:bg-emerald-dark text-white font-semibold px-8 h-14 text-base group"
                >
                  View the 2027 Manifesto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#volunteer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white font-semibold px-8 h-14 text-base group bg-transparent"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Join the Volunteers
                </Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-emerald via-gold/50 to-emerald opacity-20 blur-xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-gold rounded-tr-3xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-emerald rounded-bl-3xl" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/img1.jpeg"
                  alt="Hon. Eloke O. Victor"
                  width={500}
                  height={600}
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gold text-charcoal px-6 py-3 rounded-full font-serif font-bold shadow-lg">
                Possibilities 2027
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-emerald rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
