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

interface NavLink {
  to: string;
  label: string;
}

interface NavItem extends NavLink {
  /** Pages shown in a dropdown under this item. The first one is the item itself. */
  children?: NavLink[];
  /**
   * Pages that belong to this item without crowding the menu. They appear as a
   * slim bar under the header, only while the visitor is on one of them.
   */
  section?: NavLink[];
}

// The menu. To add a page, add a line here; nothing else in this file changes.
const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/services",
    label: "Services",
    section: [
      { to: "/services", label: "All Services" },
      { to: "/mykonos-cruise-port-transfers", label: "Cruise Port Transfers" },
      { to: "/fleet", label: "Our Fleet" },
    ],
  },
  {
    to: "/concierge",
    label: "Concierge",
    children: [
      { to: "/concierge", label: "Concierge Services" },
      { to: "/concierge/restaurants-beach-clubs", label: "Restaurants & Beach Clubs" },
      { to: "/concierge/nightlife-vip-tables", label: "Nightlife & VIP Tables" },
    ],
  },
  { to: "/villas", label: "Villas" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // A link is active on its own page and on pages below it (/villas/some-villa).
  const isActive = (to: string) =>
    pathname === to || (to !== "/" && pathname.startsWith(`${to}/`));
  const isGroupActive = (item: NavItem) =>
    isActive(item.to) ||
    [...(item.children ?? []), ...(item.section ?? [])].some((page) => isActive(page.to));
  // The section bar to show, if the visitor is inside a section.
  const section = navItems.find(
    (item) => item.section && item.section.some((page) => isActive(page.to)),
  )?.section;

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

        {/* The full menu needs laptop width; smaller screens get the button below. */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.to}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`h-auto gap-1 px-0 font-medium tracking-wide hover:bg-transparent hover:text-navy-accent ${
                      isGroupActive(item) ? "text-navy" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.to} asChild>
                      <Link to={child.to}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-navy-accent ${
                  isActive(item.to) ? "text-navy" : "text-muted-foreground"
                }`}
              >
                {item.label}
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
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.to} className="flex flex-col gap-3">
                <Link
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium ${
                    isGroupActive(item) ? "text-navy" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
                {/* The first child repeats the item above, so it is skipped here. */}
                {item.children && (
                  <div className="flex flex-col gap-3 border-l border-border pl-4">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm ${
                          isActive(child.to) ? "text-navy" : "text-muted-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
      {section && (
        <nav
          aria-label="In this section"
          className="border-t border-border bg-secondary/60"
        >
          <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
            {section.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                aria-current={isActive(page.to) ? "page" : undefined}
                className={`whitespace-nowrap border-b-2 py-2.5 text-xs font-medium uppercase tracking-widest transition-colors hover:text-navy-accent ${
                  isActive(page.to)
                    ? "border-navy text-navy"
                    : "border-transparent text-muted-foreground"
                }`}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
