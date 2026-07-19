import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              ISLA VIDA MYKONOS
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-muted">
              Private transfers, chauffeur services, and premium island transportation across
              Mykonos. Available 24/7.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-navy-muted">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors">
                  Fleet
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-muted">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="https://wa.me/306948041931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp +30 694 804 1931
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@islavidajmk.com"
                  className="hover:text-white transition-colors"
                >
                  info@islavidajmk.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Mykonos, Cyclades, Greece</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://www.instagram.com/islavida_mykonos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @islavida_mykonos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-navy-muted">
          <p>&copy; {new Date().getFullYear()} Isla Vida Mykonos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
