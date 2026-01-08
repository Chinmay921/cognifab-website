"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Target, Eye, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
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
              Making Manufacturing Intelligent, Sustainable, and Accessible
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
              Cognifab exists to bring carbon transparency and AI-powered
              intelligence to manufacturing operations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-b border-border bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10">
                <Target className="h-8 w-8 text-accent-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Our Mission
              </h2>
              <p className="mt-4 text-foreground-secondary">
                Empower manufacturers with actionable carbon intelligence at every
                decision point—from quote to production to reporting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-secondary/10">
                <Eye className="h-8 w-8 text-accent-secondary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Our Vision
              </h2>
              <p className="mt-4 text-foreground-secondary">
                A world where every manufacturing decision is informed by real-time
                sustainability data, not hindsight calculations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10">
                <Rocket className="h-8 w-8 text-accent-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Our Approach
              </h2>
              <p className="mt-4 text-foreground-secondary">
                Start with audit-ready corporate accounting, then scale to
                quote-level carbon intelligence for every part and process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-b border-border bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-foreground">
              Why We Built Cognifab
            </h2>
            <div className="mt-6 space-y-4 text-lg text-foreground-secondary">
              <p>
                Manufacturing is responsible for a significant portion of global
                emissions, yet most companies still calculate their carbon footprint
                months after production using spreadsheets and guesswork.
              </p>
              <p>
                We've seen organizations struggle with fragmented data, inconsistent
                methodologies, and audit rejections. Finance teams can't track
                reduction initiatives. Sustainability managers spend weeks
                consolidating data from multiple sources. Auditors reject emissions
                inventories due to weak documentation.
              </p>
              <p>
                Cognifab solves this by automating corporate GHG accounting with
                audit-ready governance from day one. But we're not stopping there.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="border-b border-border bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block rounded-full bg-accent-primary/10 px-4 py-2 text-sm font-semibold text-accent-primary">
              FUTURE ROADMAP
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl">
              The Path to Manufacturing 5.0
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground-secondary">
              Our vision extends beyond retrospective reporting to real-time carbon
              intelligence embedded in every manufacturing operation.
            </p>
          </motion.div>

          <div className="mt-16 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border border-border bg-surface p-8"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-secondary text-background">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Phase 1: Corporate GHG Accounting (Current)
                  </h3>
                  <p className="mt-2 text-foreground-secondary">
                    Audit-ready Scope 1, 2, and selected Scope 3 emissions
                    reporting for manufacturers. Full governance, traceability, and
                    standards alignment.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-lg border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 p-8"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-primary text-background">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Phase 2: Quote-Level Carbon Intelligence (Coming Soon)
                  </h3>
                  <p className="mt-2 text-foreground-secondary">
                    Real-time emissions calculation for every quote and production
                    order. Understand the carbon impact before you manufacture, not
                    after. Optimize material selection, process routing, and
                    supplier choices for lower emissions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 p-8"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-primary text-background">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Phase 3: AI-Powered Manufacturing Platform (Vision)
                  </h3>
                  <p className="mt-2 text-foreground-secondary">
                    Autonomous optimization of production schedules, material
                    selection, and process parameters for minimum emissions and
                    maximum efficiency. AI agents that learn from every part, every
                    process, and every supplier to deliver sustainable manufacturing
                    at scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-b border-border bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-foreground">
              Built by Experts in Manufacturing & Sustainability
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Our team combines deep domain expertise in manufacturing operations,
              carbon accounting standards, and enterprise software to deliver
              audit-ready solutions that scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <CTASection
            title="Join us on the journey to Manufacturing 5.0"
            description="Start with audit-ready emissions reporting today. Scale to quote-level carbon intelligence tomorrow."
            primaryCTA={{ text: "Request Demo", href: "/contact" }}
            secondaryCTA={{ text: "View Product", href: "/product" }}
          />
        </div>
      </section>
    </div>
  );
}
