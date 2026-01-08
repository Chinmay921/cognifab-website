"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-4">
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          key={index}
          value={`item-${index}`}
          className="overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-border-hover"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between px-6 py-4 text-left transition-all hover:bg-surface-elevated">
              <span className="text-base font-semibold text-foreground">
                {item.title}
              </span>
              <ChevronDown className="h-5 w-5 text-foreground-secondary transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-6 pb-4 pt-0 text-sm text-foreground-secondary">
              {item.content}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
