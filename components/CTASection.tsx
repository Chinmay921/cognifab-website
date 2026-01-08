"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-elevated">
      <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">{description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-background transition-colors hover:bg-accent-hover"
              >
                {primaryCTA.text}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-base font-medium text-foreground transition-colors hover:border-accent-primary hover:text-accent-primary"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </motion.div>

        {/* Decorative element */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-secondary/10 blur-3xl" />
      </div>
    </section>
  );
}
