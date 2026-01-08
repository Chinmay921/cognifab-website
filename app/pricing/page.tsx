"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants";

export default function PricingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-surface px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Pricing That Scales With You
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
              From single-entity reporting to enterprise-wide assurance preparation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-lg border ${
                  tier.highlighted
                    ? "border-accent-primary bg-surface shadow-xl ring-2 ring-accent-primary"
                    : "border-border bg-surface"
                } p-8`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-full bg-accent-primary px-4 py-1 text-xs font-semibold text-background">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-sm text-foreground-secondary">
                    {tier.description}
                  </p>
                </div>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                      <span className="text-sm text-foreground-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`group flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-medium transition-colors ${
                      tier.highlighted
                        ? "bg-accent-primary text-background hover:bg-accent-hover"
                        : "border border-border bg-transparent text-foreground hover:border-accent-primary hover:text-accent-primary"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-foreground-secondary">
              All plans include onboarding, training, and ongoing email support.
              <br />
              Need a custom solution?{" "}
              <Link href="/contact" className="text-accent-primary hover:text-accent-hover">
                Contact us
              </Link>{" "}
              to discuss your requirements.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
