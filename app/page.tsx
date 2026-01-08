"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Database,
  Calculator,
  FileText,
  CheckCircle2,
  Rocket,
  ArrowRight,
  Download,
} from "lucide-react";
import FeatureGrid from "@/components/FeatureGrid";
import ScopeTabs from "@/components/ScopeTabs";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import { FEATURES } from "@/lib/constants";

export default function Home() {
  const problemPoints = [
    {
      icon: AlertTriangle,
      title: "Carbon Blindness",
      description:
        "Missing CO2 data across operations makes it impossible to report emissions with confidence or meet stakeholder demands.",
    },
    {
      icon: FileText,
      title: "Weak Audit Trails",
      description:
        "Spreadsheet chaos and unprotected formulas mean external auditors reject your emissions data before assurance even begins.",
    },
    {
      icon: Calculator,
      title: "Inconsistent Methodologies",
      description:
        "Every team calculates emissions differently, creating incomparable results that fail regulatory scrutiny.",
    },
  ];

  const solutionSteps = [
    {
      icon: Database,
      step: "01",
      title: "Ingest",
      description:
        "Centralize operational and spend data from ERP, fuel logs, utility bills, and travel systems.",
    },
    {
      icon: Calculator,
      step: "02",
      title: "Calculate",
      description:
        "Apply GHG Protocol & ISO 14064-1 aligned methodologies with versioned emission factors.",
    },
    {
      icon: FileText,
      step: "03",
      title: "Report",
      description:
        "Generate audit-ready emissions inventories with full traceability and governance controls.",
    },
  ];

  const auditReadinessPoints = [
    "Protected formulas prevent unauthorized modifications to calculation logic",
    "Version-controlled emission factors library with clear documentation",
    "Complete audit trail from raw data through to final emissions outputs",
    "Controlled inputs with role-based access for data entry and approval",
  ];

  const accordionItems = [
    {
      title: "What's Included",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold text-foreground">Scope Coverage</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
                <span>Full Scope 1 (stationary, mobile, fugitive emissions)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
                <span>
                  Full Scope 2 (location-based and market-based methodologies)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
                <span>
                  Selected Scope 3 categories (1, 2, 3, 4, 5, 6, 7 - see Product
                  page)
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground">
              Standards Alignment
            </h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
                <span>GHG Protocol Corporate Accounting & Reporting Standard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
                <span>ISO 14064-1:2018 organizational quantification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
                <span>CSRD/ESRS E1 disclosure requirements</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground">
              Automation Features
            </h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
                <span>
                  FX conversion with monthly average rates by currency pair
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
                <span>Multi-entity consolidation with equity/control boundaries</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
                <span>
                  Multi-year tracking for base year recalculation and trend
                  analysis
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "What's Excluded (Current Version)",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold text-foreground-secondary">
              Scope 3 Downstream Categories
            </h4>
            <p className="mb-2 text-foreground-tertiary">
              Categories 8-15 are not currently covered:
            </p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-foreground-tertiary">•</span>
                <span className="text-foreground-tertiary">
                  Downstream transportation and distribution
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground-tertiary">•</span>
                <span className="text-foreground-tertiary">
                  Processing and use of sold products
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground-tertiary">•</span>
                <span className="text-foreground-tertiary">
                  End-of-life treatment of sold products
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground-secondary">
              Process Emissions & LCA
            </h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-foreground-tertiary">•</span>
                <span className="text-foreground-tertiary">
                  Chemical process emissions (e.g., cement calcination)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground-tertiary">•</span>
                <span className="text-foreground-tertiary">
                  Product-level life cycle assessment (LCA)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground-tertiary">•</span>
                <span className="text-foreground-tertiary">
                  Downstream value chain emissions beyond category 7
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm italic text-foreground-tertiary">
              These boundaries ensure focused, auditable results for corporate
              Scope 1, 2, and selected Scope 3 reporting.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-surface px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Audit-Ready Corporate Emissions
              <span className="block text-accent-primary">Automated</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground-secondary sm:text-xl">
              Transform operational and spend data into GHG Protocol & ISO 14064-1
              aligned reports. No more spreadsheet chaos, no more audit rejections.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-8 py-4 text-base font-medium text-background transition-colors hover:bg-accent-hover"
              >
                Request Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent px-8 py-4 text-base font-medium text-foreground transition-colors hover:border-accent-primary hover:text-accent-primary"
              >
                <Download className="h-5 w-5" />
                View Sample Output
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-secondary/5 blur-3xl" />
      </section>

      {/* Problem Section */}
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
              The Carbon Accounting Challenge
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Organizations struggle with fragmented data, inconsistent
              methodologies, and audit rejections
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {problemPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                    <Icon className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-foreground-secondary">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="border-b border-border bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Three Steps to Audit-Ready Emissions
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Cognifab automates the entire emissions accounting workflow
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {solutionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connector line for desktop */}
                  {index < solutionSteps.length - 1 && (
                    <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-accent-primary to-transparent lg:block" />
                  )}

                  <div className="relative rounded-lg border border-border bg-background p-8">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="text-5xl font-bold text-accent-primary/20">
                        {step.step}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-primary">
                        <Icon className="h-6 w-6 text-background" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-foreground-secondary">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              Comprehensive GHG Accounting Platform
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Everything you need for standards-aligned, audit-ready emissions
              reporting
            </p>
          </motion.div>

          <div className="mt-16">
            <FeatureGrid features={FEATURES} />
          </div>
        </div>
      </section>

      {/* Scope Coverage Section */}
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
              Full Scope 1, 2 & Selected Scope 3 Coverage
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Comprehensive emissions tracking across all major categories
            </p>
          </motion.div>

          <div className="mt-12">
            <ScopeTabs />
          </div>
        </div>
      </section>

      {/* What's Included/Excluded Accordion */}
      <section className="border-b border-border bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Transparent Boundaries
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Clear about what's covered and what's not
            </p>
          </motion.div>

          <div className="mt-12">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      {/* Audit Readiness Section */}
      <section className="border-b border-border bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Built for External Assurance
                </h2>
                <p className="mt-4 text-lg text-foreground-secondary">
                  Pass limited or reasonable assurance engagements with confidence
                </p>
                <ul className="mt-8 space-y-4">
                  {auditReadinessPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent-secondary" />
                      <span className="text-foreground-secondary">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-background p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent-secondary/10">
                      <CheckCircle2 className="h-6 w-6 text-accent-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Protected Formulas
                      </h3>
                      <p className="mt-1 text-sm text-foreground-secondary">
                        Calculation logic locked to prevent unauthorized changes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent-secondary/10">
                      <CheckCircle2 className="h-6 w-6 text-accent-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Version Control
                      </h3>
                      <p className="mt-1 text-sm text-foreground-secondary">
                        Full history of emission factor updates and methodology
                        changes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent-secondary/10">
                      <CheckCircle2 className="h-6 w-6 text-accent-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Traceability
                      </h3>
                      <p className="mt-1 text-sm text-foreground-secondary">
                        From raw input data to final emissions output in clear audit
                        trail
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Teaser Section */}
      <section className="border-b border-border bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 p-8 lg:p-12"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-primary">
                <Rocket className="h-6 w-6 text-background" />
              </div>
              <div>
                <div className="inline-block rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
                  COMING SOON
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                  The Cognifab Vision: Manufacturing 5.0
                </h2>
                <p className="mt-4 text-foreground-secondary">
                  We're building an AI-powered sustainable manufacturing platform
                  that brings carbon intelligence to every quote and production
                  decision. Imagine knowing the emissions impact before you
                  manufacture—not after.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-2 text-accent-primary transition-colors hover:text-accent-hover"
                >
                  Learn about our roadmap
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <CTASection
            title="See your emissions inventory in days, not months"
            description="Transform your carbon accounting from spreadsheet chaos to audit-ready reporting with Cognifab's automated GHG accounting engine."
            primaryCTA={{ text: "Request Demo", href: "/contact" }}
            secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
          />
        </div>
      </section>
    </div>
  );
}
