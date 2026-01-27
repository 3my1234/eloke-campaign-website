"use client";

import React from "react"

import { useState } from "react";
import { User, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function VolunteerSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lga: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          lga: formData.lga,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit registration");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting volunteer registration:", error);
      alert("Failed to submit registration. Please try again.");
    }
  };

  return (
    <section id="volunteer" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <span className="text-sm font-semibold text-gold tracking-wider uppercase">
                Get Involved
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Join the <span className="text-emerald">Movement</span> for Change
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Be part of history. Join thousands of volunteers working to bring
              fresh ideas and purposeful leadership to our constituency. Together,
              we can make <span className="text-foreground font-medium">Possibilities 2027</span> a reality.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                "Be part of a grassroots movement transforming Esan Land",
                "Receive exclusive campaign updates and resources",
                "Connect with like-minded individuals in your ward",
                "Make a real difference in your community",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-emerald"
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
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-background rounded-2xl shadow-xl border border-border p-8">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Volunteer Registration
                </h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below to join our volunteer network.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="pl-10 h-12"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="pl-10 h-12"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="pl-10 h-12"
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
                      <SelectTrigger className="pl-10 h-12">
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
                    className="w-full h-12 bg-emerald hover:bg-emerald-dark text-white font-semibold text-base"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    Submit Registration
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
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
                  Thank You for Joining!
                </h3>
                <p className="text-muted-foreground">
                  Welcome to the movement. We&apos;ll be in touch soon with next steps.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
