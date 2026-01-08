"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    currentSystems: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          currentSystems: "",
          message: "",
          honeypot: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Get in Touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
              Ready to transform your carbon accounting? Let's discuss how Cognifab
              can help you achieve audit-ready emissions reporting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Send us a message
              </h2>
              <p className="mt-2 text-foreground-secondary">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground placeholder-foreground-tertiary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground placeholder-foreground-tertiary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground"
                  >
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground placeholder-foreground-tertiary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-foreground"
                  >
                    Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground placeholder-foreground-tertiary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                    placeholder="e.g., Sustainability Manager"
                  />
                </div>

                <div>
                  <label
                    htmlFor="currentSystems"
                    className="block text-sm font-medium text-foreground"
                  >
                    Current Data Systems
                  </label>
                  <select
                    id="currentSystems"
                    name="currentSystems"
                    value={formData.currentSystems}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                  >
                    <option value="">Select one...</option>
                    <option value="spreadsheets">Spreadsheets only</option>
                    <option value="erp">ERP system (SAP, Oracle, etc.)</option>
                    <option value="sustainability-software">
                      Existing sustainability software
                    </option>
                    <option value="none">No formal system</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground placeholder-foreground-tertiary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                    placeholder="Tell us about your carbon accounting needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-background transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="rounded-md bg-accent-secondary/10 p-4 text-center text-sm text-accent-secondary">
                    Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-md bg-red-500/10 p-4 text-center text-sm text-red-500">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Contact Information
              </h2>
              <p className="mt-2 text-foreground-secondary">
                Prefer to reach out directly? Use any of the methods below.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-accent-primary/10">
                    <Mail className="h-6 w-6 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="mt-1 block text-foreground-secondary transition-colors hover:text-accent-primary"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-accent-primary/10">
                    <Phone className="h-6 w-6 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="mt-1 block text-foreground-secondary transition-colors hover:text-accent-primary"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-accent-primary/10">
                    <Linkedin className="h-6 w-6 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                    <a
                      href={CONTACT_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-foreground-secondary transition-colors hover:text-accent-primary"
                    >
                      Connect with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-lg border border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground">Office Hours</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  Monday - Friday: 9:00 AM - 6:00 PM CET
                </p>
                <p className="mt-1 text-sm text-foreground-secondary">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
