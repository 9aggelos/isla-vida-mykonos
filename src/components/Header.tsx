import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/villas", label: "Villas" },
  { to: "/fleet", label: "Fleet" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { to: "/services", label: "All Services" },
  { to: "/mykonos-cruise-port-transfers", label: "Cruise Port Transfers" },
];

const mobileLinks = [
  ...navLinks.slice(0, 2),
  serviceLinks[1],
  ...navLinks.slice(2),
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // A link is active on its own page and on pages below it (/villas/some-villa).
  const isActive = (to: string) =>
    pathname === to || (to !== "/" && pathname.startsWith(`${to}/`));
  const servicesActive = serviceLinks.some((link) => isActive(link.to));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-isla-vida-transparent.webp"
            alt="Isla Vida Mykonos logo"
            width={160}
            height={160}
            decoding="async"
            fetchPriority="high"
            className="h-10 w-auto drop-shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-display text-3xl font-semibold tracking-[0.25em] text-navy">
              ISLA VIDA
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-widest text-muted-foreground sm:inline">
              Mykonos
            </span>
          </div>
        </Link>

        {/* Seven links do not fit on a tablet, so the full menu starts at laptop width. */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) =>
            link.to === "/services" ? (
              <DropdownMenu key={link.to}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`h-auto gap-1 px-0 font-medium tracking-wide hover:bg-transparent hover:text-navy-accent ${
                      servicesActive ? "text-navy" : "text-muted-foreground"
                    }`}
                  >
                    Services
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {serviceLinks.map((item) => (
                    <DropdownMenuItem key={item.to} asChild>
                      <Link to={item.to}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-navy-accent ${
                  isActive(link.to) ? "text-navy" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href="https://wa.me/306948041931"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Now
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {mobileLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium ${
                  isActive(link.to) ? "text-navy" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/306948041931"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
