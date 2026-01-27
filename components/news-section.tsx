"use client";

import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/data/news";

export function NewsSection() {
  return (
    <section id="news" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 mb-4">
              <span className="text-sm font-semibold text-emerald tracking-wider uppercase">
                Media Center
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Campaign <span className="text-gold">Wire</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Stay updated with the latest campaign news, press releases, and community updates.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-6 md:mt-0 border-emerald text-emerald hover:bg-emerald hover:text-white bg-transparent"
          >
            View All Updates
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.title}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-emerald/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Banner */}
              <div className="h-2 bg-gradient-to-r from-emerald to-gold" />

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald/10 text-emerald rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-emerald transition-colors leading-tight">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {item.readTime}
                  </span>
                  <button className="text-sm font-medium text-emerald hover:text-emerald-dark flex items-center gap-1 group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
