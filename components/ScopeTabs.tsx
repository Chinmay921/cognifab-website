"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { SCOPE_CATEGORIES } from "@/lib/constants";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ScopeTabs() {
  return (
    <Tabs.Root defaultValue="scope1" className="w-full">
      <Tabs.List className="flex flex-wrap gap-2 border-b border-border">
        <Tabs.Trigger
          value="scope1"
          className="rounded-t-md border-b-2 border-transparent px-6 py-3 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground data-[state=active]:border-accent-primary data-[state=active]:text-foreground"
        >
          Scope 1
        </Tabs.Trigger>
        <Tabs.Trigger
          value="scope2"
          className="rounded-t-md border-b-2 border-transparent px-6 py-3 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground data-[state=active]:border-accent-primary data-[state=active]:text-foreground"
        >
          Scope 2
        </Tabs.Trigger>
        <Tabs.Trigger
          value="scope3"
          className="rounded-t-md border-b-2 border-transparent px-6 py-3 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground data-[state=active]:border-accent-primary data-[state=active]:text-foreground"
        >
          Scope 3
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="scope1" className="pt-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {SCOPE_CATEGORIES.scope1.title}
            </h3>
            <p className="mt-2 text-foreground-secondary">
              {SCOPE_CATEGORIES.scope1.description}
            </p>
          </div>
          <ul className="space-y-2">
            {SCOPE_CATEGORIES.scope1.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                <span className="text-sm text-foreground-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Tabs.Content>

      <Tabs.Content value="scope2" className="pt-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {SCOPE_CATEGORIES.scope2.title}
            </h3>
            <p className="mt-2 text-foreground-secondary">
              {SCOPE_CATEGORIES.scope2.description}
            </p>
          </div>
          <ul className="space-y-2">
            {SCOPE_CATEGORIES.scope2.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                <span className="text-sm text-foreground-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Tabs.Content>

      <Tabs.Content value="scope3" className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {SCOPE_CATEGORIES.scope3.title}
            </h3>
            <p className="mt-2 text-foreground-secondary">
              {SCOPE_CATEGORIES.scope3.description}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Covered Categories
            </h4>
            <ul className="space-y-2">
              {SCOPE_CATEGORIES.scope3.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-secondary" />
                  <span className="text-sm text-foreground-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground-tertiary">
              Currently Excluded
            </h4>
            <ul className="space-y-2">
              {SCOPE_CATEGORIES.scope3.excluded.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-foreground-tertiary" />
                  <span className="text-sm text-foreground-tertiary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
