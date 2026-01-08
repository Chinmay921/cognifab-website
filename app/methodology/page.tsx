"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";

export default function MethodologyPage() {
  const boundarySetting = [
    "Organizational boundaries: Operational control, financial control, or equity share approaches",
    "Operational boundaries: Included and excluded emission sources by scope",
    "Geographic boundaries: Facilities and entities within reporting scope",
    "Temporal boundaries: Base year selection and reporting period definition",
  ];

  const auditChecklist = [
    "Documented organizational and operational boundaries",
    "Data collection procedures with assigned responsibilities",
    "Emission factor sources and version control",
    "Calculation methodologies aligned with GHG Protocol and ISO 14064-1",
    "Quality assurance and quality control procedures",
    "Uncertainty assessment and data quality indicators",
    "Management review and approval workflows",
    "Audit trail from source data to final emissions outputs",
  ];

  const outOfScope = [
    {
      category: "Process Emissions",
      items: [
        "Chemical reactions (e.g., cement calcination, ammonia production)",
        "Industrial gases beyond standard combustion",
        "Biogenic CO2 from non-energy uses",
      ],
    },
    {
      category: "Scope 3 Downstream",
      items: [
        "Categories 8-15 (downstream transportation, use of sold products, etc.)",
        "Product life cycle assessment (LCA)",
        "End-of-life treatment beyond category 5 (waste generated in operations)",
      ],
    },
    {
      category: "Offsets & Removals",
      items: [
        "Carbon credits or offsets (report gross emissions only)",
        "Carbon removal projects",
        "Renewable energy certificates (RECs) - reported separately for market-based Scope 2",
      ],
    },
  ];

  const accordionItems = [
    {
      title: "Emission Factors Library",
      content: (
        <div className="space-y-4">
          <p>
            Our emission factors library draws from internationally recognized
            sources and is version-controlled with full update history:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
              <span>
                <strong>Electricity:</strong> IEA national grid factors,
                location-based and market-based methodologies
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
              <span>
                <strong>Fuels:</strong> IPCC default factors for combustion, DEFRA
                conversion factors
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
              <span>
                <strong>Scope 3:</strong> GHG Protocol Scope 3 calculation guidance,
                EXIOBASE spend-based factors
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
              <span>
                <strong>Refrigerants:</strong> IPCC AR6 global warming potentials
                (GWPs)
              </span>
            </li>
          </ul>
          <p className="text-sm italic">
            All emission factors are versioned and documented with source
            references for audit trail purposes.
          </p>
        </div>
      ),
    },
    {
      title: "Market-Based vs Location-Based Scope 2",
      content: (
        <div className="space-y-4">
          <p>
            We calculate both methodologies as required by the GHG Protocol Scope 2
            Guidance:
          </p>
          <div>
            <h4 className="mb-2 font-semibold">Location-Based Method</h4>
            <p className="text-sm">
              Uses average emission factors for the electricity grid where
              consumption occurs. Based on published grid emission factors (e.g.,
              IEA, EPA eGRID).
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Market-Based Method</h4>
            <p className="text-sm">
              Reflects emissions from specific contractual instruments:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  Renewable Energy Certificates (RECs) or Guarantees of Origin
                  (GOs)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Power Purchase Agreements (PPAs)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Supplier-specific emission rates</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Residual mix factors where no instruments exist</span>
              </li>
            </ul>
          </div>
          <p className="text-sm italic">
            Both values are reported for full transparency and regulatory
            compliance.
          </p>
        </div>
      ),
    },
    {
      title: "FX Conversion Logic",
      content: (
        <div className="space-y-4">
          <p>
            Foreign exchange conversion uses monthly average rates for spend-based
            Scope 3 calculations:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
              <span>
                Monthly average rates sourced from central bank data (e.g., ECB,
                Federal Reserve)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
              <span>
                Spend data converted to a common reporting currency (e.g., USD,
                EUR) before applying emission factors
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-secondary" />
              <span>
                Version-controlled rate tables for multi-year consistency and audit
                trail
              </span>
            </li>
          </ul>
        </div>
      ),
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
              Methodology & Standards
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
              Transparent, auditable, and aligned with GHG Protocol & ISO 14064-1
            </p>
          </motion.div>
        </div>
      </section>

      {/* Boundary Setting */}
      <section className="border-b border-border bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-foreground">
              Boundary Setting Approaches
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Clear definition of what's in and out of your emissions inventory
            </p>
            <ul className="mt-8 space-y-4">
              {boundarySetting.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent-secondary" />
                  <span className="text-foreground-secondary">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Methodology Details Accordion */}
      <section className="border-b border-border bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-foreground">
              Methodology Deep Dive
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Detailed approaches to emission factors, Scope 2 methodologies, and FX
              conversion
            </p>
          </motion.div>

          <div className="mt-12">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      {/* Audit Readiness Checklist */}
      <section className="border-b border-border bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-foreground">
              Audit Readiness Checklist
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              What auditors expect to see for limited or reasonable assurance
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {auditChecklist.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-sm text-foreground-secondary">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Out of Scope */}
      <section className="border-b border-border bg-surface px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-foreground">
              What's Out of Scope
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              Transparency about current platform boundaries
            </p>

            <div className="mt-8 space-y-6">
              {outOfScope.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg border border-border bg-background p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {section.category}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-foreground-tertiary" />
                        <span className="text-sm text-foreground-tertiary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-sm italic text-foreground-tertiary">
              These exclusions ensure the platform remains focused on audit-ready
              corporate Scope 1, 2, and selected Scope 3 reporting where data
              quality and governance can be maintained.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <CTASection
            title="Ready for audit-ready emissions reporting?"
            description="Our methodology is designed from the ground up for external assurance and regulatory compliance."
            primaryCTA={{ text: "Request Demo", href: "/contact" }}
            secondaryCTA={{ text: "View Product", href: "/product" }}
          />
        </div>
      </section>
    </div>
  );
}
