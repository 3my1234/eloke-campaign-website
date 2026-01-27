"use client";

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

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
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ring-2 ring-emerald/20 shadow-md">
                <Image
                  src="/images/img2.jpeg"
                  alt="Hon. Eloke O. Victor"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
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
        href="https://wa.me/2349069139404?text=Hello%20Hon.%20Eloke,%20I%20am%20interested%20in%20the%20Fresh%20Ideas%202027%20movement."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Chat with Eloke on WhatsApp"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-charcoal text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block shadow-lg">
          Chat with Eloke
        </span>
      </a>
    </footer>
  );
}
