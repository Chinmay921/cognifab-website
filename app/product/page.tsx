"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Database, Cog, FileCheck } from "lucide-react";
import FeatureGrid from "@/components/FeatureGrid";
import ScopeTabs from "@/components/ScopeTabs";
import CTASection from "@/components/CTASection";
import { FEATURES } from "@/lib/constants";

export default function ProductPage() {
  const architectureSteps = [
    {
      title: "Data Inputs",
      items: [
        "ERP exports (AP, GL, invoice data)",
        "Utility bills (electricity, natural gas, steam)",
        "Fuel logs (vehicles, generators, boilers)",
        "Travel & logistics data",
        "HR systems (headcount for commuting)",
      ],
    },
    {
      title: "Emission Factors Library",
      items: [
        "GHG Protocol compliant factors",
        "Regional grid electricity factors",
        "IPCC global warming potentials",
        "Versioned updates with full history",
      ],
    },
    {
      title: "Calculation Engine",
      items: [
        "Activity data × emission factor",
        "FX conversion (monthly avg rates)",
        "Multi-entity consolidation",
        "Protected formulas & audit trail",
      ],
    },
    {
      title: "Reporting Outputs",
      items: [
        "Emissions inventory by scope",
        "Entity-level breakdowns",
        "Multi-year trend analysis",
        "Executive dashboards",
      ],
    },
  ];

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
              Corporate GHG Accounting Engine
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
              Purpose-built for audit-ready emissions reporting. GHG Protocol &
              ISO 14064-1 aligned, governance-focused, repeatable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-b border-border bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Core Features
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Everything you need for standards-aligned carbon accounting
            </p>
          </motion.div>

          <div className="mt-16">
            <FeatureGrid features={FEATURES} />
          </div>
        </div>
      </section>

      {/* Scope Coverage */}
      <section className="border-b border-border bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Detailed Scope Coverage
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Comprehensive emissions categories across Scope 1, 2, and selected
              Scope 3
            </p>
          </motion.div>

          <div className="mt-12">
            <ScopeTabs />
          </div>
        </div>
      </section>

      {/* Standards Mapping */}
      <section className="border-b border-border bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Standards Alignment
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Built-in mapping to GHG Protocol and ISO 14064-1 requirements
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border border-border bg-surface p-8"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                GHG Protocol Corporate Standard
              </h3>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-foreground-secondary">
                    Scope 1, 2, and 3 categorization
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-foreground-secondary">
                    Operational vs. financial control boundaries
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-foreground-secondary">
                    Market-based and location-based Scope 2
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-foreground-secondary">
                    Base year recalculation guidance
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border border-border bg-surface p-8"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                ISO 14064-1:2018
              </h3>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-foreground-secondary">
                    Direct & indirect GHG emission categories
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-foreground-secondary">
                    Organizational boundary definition
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-foreground-secondary">
                    Quantification methodology requirements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-foreground-secondary">
                    Quality management and documentation
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-border bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Platform Architecture
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              From raw data inputs to audit-ready reports
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {architectureSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index < architectureSteps.length - 1 && (
                  <div className="absolute -right-4 top-6 hidden h-0.5 w-8 bg-accent-primary lg:block" />
                )}
                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent-primary/10">
                    {index === 0 && <Database className="h-6 w-6 text-accent-primary" />}
                    {index === 1 && <FileCheck className="h-6 w-6 text-accent-primary" />}
                    {index === 2 && <Cog className="h-6 w-6 text-accent-primary" />}
                    {index === 3 && <FileCheck className="h-6 w-6 text-accent-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-foreground-secondary"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <CTASection
            title="Ready to automate your emissions reporting?"
            description="See how Cognifab can transform your carbon accounting from manual chaos to audit-ready confidence."
            primaryCTA={{ text: "Request Demo", href: "/contact" }}
            secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
          />
        </div>
      </section>
    </div>
  );
}
