"use client";

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { label: "The Vision", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Manifesto", href: "#possibilities" },
  { label: "Philanthropy", href: "#philanthropy" },
  { label: "News Room", href: "#news" },
  { label: "Get Involved", href: "#volunteer" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white relative">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-emerald via-gold to-emerald" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">EOV</span>
              </div>
              <div>
                <p className="font-serif font-bold text-white text-lg">Eloke O. Victor</p>
                <p className="text-xs text-gold font-semibold tracking-wider">
                  FRESH IDEAS 2027
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A vision of hope, progress, and purposeful leadership for Igueben, 
              Esan Central & Esan West Federal Constituency.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-gold">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@elokevictor2027.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-emerald" />
                  <span className="text-sm">info@elokevictor2027.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+2348012345678" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-emerald" />
                  <span className="text-sm">+234 801 234 5678</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Campaign Office, Igueben, Edo State, Nigeria
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Campaign Branding */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-gold">Our Slogans</h3>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
              <div>
                <p className="text-xl font-serif font-bold text-emerald mb-1">
                  Fresh Ideas
                </p>
                <p className="text-3xl font-serif font-bold text-gold">2027</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xl font-serif font-bold text-white mb-1">
                  Possibilities
                </p>
                <p className="text-3xl font-serif font-bold text-gold">2027</p>
              </div>
              <p className="text-sm text-white/60 leading-relaxed pt-4 border-t border-white/10">
                &quot;This is not just about politics; it is about service, growth, 
                and a better tomorrow.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2027 Hon. Eloke O. Victor Campaign. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2348012345678?text=Hello%20Hon.%20Eloke,%20I%20am%20interested%20in%20the%20Fresh%20Ideas%202027%20movement."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50 group"
        aria-label="Chat with Eloke on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-charcoal text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Chat with Eloke
        </span>
      </a>
    </footer>
  );
}
