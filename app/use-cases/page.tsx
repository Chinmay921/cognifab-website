"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Target } from "lucide-react";
import CTASection from "@/components/CTASection";
import { USE_CASES } from "@/lib/constants";

export default function UseCasesPage() {
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
              Use Cases
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
              Real-world applications of automated GHG accounting for manufacturers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-16">
          {USE_CASES.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg border border-border bg-surface"
            >
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {useCase.title}
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {/* Pain */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-500/10">
                        <AlertCircle className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="font-semibold text-foreground">Pain Point</h3>
                    </div>
                    <p className="text-sm text-foreground-secondary">
                      {useCase.pain}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-primary/10">
                        <CheckCircle2 className="h-6 w-6 text-accent-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Solution</h3>
                    </div>
                    <p className="text-sm text-foreground-secondary">
                      {useCase.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-secondary/10">
                        <Target className="h-6 w-6 text-accent-secondary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Outcome</h3>
                    </div>
                    <p className="text-sm text-foreground-secondary">
                      {useCase.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <CTASection
            title="See how Cognifab fits your use case"
            description="Every organization's carbon accounting needs are unique. Let's discuss how our platform can be tailored to your specific requirements."
            primaryCTA={{ text: "Request Demo", href: "/contact" }}
            secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
          />
        </div>
      </section>
    </div>
  );
}
