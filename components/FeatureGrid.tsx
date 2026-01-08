"use client";

import { motion } from "framer-motion";
import {
  Layers,
  BadgeCheck,
  Coins,
  ShieldCheck,
  Users,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  "badge-check": BadgeCheck,
  coins: Coins,
  "shield-check": ShieldCheck,
  users: Users,
  "chart-bar": BarChart3,
};

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon] || Layers;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent-primary hover:shadow-lg"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-background">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="text-sm text-foreground-secondary">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
