import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO, COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt={COMPANY_INFO.name}
                width={150}
                height={50}
                className="h-auto w-auto max-h-10"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm text-foreground-secondary">
              {COMPANY_INFO.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary transition-colors hover:text-accent-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-foreground-secondary transition-colors hover:text-accent-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-secondary transition-colors hover:text-accent-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-foreground-secondary transition-colors hover:text-accent-primary"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground-secondary transition-colors hover:text-accent-primary"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-foreground-tertiary">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
