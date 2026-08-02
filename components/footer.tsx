import Link from 'next/link';
import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/about' },
  { label: 'Privacy', href: '/about' },
  { label: 'Terms', href: '/about' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span className="text-base font-semibold">
                Money<span className="text-primary">Maker</span>
              </span>
            </Link>
            <p className="max-w-xs text-center text-sm text-muted-foreground md:text-left">
              Find the business you can start today.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MoneyMaker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
