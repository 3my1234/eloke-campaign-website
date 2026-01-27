"use client";

import React from "react"

import { useState, useEffect } from "react";
import { X, Mail, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    lga: "",
  });

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem("eloke-newsletter-seen");
    if (!hasSeenModal) {
      // Show modal after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save form data to JSON file via API
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          lga: formData.lga,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save subscription");
      }
    } catch (error) {
      console.error("Error saving newsletter subscription:", error);
      // Still proceed with success state even if save fails
    }

    // Store that user has seen the modal
    localStorage.setItem("eloke-newsletter-seen", "true");
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  const handleClose = () => {
    localStorage.setItem("eloke-newsletter-seen", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
        onClick={handleClose}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-background rounded-xl shadow-2xl animate-scale-in overflow-hidden">
        {/* Gold accent line */}
        <div className="h-1.5 bg-gradient-to-r from-emerald via-gold to-emerald" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald/10 mb-4">
                  <Mail className="w-8 h-8 text-emerald" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Join the Movement for Change
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Stay connected with Hon. Eloke O. Victor&apos;s campaign. Be
                  the first to receive updates on{" "}
                  <span className="text-emerald font-semibold">
                    Fresh Ideas 2027
                  </span>
                  .
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-10 h-12 border-border focus:border-emerald focus:ring-emerald"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-10 h-12 border-border focus:border-emerald focus:ring-emerald"
                    required
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                  <Select
                    value={formData.lga}
                    onValueChange={(value) =>
                      setFormData({ ...formData, lga: value })
                    }
                    required
                  >
                    <SelectTrigger className="pl-10 h-12 border-border focus:border-emerald focus:ring-emerald">
                      <SelectValue placeholder="Select Your LGA" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="igueben">Igueben</SelectItem>
                      <SelectItem value="esan-central">Esan Central</SelectItem>
                      <SelectItem value="esan-west">Esan West</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-emerald hover:bg-emerald-dark text-white font-semibold text-base transition-all duration-300"
                >
                  Join the Movement
                </Button>
              </form>

              {/* Footer text */}
              <p className="text-xs text-center text-muted-foreground mt-4">
                By subscribing, you agree to receive campaign updates. We
                respect your privacy.
              </p>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald/10 mb-4">
                <svg
                  className="w-10 h-10 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Welcome to the Movement!
              </h3>
              <p className="text-muted-foreground">
                Thank you for joining us. Together, we&apos;ll build a better
                future for Esan Land.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
